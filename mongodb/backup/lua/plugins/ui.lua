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
          transparent_background = false,
          integrations = {
            notify = true,
          },
        })
      end,
    },
    {
      "LazyVim/LazyVim",
      opts = {
        colorscheme = "catppuccin-frappe",
      },
    },
    {
      "LazyVim/LazyVim",
      opts = {
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
  {
    "folke/snacks.nvim",
    opts = {
      dashboard = {
        preset = {
          header = [[Just Do it.]],
        },
      },
    },
  },
}
