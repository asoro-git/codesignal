local M = {}
local status = false
function M.openTerm()
  if not status then
    status = not status
    local parent = vim.fn.expand("%:p:h") -- parent folder of current file
    vim.cmd("silent! stopinsert") -- same effect as <C-\><C-n> for escaping terminal mode
    vim.cmd("10split") -- vertical split; cursor goes to the new window
    vim.cmd("lcd " .. parent) -- set local directory
    vim.cmd("terminal") -- open terminal in this directory
    vim.cmd("silent! startinsert")
  elseif status then
    if vim.bo.buftype == "terminal" then
      vim.cmd("q")
    end
    status = not status
  end
end

return M
