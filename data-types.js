var name = 'Marina';
var x = 6;
var items = ['Tim', 'Sam', 'Howard'];
var test = 'yes' || 0
const fruits = [{
    id: 'Apple',
    color: 'Red', 
    texture: 'soft', 
    tastiness: 3
},
{   id: 'Banana',
    color: 'Yellow',
    texture: 'smooth',
    tastiness: 5
},
{   id: 'Pear',
    color: 'Green',
    texture: 'hard',
    tastiness: 2
}]

var dateToday = new Date()
var xMas2018 = new Date('2018-12-25')

let v = fruits.reduce((total, fruit) => {
    return total + fruit.tastiness
}, 0)
console.log(v)

console.log(dateToday - xMas2018);