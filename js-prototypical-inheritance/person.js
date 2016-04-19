function Person (name) {
  var person = Object.create({}, {
    name: {
      enumerable: true,
      writable: true,
      value: name
    },
    age: {
      enumerable: false,
      writable: false,
      value: 43
    }
  })

  var _socialSecurity = 12314
  Object.defineProperty(person, 'socialsecurity', {
    enumerable: true,
    get: function () {
      return _socialSecurity
    },
    set: function (value) {
      _socialSecurity = parseInt(value)
    }
  })

  return person
}

module.exports = Person
