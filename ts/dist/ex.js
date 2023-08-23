"use strict";
//פונקציה המחזירה את המספר הגבוה
const exercise1 = (num1, num2) => {
    return Math.max(num1, num2);
};
//הפעלה והדפסה של פונקציה 1
let maxResult = exercise1(5, 4);
console.log(`the low number is ${maxResult}`);
//פןמקציה המחזירה את הערך הנמוך
const exercise2 = (num1, num2) => {
    return Math.min(num1, num2);
};
// הפעלה והדפסה של פונקציה 2
let minResult = exercise2(5, 4);
console.log(`the low number is ${minResult}`);
//פונקציה המחזירה מחרוזת משפט האם המספר זוגי או לא
const exercise3 = (num1) => {
    if (num1 % 2 === 0) {
        return `the number is even`;
    }
    else {
        return `the number is not even`;
    }
};
// הפעלה והדפסה של פונקציה 3
let stringResult = exercise3(4);
console.log(stringResult);
//פונקציה המחזירה אורך מילה
const exercise4 = (word) => {
    let length = word.length;
    return length;
};
// הפעלה והדפסה של פונקציה 4
let lengthResult = exercise4("hello world");
console.log(`the length is: ${lengthResult}`);
//פונקציה המחזירה מערך בהתאם לאורך המספר שנשלח אליו
const exercise5 = (num) => {
    let arr = [];
    for (let index = 1; index < num + 1; index++) {
        arr.push(index);
    }
    return arr;
};
// הפעלה והדפסה של פונקציה 5
let arrResult = exercise5(9);
console.log(arrResult);
//פונקציה המחזירה את המספר הגבוה במערך
const exercise6 = (arr) => {
    let temp = 0;
    for (let index = 0; index < arr.length; index++) {
        temp = Math.max(temp, arr[index]);
    }
    return temp;
};
// הפעלה והדפסה של פונקציה 6
let maxResult2 = exercise6(arrResult);
console.log(maxResult2);
const person = {
    name: "david",
    age: 24,
    isStudent: true,
};
//פונקציה המדפיסה אובייקט
const printPerson = (person) => {
    console.log(person);
};
// הפעלה והדפסה של פונקציה 8
printPerson(person);
// פונקציה המחזירה האם גדול מ18 או לא
const isMinor = (person) => {
    if (person.age < 18)
        return true;
    return false;
};
// הפעלה והדפסה של פונקציה 9
let ageResult = isMinor(person);
console.log(ageResult);
//פונקציה המחזירה את כרטיס המידע על הלקוח המבוגר ביותר
const exercise12 = (readers) => {
    let temp = readers[0].person.age;
    for (let index = 0; index < readers.length; index++) {
        temp = Math.max(temp, readers[index].person.age);
    }
    let reader = readers.find((reader) => temp === reader.person.age);
    return reader === null || reader === void 0 ? void 0 : reader.person;
};
const people = [
    {
        person: {
            name: "John Smith",
            age: 25,
            isStudent: true,
        },
        favoriteBook: {
            Title: "First Book",
            Author: "Author One",
            Year: 2022,
        },
    },
    {
        person: {
            name: "Alice Johnson",
            age: 30,
            isStudent: false,
        },
        favoriteBook: {
            Title: "Second Book",
            Author: "Author Two",
            Year: 2020,
        },
    },
    {
        person: {
            name: "Michael Brown",
            age: 22,
            isStudent: true,
        },
        favoriteBook: {
            Title: "Third Book",
            Author: "Author Three",
            Year: 2021,
        },
    },
    {
        person: {
            name: "Sarah Davis",
            age: 35,
            isStudent: false,
        },
        favoriteBook: {
            Title: "Fourth Book",
            Author: "Author Four",
            Year: 2019,
        },
    },
    {
        person: {
            name: "David Wilson",
            age: 28,
            isStudent: true,
        },
        favoriteBook: {
            Title: "Fifth Book",
            Author: "Author Five",
            Year: 2018,
        },
    },
];
// הפעלה והדפסה של פונקציה 12
const ageResult2 = exercise12(people);
console.log(ageResult2);
//פונקציה המחזירה את המידע על הספר הישן ביותר
const exercise13 = (readers) => {
    let temp = readers[0].favoriteBook.Year;
    for (let index = 0; index < readers.length; index++) {
        temp = Math.min(temp, readers[index].favoriteBook.Year);
    }
    let reader = readers.find((reader) => temp === reader.favoriteBook.Year);
    return reader === null || reader === void 0 ? void 0 : reader.favoriteBook;
};
const YearResult = exercise13(people);
console.log(YearResult);
