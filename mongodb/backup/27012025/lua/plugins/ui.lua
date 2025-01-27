return {

  -- Bufferline
  {
    "akinsho/bufferline.nvim",
    keys = {
      { "<Tab>", "<Cmd>BufferLineCycleNext<CR>", desc = "Next tab" },
      { "<S-Tab>", "<Cmd>BufferLineCyclePrev<CR>", desc = "Prev tab" },
    },
    opts = {
      options = {
        mode = "tabs",
        show_buffer_close_icons = false,
        show_close_icon = false,
      },
    },
  },

  -- Loading Theme
  {
    {
      "catppuccin/nvim",
      name = "catppuccin",
      priority = 1000,
      config = function()
        require("catppuccin").setup({
          flavour = "frappe",
          transparent_background = true,
        })
      end,
    },
    {
      "LazyVim/LazyVim",
      opts = {
        colorscheme = "catppuccin-frappe",
        rocks = {
          enabled = true,
          -- optionally ensure some packages
          ensure_installed = { "penlight", "inspect" },
        },
      },
    },
  },
  -- Lua
  {
    "nvim-lualine/lualine.nvim",
    opts = {
      theme = "catppuccin-frappe",
    },
  },

  -- notifications
  {
    "folke/noice.nvim",
    opts = function(_, opts)
      table.insert(opts.routes, {
        filter = {
          event = "notify",
          find = "No information available",
        },
        opts = { skip = true },
      })
      table.insert(opts.routes, {
        filter = {
          event = "notify",
          find = "Ignoring invalid configuration",
        },
        opts = { skip = true },
      })
      local focused = true
      vim.api.nvim_create_autocmd("FocusGained", {
        callback = function()
          focused = true
        end,
      })
      vim.api.nvim_create_autocmd("FocusLost", {
        callback = function()
          focused = false
        end,
      })
      table.insert(opts.routes, 1, {
        filter = {
          cond = function()
            return not focused
          end,
        },
        view = "notify_send",
        opts = { stop = false },
      })

      opts.commands = {
        all = {
          -- options for the message history that you get with `:Noice`
          view = "split",
          opts = { enter = true, format = "details" },
          filter = {},
        },
      }

      vim.api.nvim_create_autocmd("FileType", {
        pattern = "markdown",
        callback = function(event)
          vim.schedule(function()
            require("noice.text.markdown").keys(event.buf)
          end)
        end,
      })

      opts.presets.lsp_doc_border = true
    end,
  },
  {
    "rcarriga/nvim-notify",
    opts = {
      timeout = 5000,
    },
  },
  -- Core nvim-cmp plugin
  -- Snippet engine (required for nvim-cmp snippet support)
  {
    "L3MON4D3/LuaSnip",
    enabled = true,
    dependencies = {
      -- VSCode-style snippet loader (optional, for community snippets)
      "rafamadriz/friendly-snippets",
    },
    config = function()
      require("luasnip.loaders.from_vscode").lazy_load()
    end,
  },
  -- snippet function
  {
    "hrsh7th/nvim-cmp",
    enabled = true,
    dependencies = {
      "L3MON4D3/LuaSnip", -- Snippet engine
      "rafamadriz/friendly-snippets", -- Predefined snippets
      "hrsh7th/cmp-nvim-lsp",
      -- Snippet source for nvim-cmp
      "saadparwaiz1/cmp_luasnip",
      -- Buffer source for nvim-cmp
      "hrsh7th/cmp-buffer",
      -- Path source for nvim-cmp
      "hrsh7th/cmp-path",
      -- Command-line source for nvim-cmp (optional)
      "hrsh7th/cmp-cmdline",
    },
    opts = function(_, opts)
      local cmp = require("cmp")
      local luasnip = require("luasnip")

      -- Lazy-load friendly-snippets
      require("luasnip.loaders.from_vscode").lazy_load()

      opts.mapping = cmp.mapping.preset.insert({
        -- using Tab to select snippet options, Enter (CR) to enter snippet, <S-Tab> to select prev option
        ["<C-Space>"] = cmp.mapping.complete(), -- Trigger completion manually
        ["<Tab>"] = cmp.mapping.confirm({ select = true }), -- Confirm selection
        ["<CR>"] = cmp.mapping(function(fallback)
          if cmp.visible() then
            cmp.select_next_item()
          elseif luasnip.expand_or_jumpable() then
            luasnip.expand_or_jump()
          else
            fallback()
          end
        end, { "i", "s" }),
        ["<S-Tab>"] = cmp.mapping(function(fallback)
          if cmp.visible() then
            cmp.select_prev_item()
          elseif luasnip.jumpable(-1) then
            luasnip.jump(-1)
          else
            fallback()
          end
        end, { "i", "s" }),
      })

      -- Add snippet capabilities
      opts.sources = cmp.config.sources(vim.list_extend(opts.sources, {
        { name = "luasnip" },
      }))
    end,
  },
  -- Dashboard
  {
    "folke/snacks.nvim",
    opts = {
      dashboard = {
        preset = {
          header = [[

        .,::OOO::,.     .,ooOOOoo,.     .,::OOO::,.          
      .:'         `:. .8'         `8. .:'         `:.        
     .:"           ":.8"           "8 :"           ":.       
     ::             ::8             8 :             ::       
     ':,        .,:::""::,.     .,:o8OO::,.        ,:'       
      ':,,    .:' ,:   8oo`:. .:'oo8   :,,`:.    ,,:'        
        `^OOoo:"O^'     `^88oo:"8^'     `^O":ooOO^'          
             .:             : :             :.               
             ':,           ,: :,           ,:'               
              ':,,       ,,:   :,,       ,,:'                
                `^Oo,,,oO^'     `^OOoooOO^'                  


Olympics
]],
        },
      },
    },
  },

  -- No animation, save you lots of headaches
  -- {
  --   "echasnovski/mini.animate",
  --   config = function()
  --     local animate = require("mini.animate")
  --     animate.setup({
  --       -- Cursor path
  --       cursor = {
  --         enable = false,
  --       },
  --       -- Vertical scroll
  --       scroll = {
  --         enable = false,
  --       },
  --       -- -- Window resize
  --       resize = {
  --         enable = false,
  --         -- Timing of animation (how steps will progress in time)
  --         -- timing = 20, --<function: implements linear total 250ms animation duration>,
  --       },
  --       -- Window open
  --       open = {
  --         enable = false,
  --         -- timing = 20, --<function: implements linear total 250ms animation duration>,
  --       },
  --       -- Window close
  --       close = {
  --         enable = false,
  --         -- timing = 20, --<function: implements linear total 250ms animation duration>,
  --       },
  --     })
  --   end,
  -- },
}
