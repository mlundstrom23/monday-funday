let cars = [{
    make: 'Tesla',
    model: '3',
    year: 2018,
},
{   make: 'Ford',
    model: 'Focus',
    year: 2007,    
},
{   make: 'Volvo',
    model: 'V60',
    year: 2018,
}]

let newCars = cars.filter((car) => {
    return car.year > 2007
})

let mapCar = cars.map((car) => {
    return `The "${car.make} ${car.model}" was made in ${car.year}`
})

let reduceYearCar = cars.reduce((table, car) => {
    const { make, model, year } = car
    const recentCars = table[year] || []
    const oldCars = recentCars.concat({ make, model })
    return { ...table, [year]: oldCars}
}, {})
console.log(reduceYearCar)