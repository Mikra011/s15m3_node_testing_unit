const Car = require('./car')

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

describe('Car class', () => {
    let prius
    beforeEach(() => {
        prius = new Car('toyota', 'prius')
    })
    test('it is defined', () => {
        expect(Car).toBeDefined()
    })
    test('has model and make', () => {
        // we do not need the line => beforeEach replaces
        // const prius = new Car('toyota', 'prius') //setup instance
        expect(prius).toHaveProperty('make') //asserting that properties exists
        expect(prius).toHaveProperty('model') //asserting that properties exists
        expect(prius.make).toBeDefined()
        expect(prius).toMatchObject({ make: 'toyota', model: 'prius'}) // obj has at least these props
    })
    test('new cars starts with the odometer at zero', () => {
        expect(prius).toHaveProperty('odometer', 0)
    })
    test('cars have a drive method', () => {
        expect(prius.drive).toBeDefined()
        expect(prius.drive).toBe(Car.prototype.drive)
    })
    test('drive takes distance and increases odometer by that distance', () => {
        prius.drive(10)
        expect(prius.odometer).toBe(10)
        prius.drive(5)
        expect(prius.odometer).toBe(15)
    })
    test('driveAsync method return the updated odometer', async () => {
        let updatedOdometer = await prius.driveAsync(7)
        expect(updatedOdometer).toBe(7)
        updatedOdometer = await prius.driveAsync(6)
        expect(updatedOdometer).toBe(13)
    })
})
