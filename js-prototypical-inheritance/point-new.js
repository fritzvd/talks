var pointProto = {
  distance: function (lat, lng) {
    var b
    if (typeof lat == 'number' && typeof lng == 'number') {
      b = new Point(lat, lng)
    } else if (lat.constructor == Point) {
      b = lat
    } else {
      throw pointProto.errors.invalid
    }

    var distlat = Math.abs(b.lat - this.lat)
    var distlng = Math.abs(b.lng - this.lng)

    return new Point(distlat, distlng)
  },

  errors: {
    invalid: new Error('Invalid distance argument')
  }

}

function Point (lat, lng) {
  var point = Object.create(pointProto)
  point.lat = lat
  point.lng = lng

  return point
}

module.exports = Point
