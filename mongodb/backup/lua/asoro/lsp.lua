local M = {}
local inlayhints = require("lsp-inlayhints")
local status = true
vim.api.nvim_create_augroup("LspAttach_inlayhints", {})
vim.api.nvim_create_autocmd("LspAttach", {
  group = "LspAttach_inlayhints",
  callback = function(args)
    if not (args.data and args.data.client_id) then
      return
    end

    local bufnr = args.buf
    local client = vim.lsp.get_client_by_id(args.data.client_id)
    inlayhints.on_attach(client, bufnr)
  end,
})
function M.toggleInlayHints()
  inlayhints.toggle()
  status = not status
  print("Inlayhints" .. (status and "On" or "Off"))
end

return M
