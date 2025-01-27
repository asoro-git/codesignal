-- Autocmds are automatically loaded on the VeryLazy event
-- Default autocmds that are always set: https://github.com/LazyVim/LazyVim/blob/main/lua/lazyvim/config/autocmds.lua
--
-- Add any additional autocmds here
-- with `vim.api.nvim_create_autocmd`
--
-- Or remove existing autocmds by their group name (which is prefixed with `lazyvim_` for the defaults)
-- e.g. vim.api.nvim_del_augroup_by_name("lazyvim_wrap_spell")
-- vim.api.nvim_create_autocmd("TermOpen", {
--   pattern = "*",
--   callback = function()
--     vim.opt_local.winbar = "" -- Clear the winbar
--     vim.opt_local.number = false
--     vim.opt_local.relativenumber = false
--     vim.opt_local.signcolumn = "no"
--     vim.cmd("resize 1") -- Set height to 1 line
--   end,
-- })

-- Detects cmd, if cursor enters cmd, resizes to 20
vim.api.nvim_create_autocmd("WinEnter", {
  callback = function()
    if vim.bo.buftype == "terminal" then
      vim.api.nvim_win_set_height(0, 20) -- Resize terminal to 15 lines when entering
    end
  end,
})
-- leaving shrinks it
vim.api.nvim_create_autocmd("WinLeave", {
  callback = function()
    if vim.bo.buftype == "terminal" then
      vim.api.nvim_win_set_height(0, 1) -- Resize terminal to 1 line when leaving
    end
  end,
})

-- Turn off paste mode when leaving insert
vim.api.nvim_create_autocmd("InsertLeave", {
  pattern = "*",
  command = "set nopaste",
})

-- Disable the concealing in some file formats
-- The default conceallevel is 3 in LazyVim
vim.api.nvim_create_autocmd("FileType", {
  pattern = { "json", "jsonc", "markdown" },
  callback = function()
    vim.opt.conceallevel = 0
  end,
})
