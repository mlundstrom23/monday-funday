function travelToLA() {
    let city = 'Los Angeles'
    var x = 10031
    if (x === 10031) {
        let city = 'New York City'
        console.log('We are in ' + city)
        var x = 91011          // If let, next if statement will throw new Error 
    }

    console.log('One 5 hour plane ride later...')

    if (x === 91011) {
        console.log('Now we are in ' + city + ' county.') 
    } else {
        throw new Error('OH NO WE DIDN\'T MAKE IT TO CALIFORNIA')   
    }
}

try {
    travelToLA()
} catch (err) {
    console.log(err.message)
}