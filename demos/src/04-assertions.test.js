test('Validate Object Fields', () => {
  const data = { name: 'Sergio' }
  expect(data).toEqual({ name: 'Sergio' })
  data.lastName = 'Villagran'
  expect(data).toEqual({ name: 'Sergio', lastName: 'Villagran' })
})

test('null case', () => {
  const data = null
  expect(data).toBe(null)
  expect(data).toBeDefined()
  expect(data).not.toBeUndefined()
})

test('booleans', () => {
  expect(true).toEqual(true)
  expect(false).toEqual(false)

  expect(false).toBeFalsy()
  expect('').toBeFalsy()
  expect(0).toBeFalsy()
})

test('string', () => {
  expect('Cristoph').toMatch(/stop/)
})

test('list / arrays', () => {
  const numbers = [1, 2, 3]
  expect(numbers).toContain(3)
})
