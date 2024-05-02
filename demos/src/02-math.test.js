const { sum, divide, multiply } = require('./02-math')

test('1 + 3 should be 3', () => {
  const rta = sum(1, 3)
  expect(rta).toBe(4)
})

test('every number multiplied by 1 should be the same number', () => {
  const rta = multiply(1, 3)
  expect(rta).toBe(3)
})

test('Number divided by it self should be the same number', () => {
  const rta = divide(3, 1)
  expect(rta).toBe(3)
})

test('Number divided by 0 should be Null', () => {
  const rta = divide(3, 0)
  expect(rta).toBe(null)
})
