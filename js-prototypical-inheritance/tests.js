var Point = require('./point')
var Person = require('./person')
var tape = require('tape')

tape('Point should be able to calc distance', function (t) {
  var zakkendragershof = new Point(52.092911, 5.115336)
  var vinkenburg = new Point(52.092024, 5.117546)

  t.plan(3)

  var zeroDist = zakkendragershof.distance(zakkendragershof)
  t.deepEqual(zeroDist, 0)

  var distanceZV = zakkendragershof.distance(vinkenburg)
  var distanceVZ = vinkenburg.distance(zakkendragershof)

  t.deepEqual(distanceVZ, distanceZV)

  function invalidDistance () {
    zakkendragershof.distance('henk')
  }

  t.throws(invalidDistance, Point.prototype.errors.invalid)
})

tape('Point.prototype.distance as static method', function (t) {
  t.plan(1)

  var zakkendragershof = {
    lat: 52.092911,
    lng: 5.115336
  }
  var vinkenburg = {
    lat: 52.092024,
    lng: 5.117546
  }

  // bind binds the first object as `this` as a new function
  var dist = Point.prototype.distance.bind(
    vinkenburg,
    zakkendragershof.lat,
    zakkendragershof.lng
  )()
  t.deepEqual(dist, 0.0008869999999987499)
})

tape('Point can be instantiated with Object.create', function (t) {
  t.plan(2)
  var zakkendragershofCreate = Object.create(Point.prototype, {
    lat: {
      enumerable: true,
      value: 52.092911
    },
    lng: {
      enumerable: true,
      value: 5.115336
    }
  })
  var zakkendragershofNew = new Point(52.092911, 5.115336)

  t.deepEqual(
    zakkendragershofCreate.distance(zakkendragershofNew),
    0
  )
  t.deepEqual(zakkendragershofNew, zakkendragershofCreate)
})

tape('Person has restrictions', function (t) {
  t.plan(3)

  var name = 'Jan Diederik Hermans'
  var p = new Person(name)
  p.name = 'piet'
  t.equals(p.name, name)
  t.deepEquals(Object.keys(p), ['name', 'socialsecurity'])

  p.age = 100000
  t.equals(p.age, 43)

})
