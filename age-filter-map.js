let ages = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

let ableToBuyLotto = ages.filter((age) => {
    return age >= 18
})

let displayAge = ableToBuyLotto.map((age) => {
    let result = {}
    result.age = age
    result.display = age + ' is old enough to buy lottery'
    return result 
})

console.log(displayAge)