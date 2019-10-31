function grade(score) {

    if (score >= 0 && score < 65) {
        return 'F'

    } else if (score < 70 && score >= 65) {
        return 'D'

    } else if (score < 80 && score > 69) {
        return 'C'

    } else if (score < 90 && score > 79) {
        return 'B'

    } else if (score <= 100 && score > 89) {
        return 'A'                             // if console.log(), for loop would print 'Your grade for 'i' is undefined' instead of 'A'
                                               // That's why we use return statement
    } else {
        return 'Please enter a number between 0-100.'
    }  
}   

console.log('Your grade is, ' + grade(60));

for (var i = 60; i <= 100; i++) {
    console.log('Your grade for', i + '' + ' is ' + grade(i))
}



