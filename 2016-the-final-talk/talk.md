

class: center, middle
background-image: url(../assets/nes/node-ie.png)
---
class: center, middle, inverse

# 2016: the final talk

### doing hard things is easy

---
class: center, middle

# 2016: what a year
---
class: center, middle, inverse

### world on fire

---
class: center, middle, inverse

### fatherhood, sourdough bread, conferences, nes development, started teaching

---
class: center, middle, inverse

# conferences
---
# nes talk

<iframe src="https://www.youtube.com/embed/WRSRVdLQ_-k" frameborder="0" allowfullscreen></iframe>

---
background-image: url(../assets/nes/ruhr-0.png)

---
background-image: url(../assets/nie.jpeg)

---
class: inverse
background-image: url(../assets/tokyonodefest.png)
---
class: middle, center

# how did this happen
---
class: middle, center

# a little idea

### let's build a nes game
---
class: middle, center

# how hard can it be

---
class: middle, center

# pretty damn hard
---
class: middle
## Fun facts
* 1.79 MHz 6502-like CPU
* 5.37 MHz PPU
* 2 kb RAM
* 256 x 240 (NTSC 256x224)
* 64 colors, with duplicates (i.e. 54)
* 3 colors per sprite / tile
* 8 'keys' (left, right, etc)
* 8 sprites per scanline
* CHR and PRG ROM

---
class: middle, center
# learn you some 6502

---
class: middle
# variables
```
var b = 3;
```

```x86asm
; we don't have names for variables so we store it
; at memory address $0200

; load the literal value 3 and temporarily store it in the accumulator or register "A"
lda #$03

; store the value that is in "A" to memory location $0200
sta $0200
```

---
class: middle
# "loops"
```
for (i=0; i < 16; i++) {

}
doStuff()
```

```x86asm
jsr init           ; jsr = jump to subroutine
jsr myFirstLoop
jsr doStuff

init:
  ldx     #$00     ;load the literal value of 0 in X
  rts              ;return from subroutine

myFirstLoop:
  inx              ;increment x
  cpx      #$10    ;compare x with 10
  bne myFirstLoop  ;branch to myFirstLoop if not equal
  rts              ;return from subroutine

doStuff:
 ...
```
---
class: center, middle

# nothing is cheap on a 2kb RAM device
---
class: center, middle

# unexpected things ..

---
class: middle
# why won't this work?
.footnote[not a syntax error, code is the same]
```
for (i=0; i < 320; i++) {

}
doStuff()
```

```x86asm
jsr init           ; jsr = jump to subroutine
jsr myFirstLoop
jsr doStuff

init:
  ldx     #$00     ;load the literal value of 0 in X
  rts              ;return from subroutine

myFirstLoop:
  inx              ;increment x
  cpx      #$140   ;compare x with 320
  bne myFirstLoop  ;branch to myFirstLoop if not equal
  rts              ;return from subroutine

doStuff:
 ...
```
---
class: inverse, center, middle
# doing trivial things is hard

---
class: inverse, center, middle
# abstract syntax tree path

---
# parse, replace

```
setBgPalette([
  0x2a, 0x15, 0x25, 0x27,
  0x2a, 0x19, 0x29, 0x39,
  0x2a, 0x11, 0x21, 0x31,
  0x2a, 0x17, 0x27, 0x37
])
```

```
PaletteData:
	.db $2A,$15,$25,$27,$2A,$19,$29,$39,$2A,$11,$21,$31,$2A,$17,$27,$37
	.db $2A,$15,$25,$27,$2A,$19,$29,$39,$2A,$11,$21,$31,$2A,$17,$27,$37

LoadPalettesLoop:
	lda PaletteData, x
	sta $2007
	inx
	cpx #$20
	bne LoadPalettesLoop
```
---
class: inverse, center, middle
# open source abandonware

---
class: inverse, center, middle
# took it and polished it

---
class: inverse, center, middle
# with the help of my friends

---
class: inverse, center, middle
# demo time
---
class: center, middle, inverse, not-pixelated, blue-letters
background-image: url(../assets/nes/pallette.jpg)
---
class: center, inverse, dark-letters
background-image: url(../assets/nes/mrgimmick.png)
# Backgrounds
---
class: center, inverse, dark-letters
background-image: url(../assets/nes/layla.png)
# Spriteswap

---
class: inverse, center, middle
# this happened

### [mmatuzak's blog post](https://medium.com/@mmatuzak/hacking-your-nintendo-with-javascript-88be5a5782ea#.ooh0zt3bh)

---
class: inverse, center, middle
# i'm also abandoning that idea
---
class: inverse, center, middle
# program the NES in ASM or C with CC65

---
class: inverse, center, middle
# made this prior to the conf
## powerpoint for the nes

---
class: inverse, center, middle
# doing hard things is easy

---
class: inverse, center, middle
# if you know what you're doing

---
class: inverse, center, middle
# doing hard things is easy

---
class: inverse, center, middle
# when people are being nice

---
class: inverse, center, middle

# thank you

#### [getting started guide](http://blog.fritzvd.com/2016/06/13/Getting-started-with-NES-programming/)
#### ["powerpoint.nes" - WIP](https://github.com/fritzvd/ruhr.nes)
#### [nes-talk js live demo](https://github.com/fritzvd/ruhr.js)

#### [Easy 6502 - 6502 asm tutorial](https://skilldrick.github.io/easy6502/)

<a href="mailto:fritzvd@gmail.com"><i class="fa fa-envelope fa-4x"></i></a>
          <a href="http://github.com/fritzvd"><i class="fa fa-github fa-4x"></i></a>
          <a href="http://twitter.com/fritzvd"><i class="fa fa-twitter fa-4x"></i></a>
          <a href="http://nl.linkedin.com/in/fritzvd"><i class="fa fa-linkedin fa-4x"></i></a>
