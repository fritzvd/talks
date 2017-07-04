var breedte = 100
var lengte = 10
var balkX = 100
var balkY = 480
var kleur

var balX = 10
var balY = 10
var baldx = -2
var baldy = 2

// begint de tekening
function setup () {
  createCanvas(500, 500)
}

// draait meerdere keren per seconde
function draw () {
  clear()
  
  background(color('lightgray'))
  noStroke()
  fill(color('tomato'))
  // we tekenen een vierkant of "rect"angle.
  rect(balkX, balkY, breedte, lengte)
  ellipse(balX, balY, 14, 14)
  update()
}

function update () {
  if (keyIsDown(LEFT_ARROW) && balkX - 5 > 0)
    balkX-=5;

  if (keyIsDown(RIGHT_ARROW) && balkX + breedte + 5 < 500)
    balkX+=5;
  
  var balOpBalk = (balX >= balkX && balX <= balkX + breedte)
  var balTegenBovenKant = balY <= -1
  // als de bal dezelfde hoogte heeft als de balk
  // wissel dan van richting
  if (balY >= balkY && balOpBalk || balTegenBovenKant) {
    baldy = baldy * -1
  }

  // bal komt tegen één van de zijkanten aan
  var balTegenWand = (balX >= 500 || balX <= -1)
  if (balTegenWand) {
    baldx = baldx * -1
  }

  // voeg elke cycle de snelheid aan de locatie toe
  balY = balY + baldy
  balX = balX + baldx
  
  // als bal verder is gevallen dan het spelscherm
  // start opnieuw
  if (balY > 500) {
    reset()
  }
}

function reset () {
  balY = 0
  // geeft een random getal tussen 0 499
  balX = Math.random() * 500
  baldx = -2
  baldy = 2
}