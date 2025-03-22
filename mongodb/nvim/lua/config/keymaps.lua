-- Keymaps are automatically loaded on the VeryLazy event
-- Default keymaps that are always set: https://github.com/LazyVim/LazyVim/blob/main/lua/lazyvim/config/keymaps.lua
-- Add any additional keymaps here
local keymap = vim.keymap
local opts = { noremap = true, silent = true }
local inlayHints = require("asoro.lsp")

local bounc_cursor = function()
    local cursor_position = vim.api.nvim_win_get_cursor(0) -- Save current cursor position
    return cursor_position -- Perform `Yp`: Yank the current line and paste below
end
local Yp_func = function(cmd)
    local cursor_posit = bounc_cursor()
    vim.cmd(cmd) --"normal! Yp"
    vim.api.nvim_win_set_cursor(0, cursor_posit) -- Restore cursor position
end

inlayHints.toggleInlayHints()

keymap.set("n", "<leader>sx", require("telescope.builtin").resume, opts)

-- Increment/decrement swap
keymap.set("n", "+", "<C-a>")
keymap.set("n", "-", "<C-x>")

-- New tab
keymap.set("n", "te", ":tabedit<Return>", opts)
keymap.set("n", "<Tab>", ":tabnext<Return>", opts)
keymap.set("n", "<S-Tab>", ":tabprev<Return>", opts)

-- New window
keymap.set("n", "ss", ":split<Return>", opts)
keymap.set("n", "sv", ":vsplit<Return>", opts)
keymap.set("n", "sx", ":q<Return>", opts)

-- F4 to set to local file
keymap.set("n", "<F4>", ":lcd %:p:h:h", { noremap = true, silent = false })
-- Duplicates
keymap.set("n", "<A-d>", function()
    Yp_func("normal! Yp")
end, opts)
keymap.set("v", "<A-d>", function()
    Yp_func("normal! Yp")
end, opts)
keymap.set("i", "<A-d>", function()
    Yp_func("normal! Yp")
end, opts)

-- New line
keymap.set("n", "<Return>", "o<Esc>", opts)

-- Without changing register
keymap.set("n", "x", '"_x')
keymap.set("n", "<Leader>p", '"0p')
keymap.set("n", "<Leader>P", '"0P')
keymap.set("v", "<Leader>p", '"0p')

--swap key to default not clip
keymap.set("n", "c", '"_c')
keymap.set("n", "C", '"_C')
keymap.set("v", "C", '"_C')
keymap.set("n", "<Leader>c", "c")
keymap.set("n", "<Leader>C", "C")
keymap.set("v", "<Leader>C", "C")

--swap key to default not clip
keymap.set("n", "d", '"_d')
keymap.set("n", "D", '"_D')
keymap.set("v", "d", '"_d')
keymap.set("v", "D", '"_D')
keymap.set("n", "<Leader>d", "d")
keymap.set("n", "<Leader>D", "D")
keymap.set("v", "<Leader>d", "d")
keymap.set("v", "<Leader>D", "D")

-- copy to sys clipboard
keymap.set("v", "<C-c>", '"+y')

-- Select all
keymap.set("n", "<C-a>", "ggVG")

-- continuation enabled
keymap.set("n", "<Leader>o", "o", opts)
keymap.set("n", "<Leader>O", "O", opts)

-- disable continuation

keymap.set("n", "o", 'o<Esc>^"_Da', opts)
keymap.set("n", "O", 'O<Esc>^"_Da', opts)

-- toggle hint
keymap.set("n", "<Leader>i", function()
    inlayHints.toggleInlayHints()
end, { desc = "Hints" })

--escape terminal
keymap.set("t", "<Esc>", [[<C-\><C-n>]], { desc = "Exit Terminal mode" })

-- F3 toggle terminal from folder
keymap.set("n", "<F3>", function()
    require("asoro.term").openTerm()
end, { desc = "Terminal" })

-- toggle file explorer
-- vim.keymap.set("n", "<leader>e", vexPop.OpenVexPopup, { desc = "Open Vex in a popup window" })
keymap.set("n", "<leader>e", function()
    vim.cmd("NvimTreeToggle")
end, opts)

-- toggle config
vim.keymap.set("n", "<leader>cD", function()
    vim.cmd("cd " .. vim.fn.stdpath("config"))
    print("Changed to Neovim config directory")
end)
