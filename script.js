//Part1
const greet = (name = 'Hello') => {
    return name + ' ' + 'hello'
}
console.log(greet('Narmin'));
console.log(greet());

//Part2
const fac = (number) => {
    if (number === 0 || number === 1) {
        return 1;
    } else {
        return number * fac(number - 1);
    }


}
console.log(fac(5));
//Part3
const sumAll = (...rest) => {
    let sum = 0
    for (let index = 0; index < rest.length; index++) {
        sum += rest[index]


    }
    return sum
}
console.log(sumAll(5, 4, 3, 2));

//Part4
const first = () => {
    console.log('first called');
    second()
}
const second = () => {
    console.log('second called');
    third()
}
const third = () => {
    console.log('third called');
}
first()