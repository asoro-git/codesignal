let SessionLoad = 1
let s:so_save = &g:so | let s:siso_save = &g:siso | setg so=0 siso=0 | setl so=-1 siso=-1
let v:this_session=expand("<sfile>:p")
silent only
silent tabonly
cd C:/Obsidian/Aus\ Bright\ Up\ Plus/000\ Highlights/js/codesignal/codesignal/mongodb
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
let s:shortmess_save = &shortmess
if &shortmess =~ 'A'
  set shortmess=aoOA
else
  set shortmess=aoO
endif
badd +1 Adding\ and\ Deleting\ Todos/ex1-instruction.md
badd +22 Adding\ and\ Deleting\ Todos/ex1.js
argglobal
%argdel
edit Adding\ and\ Deleting\ Todos/ex1-instruction.md
let s:save_splitbelow = &splitbelow
let s:save_splitright = &splitright
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
let &splitbelow = s:save_splitbelow
let &splitright = s:save_splitright
wincmd t
let s:save_winminheight = &winminheight
let s:save_winminwidth = &winminwidth
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
wincmd =
tcd C:/Obsidian/Aus\ Bright\ Up\ Plus/000\ Highlights/js/codesignal/codesignal/mongodb
argglobal
setlocal fdm=expr
setlocal fde=v:lua.require'lazyvim.util'.ui.foldexpr()
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=99
setlocal fml=1
setlocal fdn=20
setlocal fen
let s:l = 1 - ((0 * winheight(0) + 15) / 30)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 1
normal! 0
wincmd w
argglobal
if bufexists(fnamemodify("C:/Obsidian/Aus\ Bright\ Up\ Plus/000\ Highlights/js/codesignal/codesignal/mongodb/Adding\ and\ Deleting\ Todos/ex1.js", ":p")) | buffer C:/Obsidian/Aus\ Bright\ Up\ Plus/000\ Highlights/js/codesignal/codesignal/mongodb/Adding\ and\ Deleting\ Todos/ex1.js | else | edit C:/Obsidian/Aus\ Bright\ Up\ Plus/000\ Highlights/js/codesignal/codesignal/mongodb/Adding\ and\ Deleting\ Todos/ex1.js | endif
if &buftype ==# 'terminal'
  silent file C:/Obsidian/Aus\ Bright\ Up\ Plus/000\ Highlights/js/codesignal/codesignal/mongodb/Adding\ and\ Deleting\ Todos/ex1.js
endif
balt C:/Obsidian/Aus\ Bright\ Up\ Plus/000\ Highlights/js/codesignal/codesignal/mongodb/Adding\ and\ Deleting\ Todos/ex1-instruction.md
setlocal fdm=expr
setlocal fde=v:lua.require'lazyvim.util'.ui.foldexpr()
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=99
setlocal fml=1
setlocal fdn=20
setlocal fen
let s:l = 22 - ((21 * winheight(0) + 30) / 60)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 22
normal! 0
wincmd w
2wincmd w
wincmd =
tabnext 1
if exists('s:wipebuf') && len(win_findbuf(s:wipebuf)) == 0 && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20
let &shortmess = s:shortmess_save
let &winminheight = s:save_winminheight
let &winminwidth = s:save_winminwidth
let s:sx = expand("<sfile>:p:r")."x.vim"
if filereadable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &g:so = s:so_save | let &g:siso = s:siso_save
set hlsearch
nohlsearch
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
