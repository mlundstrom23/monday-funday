function addOne (numberToAddTo) {     // addOne = function (numberToAddTo) {
    if (numberToAddTo === undefined) {
        throw new Error('You must provide a number to add to.') 
    }
    
    return numberToAddTo + 1
}
try {
    // failing to provide a number results in an error
    let result = addOne()
    console.log(result)
} catch (err) {
    console.log(err.message) // Can also put in your own message like console.log('Something is wrong -' + err.message)
}
