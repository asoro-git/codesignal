return {
    { "catppuccin/nvim" },
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
}
