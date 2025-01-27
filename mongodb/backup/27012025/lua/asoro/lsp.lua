local M = {}
local status = false

-- vim.api.nvim_create_autocmd("LspAttach", {
--   callback = function(args)
--     local client = vim.lsp.get_client_by_id(args.data.client_id)
--     if client:supports_method("textDocument/formatting") then
--       -- Format the current buffer on save
--       vim.api.nvim_create_autocmd("BufWritePre", {
--         buffer = args.buf,
--         callback = function()
--           vim.lsp.buf.format({ bufnr = args.buf, id = client.id })
--         end,
--       })
--     end
--   end,
-- })

function M.toggleInlayHints()
  vim.lsp.inlay_hint.enable(not vim.lsp.inlay_hint.is_enabled())
  status = not status
  local emoji = (status and "😎" or "😊")
  local message = "Inlay hints " .. (status and "On" or "Off")
  pcall(vim.notify, message, vim.log.levels.INFO, {
    icon = emoji,
    id = "InlayHint",
  })
end

return M

-- vim.api.nvim_create_augroup("LspAttach_inlayhints", {})
-- vim.api.nvim_create_autocmd("LspAttach", {
--   group = "LspAttach_inlayhints",
--   callback = function(args)
--     if not (args.data and args.data.client_id) then
--       return
--     end
--     local bufnr = args.buf
--     local client = vim.lsp.get_client_by_id(args.data.client_id)
--     inlayhints.on_attach(client, bufnr)
--   end,
-- })
