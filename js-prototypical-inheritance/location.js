// var Point = require('./point')

function Location (name, lat, lng) {
  this.name = name
  Point.call(this, lat, lng)
}

Location.prototype = Object.create(Point.prototype)
Location.prototype.constructor = Location;

module.exports = Location
