local M = {}
local term_exists = false
local status = false
function M.openTerm()
  if not status then
    local parent = vim.fn.expand("%:p:h") -- parent folder of current file
    for _, buf in ipairs(vim.api.nvim_list_bufs()) do
      -- Check if the buffer is a terminal
      if vim.bo[buf].buftype == "terminal" then
        term_exists = true -- do nothing if terminal exists
        vim.cmd("bd! " .. buf)
        pcall(vim.notify, "terminal found, closing it...", vim.log.levels.NOTIFY, {
          icon = "😶",
          id = "terminal",
        })
      end
    end
    term_exists = false
    if not term_exists then
      pcall(vim.notify, "terminal on", vim.log.levels.NOTIFY, {
        icon = "😶",
        id = "terminal",
      })
      vim.cmd("1split") -- vertical split; cursor goes to the new window
      vim.cmd("lcd " .. parent) -- set local directory
      vim.opt.fillchars = {
        horiz = " ",
        horizup = " ",
        horizdown = " ",
      }
      vim.cmd("terminal") -- open terminal in this directory
      local win_id = vim.api.nvim_get_current_win() -- Get the current window ID
      vim.api.nvim_set_option_value("number", false, { scope = "local", win = win_id }) -- Disable line numbers (window-local)
      vim.api.nvim_set_option_value("relativenumber", false, { scope = "local", win = win_id }) -- Disable relative numbers (window-local)
      vim.api.nvim_win_set_height(win_id, 1)
      vim.api.nvim_set_option_value("winbar", "", { scope = "local" })
      vim.api.nvim_set_option_value("signcolumn", "no", { scope = "local" })
      vim.api.nvim_win_set_height(0, 20) -- Set height to 1 line
      vim.cmd("silent! stopinsert")
      term_exists = true
    end

    status = not status
  elseif status then
    if vim.bo.buftype == "terminal" then
      vim.cmd("q")
      term_exists = false
      pcall(vim.notify, "terminal off", vim.log.levels.NOTIFY, {
        icon = "😶",
        id = "terminal",
      })
    end
    status = not status
  end
end

return M
