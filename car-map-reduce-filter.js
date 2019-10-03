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
    
    const recentCars = table[car.year] || []
    const oldCars = recentCars.concat({ car.make, car.model })
    return { ...table, [car.year]: oldCars}
}, {})
console.log(reduceYearCar)