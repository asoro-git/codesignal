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
badd +3 C:/Obsidian/Aus\ Bright\ Up\ Plus/000\ Highlights/js/codesignal/codesignal/mongodb/Adding\ and\ Deleting\ Todos/ex3/ex3-instruction.md
badd +1 C:/Obsidian/Aus\ Bright\ Up\ Plus/000\ Highlights/js/codesignal/codesignal/mongodb/Adding\ and\ Deleting\ Todos/ex3/ex3-sample.js
badd +31 sesison
badd +1 C:/Obsidian/Aus\ Bright\ Up\ Plus/000\ Highlights/js/codesignal/codesignal/mongodb/Adding\ and\ Deleting\ Todos/ex3/ex3-ans.js
argglobal
%argdel
edit C:/Obsidian/Aus\ Bright\ Up\ Plus/000\ Highlights/js/codesignal/codesignal/mongodb/Adding\ and\ Deleting\ Todos/ex3/ex3-instruction.md
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
argglobal
setlocal fdm=expr
setlocal fde=v:lua.require'lazyvim.util'.ui.foldexpr()
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=99
setlocal fml=1
setlocal fdn=20
setlocal fen
let s:l = 3 - ((2 * winheight(0) + 30) / 60)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 3
normal! 0149|
wincmd w
argglobal
if bufexists(fnamemodify("sesison", ":p")) | buffer sesison | else | edit sesison | endif
if &buftype ==# 'terminal'
  silent file sesison
endif
balt C:/Obsidian/Aus\ Bright\ Up\ Plus/000\ Highlights/js/codesignal/codesignal/mongodb/Adding\ and\ Deleting\ Todos/ex3/ex3-ans.js
setlocal fdm=expr
setlocal fde=v:lua.require'lazyvim.util'.ui.foldexpr()
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=99
setlocal fml=1
setlocal fdn=20
setlocal fen
1
normal! zo
29
normal! zo
29
normal! zo
29
normal! zo
37
normal! zo
38
normal! zo
40
normal! zo
48
normal! zo
50
normal! zo
64
normal! zo
64
normal! zo
64
normal! zo
83
normal! zo
83
normal! zo
83
normal! zo
let s:l = 31 - ((30 * winheight(0) + 30) / 60)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 31
normal! 021|
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
