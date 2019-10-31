
// Trying with for loop and switch-case statements.

var choice = ['Red', 'Black', 'White', 'Pink'];

for (var i = 0; i < choice.length; i++) {
    switch(i) {
        case 0:
            console.log('My 1st choice is ' + choice[0]);
            break

        case 1:
            console.log('My 2nd choice is ' + choice[1]);
            break

        case 2:
            console.log('My 3rd choice is ' + choice[2]);
            break

        case 3:
            console.log('My 4th choice is ' + choice[3]);
            break   
           
        default:
            console.log('Unknown choice.');
            break   
    }
}

 

