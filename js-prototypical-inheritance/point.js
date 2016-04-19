function Point (lat, lng) {
  this.lat = lat
  this.lng = lng
}

Point.prototype.distance = function (lat, lng) {
  var b
  if (typeof lat == 'number' && typeof lng == 'number') {
    b = new Point(lat, lng)
  } else if (lat.constructor == Point) {
    b = lat
  } else {
    throw Point.prototype.errors.invalid
  }

  var distlat = Math.abs(b.lat - this.lat)
  var distlng = Math.abs(b.lng - this.lng)

  return new Point(distlat, distlng)
}

Point.prototype.errors = {
  invalid: new Error('Invalid distance argument')
}

module.exports = Point
