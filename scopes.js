var topLevel = 1,
        name = 'Joe',
    satClass = 'none'; 

console.group('doing the loop')
for (let i = 0; i < 3; i++) {    // let keeps variable scoped in its block
    let topLevel = 5;
    console.log('topLevel: ' + topLevel)
    console.log(i)
}
console.groupEnd()

console.log('topLevel after: ' + topLevel)

