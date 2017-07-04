
class: center, middle, inverse

# spelletje maken

---
class: middle
# wat gaan we doen?

- 'hands-on' 
- iedereen doet mee
- heb je een vraag? stel je even voor.

---
class: center, middle,
# computer aan?
#### ga naar http://bit.ly/spelstart
#### downloaden
#### rechtermuisknop &nbsp;&nbsp;&#866;&nbsp; uitpakken
#### folder openen, rechtermuisknop index.html -> open met chrome
#### terug naar folder, rechtermuisknop op sketch.js -> open met Notepad++
---
class: center, middle,
# variabelen
 een plek, bakje of post-it waar een waarde wordt opgeslagen

---
class: middle,
# speel eens met de waarde van de variabelen
```
// bovenaan
var breedte = 10
var lengte = 10
var balkX = 20
var balkY = 60

function draw () {
  // ...
  rect(balkX, balkY, breedte, lengte)
  // ...
}
```
---
class: middle,
# probeer ook

```
// bovenaan
var cirkelX = 200
var cirkelY = 100
var cirkelbreedte = 50
var cirkellengte = 50

function draw () {
    // ...
    ellipse(cirkelX, cirkelY, cirkelbreedte, cirkellengte)

    triangle(30, 75, 58, 20, 86, 75)
    // ...
}
```
---
background-image: url(../assets/coordinates.jpg)
---
background-image: url(../assets/coordinatesflipped.jpg)
---
class: center, middle,
# functies
---
background-image: url(../assets/function.png)
---
class: center, middle
# f(x) = 3x
---
class: center, middle
# f(x) = 3x
# x = 2
---
class: middle
# terug naar de code
```javascript
function draw () {
  background(0)
  fill(color('red'))
  // ...
}
```
---
class: middle,
# functies
een stukje code dat wordt aangeroepen met een naam

lijkt op een knopje van het beeldscherm:
het doet altijd hetzelfde

---
class: middle
# nieuwe functie maken
```javascript
function draw () {
    clear()
    // ...
    update()
}

function update () {
    balkX = balkX - 1
}
```

---
class: center, middle,
# condities
if-then-else

---
class: center, middle
background-image: url(../assets/conditional.png)
---
class: middle,

# en nu in code

```javascript
function update () {
  if (keyIsDown(LEFT_ARROW)) {
    balkX = balkX - 5
  }
}
```
---
class: middle, center
# kan je nog meer richtingen bedenken?
---
class: middle,
```javascript
// onderaan
function update () {
  if (keyIsDown(LEFT_ARROW)) {
    balkX = balkX - 5
  }

  if (keyIsDown(RIGHT_ARROW)) {
    balkX = balkX + 5
  }
}
```
---
# de bal staat stil!

```javascript
// bovenaan file:
var baldx = 0
var baldy = 2

function update () {    
  // ...

  // laat de bal bewegen
  balY = balY + baldy
  balX = balX + baldx
}
```
---
class: middle
# de balk "verlaat" het scherm

```javascript
function update () {
  // druk je het pijltje in? 
  // en is de balk locatie niet kleiner dan het nulpunt?
  if (keyIsDown(LEFT_ARROW) && balkX - 5 > 0) {
    balkX = balkX - 5
  }

  if (keyIsDown(RIGHT_ARROW)) {
    balkX = balkX - 5
  }
  
  // ...
}
```
---
class: middle
# de bal laten "stuiteren" tegen onderkant

```javascript
function update () {
  // ...

  // als de bal dezelfde hoogte heeft als de balk
  // wissel dan van richting
  if (balY >= balkY) {
    baldy = baldy * -1
  }

  // ...
}
```
---
# bal stuitert alleen tegen balk (niet daarnaast)
```javascript
function update () {
 // ...

  // de bal valt binnen de breedte van de balk
  var balOpBalk = (balX >= balkX && balX <= balkX + breedte);
  // als de bal dezelfde hoogte heeft als de balk
  // en de bal valt binnen de breedte van de balk
  // wissel dan van richting
  if (balY >= balkY && balOpBalk) {
    baldy = baldy * -1
  }

  // ...
}
```
---
# bal stuitert tegen balk en bovenkant
```javascript
function update () {
 // ...
  // de bal valt binnen de breedte van de balk
  var balOpBalk = (balX >= balkX && balX <= balkX + breedte)

  // bal komt tegen de bovenkant van het scherm aan
  var balTegenBovenKant = balY <= -1

  // als de bal dezelfde hoogte heeft als de balk
  // en de bal valtbinnen de breedte van de balk
  // OF de bal komt tegen bovenkant aan
  // wissel dan van richting
  if (balY >= balkY && balOpBalk || balTegenBovenKant) {
    baldy = baldy * -1
  }

  // ...
}
```
---
# bal heen en weer laten gaan
```javascript
// bovenaan
var baldx = -2

function update () {
 // ...

  // bal komt tegen één van de zijkanten aan
  var balTegenWand = (balX >= 500 || balX <= -1)
  if (balTegenWand) {
    baldx = baldx * -1
  }

  // ...
```

---
# game over start de game opnieuw op
```javascript

function update () {
 // ...

  // als bal verder is gevallen dan het spelscherm
  // start opnieuw
  if (balY > 500) {
    reset()
  }
}

// start alles weer op 0.
function reset () {
  balY = 0
  // geeft een random getal tussen 0 499
  balX = Math.random() * 500
  baldx = -2
  baldy = 2
}
```
---
class: inverse, middle, center
# bedankt
bekijk hier ook het eind resultaat:
[code](https://github.com/fritzvd/talks/blob/gh-pages/spel-p5/spelletjemaken/sketch.js)
[live demo](http://fritzvd.com/talks/spel-p5/spelletjemaken/)
[alle bestanden](https://github.com/fritzvd/talks/raw/gh-pages/spel-p5/spelletjemaken/eindproduct.zip)
---
class: inverse, middle, center
# toevoegingen?
## scores? een tweede 'paddle'?

[text toevoegen](https://p5js.org/reference/#/p5/text)
[andere p5 tutorials](https://p5js.org/tutorials/)
