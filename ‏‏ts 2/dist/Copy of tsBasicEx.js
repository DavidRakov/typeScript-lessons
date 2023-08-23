"use strict";
// כל אובייקט מחויב בממשק או טיפוס
//1.
// כתוב פונקציה שמקבלת מערך של מספרים ומחזירה את הסכום של כל המספרים הזוגיים במערך.
const sumArr = (arr) => {
    let sum = 0;
    arr.forEach((num) => {
        if (num % 2 === 0) {
            sum += num;
        }
    });
    return sum;
};
const arr = [1, 2, 3, 4, 5, 4, 3, 8, 1];
const resultSum = sumArr(arr);
console.log(resultSum);
// 2.
// כתוב פונקציה שמקבלת אובייקט עם שני שדות: רוחב וגובה ומחזירה שטח של מלבן עם מידות אלו.
const rectangle = (hight, width) => {
    return `the area of ​​the rectangle ${hight * width}`;
};
const resultRectangle = rectangle(15, 10);
console.log(resultRectangle);
const palindrome = (word) => {
    word = word.toString();
    let half = Math.floor(word.length / 2);
    for (let i = 0, z = word.length - 1; i < half && z > half; i++, z--) {
        if (word[i] !== word[z])
            return `not palindrome`;
    }
    return "palindrome";
};
const palindromeResult = palindrome(arr);
console.log(palindromeResult);
//4.
// כתוב פונקציה שמקבלת מערך של מחרוזות
// הפונקציה מחזירה מערך חדש של מחרוזות שבו האות הראשונה של כל מילה 'גדולה' ושאר האותיות 'קטנות' - לדוגמה
// uppEr -> Upper
const toUpper = (arr) => {
    const newArr = [];
    arr.forEach((word) => {
        word.toLowerCase();
        let firstChar = word.slice(0, 1);
        let rest = word.slice(1);
        firstChar = firstChar.toUpperCase();
        let newWord = firstChar + rest;
        newArr.push(newWord);
    });
    return newArr;
};
const wordsArray = [
    "apple",
    "banana",
    "carrot",
    "dog",
    "elephant",
    "flower",
    "guitar",
];
const upperResult = toUpper(wordsArray);
console.log(upperResult);
// 5.
// כתוב פונקציה שמקבלת מערך של מספרים ומחזירה מערך חדש עם המספרים הייחודיים בלבד (הסרת כפילויות).
const uniq = (arr) => {
    const newArr = [];
    arr.forEach((num) => (!newArr.includes(num) ? newArr.push(num) : null));
    return newArr;
};
const uniqResult = uniq(arr);
console.log(uniqResult);
const Initial = (input) => {
    let first = input.firstName.slice(0, 1);
    let last = input.lastName.slice(0, 1);
    const acronyms = { firstInitial: first, lastInitial: last };
    return acronyms;
};
const fullName = { firstName: "David", lastName: "Rakov" };
const acronyms = Initial(fullName);
console.log(acronyms);
const ageAvg = (people) => {
    let sum = 0;
    people.forEach((person) => {
        sum += person.age;
    });
    return sum / people.length;
};
const people = [
    { name: "John", age: 25 },
    { name: "Jane", age: 30 },
    { name: "Bob", age: 40 },
];
const ageAvgResult = ageAvg(people);
console.log(ageAvgResult);
const maxAndMin = (arr) => {
    let min = arr[0];
    let max = arr[0];
    arr.forEach((num) => {
        min = Math.min(min, num);
        max = Math.max(max, num);
    });
    const min_max = { min, max };
    return min_max;
};
const maxAndMinResult = maxAndMin(arr);
console.log(maxAndMinResult);
// 9.
// כתוב פונקציה שמקבלת מערך ומדפיסה אותו בסדר הפוך
const reversPrint = (arr) => {
    for (let index = arr.length - 1; index >= 0; index--) {
        console.log(arr[index]);
    }
};
reversPrint(arr);
