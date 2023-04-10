'use strict';

// Ітератори та генератори

const numbers = [10, 22, 33];

// for (let num of numbers) {
//     console.log(num)
// }

const str = 'Hello';

// for (let s of str) {
//     console.log(s)
// }

// {
//     next: function() {}
//     next: function() {}
//     next: function() {}
//     next: function() {}
//     next() {}
// }

// Custom iterator
// function makeIterator(array) {
//     let index = 0;

//     return {
//         next() {
//             if (index < array.length) {
//                 const result = {
//                     value: array[index],
//                     done: false
//                 }
//                 index++;
//                 return result;
//             } else {
//                 return {
//                     done: true
//                 }
//             }
//         }
//     }
// }

// const iterator = makeIterator(numbers);
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())

const range = {
    from: 1,
    to: 5
}

function makeIterator(obj) {
    let current = obj.from;
    let last = obj.to;

    return {
        next() {
            if (current <= last) {
                return {
                    value: current++,
                    done: false
                }
            } else {
                return {
                    done: true
                }
            }
        }
    }
}

const iterator = makeIterator(range);

// for (let s of range) {
//     console.log(s)
// }

// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())

range[Symbol.iterator] = function() {
    let current = this.from; // this = range
    let last = this.to;

    return {
        next() {
            if (current <= last) {
                return {
                    value: current++,
                    done: false
                }
            } else {
                return {
                    done: true
                }
            }
        }
    }
}

// for (let s of range) {
//     console.log(s)
// }

// const iterator2 = numbers[Symbol.iterator]()
// console.log(iterator2.next())

// const str2 = str[Symbol.iterator]()
// console.log(str2.next())
// console.log(str2.next())

// Генератори

function* generateSequence() {
    yield 1;
    yield 2;
    yield 3;
}

const generator = generateSequence();
// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())

// for (let num of generator) {
//     console.log(num)
// }

// console.log([0, ...generateSequence()]);

const range2 = {
    from: 1,
    to: 5,
    fsdf: 'some',

    *[Symbol.iterator]() { // [Symbol.iterator]: function() {}
        for (let value = this.from; value <= this.to; value++) {
            yield value
        }
    }
}

console.log([...range2])