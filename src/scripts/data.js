const data = [
    {
        name: 'pawel',
        city: 'krakow',
        age: 38,
        hobbies: ['js', 'python', 'drugs']
    },
    {
        name: 'jacek',
        city: 'jelenia_gora',
        age: 30,
        hobbies: ['trekking', 'cars', 'martial arts'],
    },
    {
        name: 'marcin',
        city: 'lublin',
        age: 43,
        hobbies: ['css', 'speedway', 'history']
    },
    {
        name: 'dawid',
        city: 'bielskobiala',
        age: 30,
        hobbies: ['football', 'snowboard', 'boxing']
    },
    {
        name: 'sebastian',
        city: 'golkowice',
        age: 20,
        hobbies: ['drugs', 'hookers', 'Js']
    },
    {
        name: "karolina",
        city: "dubaj",
        age: 32,
        hobbies: ["książki", "gotowanie", "filmy"]
    },
    {
        name: 'patryk',
        city: 'tarnow',
        age: 26,
        hobbies: ['anime', 'rts', 'lol']
    },
    {
        name: 'aleksander',
        city: 'warsaw',
        age: 23,
        hobbies: ['philosophy', 'art', 'music']
    },
    {
        name: 'Kamil',
        city: 'walcz',
        age: 34,
        hobbies: ['js', 'html', 'Mac']
    },
    {
        name: 'Alex',
        city: 'warszawa',
        age: 37,
        hobbies: ['js', 'python', 'drugs']
    },
    {
        name: 'franek',
        city: 'warszawa',
        age: 18,
        hobbies: ['js', 'bastkeball', 'cars']
    },
    {
        name: 'marcin',
        city: 'warszawa',
        age: 37,
        hobbies: ['js', 'bike', 'jogging']
    }
]


// policz średnią wieku

// function calculateAvgAge(elements) {
//     let sum = 0;
//
//     // for (let i = 0; i < elements.length; i++) {
//     //     sum += elements[i].age;
//     // }
//     for (const element of elements) {
//         sum += element.age;
//     }
//
//     return sum / elements.length;
// }

// {
//       name: 'pawel',
//       city: 'krakow',
//       age: 38,
//       hobbies: ['js', 'python', 'drugs']
//   },

// function calculateAvgAge(elements) {
//     return elements
//         .map((item) => item.age)
//         .reduce((acc, ce) => acc + ce) / elements.length
// }

// const calculateAvgAge = (elements) => elements
//     .reduce((acc, ce) => acc + ce.age, 0) / elements.length;

// const result = calculateAvgAge(data);
// // console.log(result);


// policz średnią wieku ludzi spoza warszawa.
// function calculateAvgAge(items) {
//     let sum = 0;
//     let counter = 0;
//
//     for (let i = 0; i < items.length; i++) {
//         if (items[i].city !== 'warszawa') {
//             sum += items[i].age
//             counter++;
//         }
//     }
//
//     return sum / counter;
// }

// function calculateAvgAge(items) {
//     const result = items.filter((item) => item.city !== 'warszawa');
//     return result.reduce((acc, ce) => acc + ce.age, 0) / result.length;
// }
//
// const result = calculateAvgAge(data);
// console.log(result);

// sprawdź, czy wszyscy są młodsi niż 30 lat


// function isAllYoungerThan30(data) {
//     // for (const item of data){
//     //     if (item.age > 30){
//     //         return false;
//     //     }
//     // }
//     //
//     // return true;
//     const oldPeople = data.filter((item) => item.age > 30);
//
//     return oldPeople.length === 0;
//
// }

// const isAllYoungerThan30 = (data) => data.every((item) => item.age <= 30);

// const result = isAllYoungerThan30(data);
// console.log(result)


// czy ktokolwiek pochodzi z krakowa


// function isAnyFromCracovia(data) {
//     for (const item of data){
//         if (item.city === 'krakow'){
//             return true;
//         }
//     }
//     return false;
// }

// const isAnyFromCracovia = (data) => data.some((item) => item.city === 'krakow');
//
// const result = isAnyFromCracovia(data);
// console.log(result)


// zwróć tablice imion osób, które kochają js

// function getNamesWhoLovesJS(elements) {
//     const temp = []
//
//     for (const element of elements) {
//         if (element.hobbies.includes('js')) {
//             temp.push(element.name);
//         }
//     }
//
//     return temp;
// }


// const getNamesWhoLovesJS = (elements) => elements
//     .filter((element) => element.hobbies.includes('js'))
//     .map((element) => element.name);
//
// const result = getNamesWhoLovesJS(data);
// console.log(result);

// policz ile jest unikalny hobby

// function countUniqueHobbies(items) {
//     const hobbies = [];
//
//     for (const item of items){
//         for (const hobby of item.hobbies){
//             if (!hobbies.includes(hobby)){
//                 hobbies.push(hobby);
//             }
//         }
//     }
//
//     return hobbies.length;
// }

const countUniqueHobbies = (data) => new Set(data.flatMap((item) => item.hobbies)).size


const result = countUniqueHobbies(data);
console.log(result);