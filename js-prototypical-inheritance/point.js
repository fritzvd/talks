function Point (lat, lng) {
  this.lat = lat
  this.lng = lng
}

Point.prototype.getPoint = function (lat, lng) {
  var point
  if (typeof lat == 'number' && typeof lng == 'number') {
    point = new Point(lat, lng)
  } else if (lat.constructor == Point) {
    point = lat
  } else if (lat.hasOwnProperty('lat') && lat.hasOwnProperty('lng')) {
    point = new Point(lat.lat, lat.lng)
  } else {
    throw Point.prototype.errors.invalid
  }
  return point
}

Point.prototype.distance = function (lat, lng) {
  var b = Point.prototype.getPoint(lat, lng)

  var distlat = Math.abs(b.lat - this.lat)
  var distlng = Math.abs(b.lng - this.lng)

  return Math.sqrt(Math.pow(distlat, 2), Math.pow(distlng, 2))
}

Point.prototype.distanceMeters = function (lat, lng) {
  var b = Point.prototype.getPoint(lat, lng)

  // Haversine, Can't touch this.
  var R = 6371000 // metres
  var φ1 = b.lat * 0.017
  var φ2 = this.lat * 0.017
  var Δφ = Math.abs(this.lat - b.lat) * 0.017
  var Δλ = Math.abs(this.lng - b.lng) * 0.017

  var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
        Math.cos(φ1) * Math.cos(φ2) *
        Math.sin(Δλ/2) * Math.sin(Δλ/2)
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))

  return R * c
}

Point.prototype.errors = {
  invalid: new Error('Invalid distance argument')
}

module.exports = Point
