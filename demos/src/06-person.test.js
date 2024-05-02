const Person = require('./06-person')

describe('Test for Person', () => {
  let person

  beforeEach(() => {
    person = new Person('Sergio', 50, 1.7)
  })

  test('Shoud return down', () => {
    person.weight = 50
    const imc = person.calcIMC()
    expect(imc).toBe('down')
  })

  test('Shoud return normal', () => {
    person.weight = 62
    const imc = person.calcIMC()
    expect(imc).toBe('normal')
  })
})
