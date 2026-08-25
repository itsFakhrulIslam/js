//^ topic of the object chaining and option chaining
/**
 * 1. dot notation
 * 2. bracket notation
 * 3. option chaining
 */

const person = {
    name: 'miraj',
    age: 23,
    family: {
        name: 'gazi',
        location: 'babur hat ronger gaon',
        fathers: {
            name: 'abdul kuddus',
            age: 65
        },
        mothers: {
            name: 'lutfa begum',
            age: 48
        },
        theirChildren: {
            1: {
                name: 'lucky'
            },
            2: {
                name: 'jakia'
            },
            3: {
                name: 'shamima'
            },
            4: {
                name: 'miraj'
            },
            5: {
                name: 'habiba'
            }
        }
    }
}
// console.log(person);

// console.log(person.family);

// console.log(person.family.theirChildren[5]);

// console.log(person.family?.theirChildren[5]?.age);