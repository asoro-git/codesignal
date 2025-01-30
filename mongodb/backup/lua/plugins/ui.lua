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
	-- terminal

	{

		"akinsho/toggleterm.nvim",
		config = function()
			require("toggleterm").setup({
				open_mapping = [[<c-\>]],
				size = 1, -- Set terminal height to 1 line
				on_open = function(term)
					vim.api.nvim_set_option_value("number", false, { buf = term.bufnr }) -- Disable line numbers
					vim.api.nvim_set_option_value("relativenumber", false, { buf = term.bufnr }) -- Disable relative numbers
					vim.api.nvim_win_set_height(0, 1) -- Resize the window
				end,
			})
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
