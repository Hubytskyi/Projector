import { ADMIN, USER } from './constants.js';
import { sum, multiply } from './math.js';
import './module1.js';
import './module1.js';
// import dateNow from './getDateNow.js';

// console.log(sum(2, 4));
// function dateNow() {
//     console.log('date now')
// }

function showUserRole(role) {
    if (role === ADMIN) {
        console.log(`You are ${ADMIN}, and you have access`)
    } else {
        console.log(`You are ${USER}, without access`)
    }
    
}

showUserRole('ADMIN');

console.log(multiply(4, 4))

// console.log(user)

// const user = {
//     name: 'Stas',
//     hello() {
//         console.log(this.name)
//     }
// }

// user.hello()

// console.log(dateNow())