local M = {}
local vex_popup_win_id = nil

function M.OpenVexPopup()
    -- Check if the topleft window already exists
    for _, win_id in ipairs(vim.api.nvim_tabpage_list_wins(0)) do
        local win_config = vim.api.nvim_win_get_config(win_id)
        if win_config.relative == "" and vim.bo[vim.api.nvim_win_get_buf(win_id)].filetype == "netrw" then
            -- Close the existing window
            vim.api.nvim_win_close(win_id, true)
            vex_popup_win_id = nil
            return
        end
    end

    -- If no existing window, use the topleft window
    vim.cmd(":topleft Vex") -- Opens the file explorer in the topleft window
    local win_id = vim.fn.win_getid()
    vex_popup_win_id = win_id

    -- Configure split direction for file opening
    vim.cmd([[
    let g:netrw_browse_split = 4 " Open files in a new window on the right
    let g:netrw_altv = 1      " Use vertical splits by default
    let g:netrw_winsize = 30  " Set the initial size of the file explorer window
  ]])
end

-- return M
