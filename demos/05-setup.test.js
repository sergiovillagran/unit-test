describe('set', () => {
    test('case 1', () => {
      expect(1 + 1).toBe(2)
    })

    test('case 2', () => {
      expect(1 + 1).toBe(2)
    })

    describe('other group', () => {
      test('case 3', () => {
        expect(1 + 1).toBe(2)
      })
    })

    beforeAll(() => {
      console.log('before all')
    })

    afterAll(() => {
      console.log('caso finaaal')
    })

    beforeEach(() => {
      console.log('corre antes de cada pruebas')
    })
})
