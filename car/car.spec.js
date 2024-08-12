function foo () {
    return 'foo'
}

// Test away!
describe('our first tests', () => {
    test('sanity', () => {
        expect(5).toBe(5)
        expect(5).toBeGreaterThan(1)
    })
    test('objects', () => {
        const o = { a: 1 }
        const oo = { a: 1 }
        const ooo = oo
        expect(o).toBe(o)
        expect(oo).toBe(ooo)
    })
    test('objects again', () => {
        expect({ a: 1 }).toEqual({ a: 1 })
    })
})

describe('foo function', () => {
    test('foo returns foo', () => {
        expect(foo()).toBe('foo')
        expect(foo()).toHaveLength(3)
    })
})
