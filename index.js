const obj = {
    name: 'Vasya',
    age: 25,
    isMarried: false,
    home: null,
    dogs: undefined,
    family: ['мама', 'father'],
    friend: {
        name: 'Petya',
        age: 30,
        isMarried: true,
        work: null,
        family: [{
                name: 'mother',
                age: 60
            },
            {
                name: 'father',
                age: 62,
            }
        ]
    }
};

const cloneObject = {};

for (let key in obj) {
   
        cloneObject[key] = obj[key];
    
    }

console.log(obj);
console.log(cloneObject);
