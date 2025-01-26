return {
    -- bufferline
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
    -- Lua
    {
        "nvim-lualine/lualine.nvim",
        event = "VeryLazy",
        opts = {
            theme = "catppuccin-frappe",
        },
    },
}
