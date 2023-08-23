// כל אובייקט מחויב בממשק או טיפוס

//1.
// כתוב פונקציה שמקבלת מערך של מספרים ומחזירה את הסכום של כל המספרים הזוגיים במערך.

const sumArr = (arr: number[]): number => {
  let sum: number = 0;
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

const rectangle = (hight: number, width: number) => {
  return `the area of ​​the rectangle ${hight * width}`;
};

const resultRectangle = rectangle(15, 10);
console.log(resultRectangle);

// 3.
// כתוב פונקציה שמקבלת מחרוזת ומחזירה אמת אם המחרוזת היא פלינדרום ושקר אם לא.
// פלינדרום היא מחרוזת שאפשר לקרוא אותה אותו הדבר מהסוף להתחלה.
// דוגמאות: אבא, אמא, שמש, ילד כותב בתוך דלי,1235321

type Palindrome = string | number | number[] | string[];

const palindrome = (word: Palindrome): string => {
  word = word.toString();
  let half = Math.floor(word.length / 2);
  for (let i = 0, z = word.length - 1; i < half && z > half; i++, z--) {
    if (word[i] !== word[z]) return `not palindrome`;
  }
  return "palindrome";
};

const palindromeResult = palindrome(arr);
console.log(palindromeResult);

//4.
// כתוב פונקציה שמקבלת מערך של מחרוזות
// הפונקציה מחזירה מערך חדש של מחרוזות שבו האות הראשונה של כל מילה 'גדולה' ושאר האותיות 'קטנות' - לדוגמה
// uppEr -> Upper

const toUpper = (arr: string[]): string[] => {
  const newArr: string[] = [];
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
const wordsArray: string[] = [
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

const uniq = (arr: number[]): number[] => {
  const newArr: number[] = [];
  arr.forEach((num) => (!newArr.includes(num) ? newArr.push(num) : null));
  return newArr;
};

const uniqResult = uniq(arr);
console.log(uniqResult);

// 6.
// כתוב פונקציה שמקבלת אובייקט עם שדות עבור שם פרטי ושם משפחה
// הפונקציה מחזירה אובייקט המכיל את שתי שדות המתארות את ראשי התיבות של האובייקט
// דוגמה
// Input: { firstName: "John", lastName: "Doe" }
// Output: { firstInitial: "J", lastInitial: "D" }
// השתמשו בממשקים מתאימים עבור הקלט והםלט של הפונקציה
type fullName = {
  firstName: string;
  lastName: string;
};
interface output {
  firstInitial: string;
  lastInitial: string;
}
const Initial = (input: fullName): output => {
  let first = input.firstName.slice(0, 1);
  let last = input.lastName.slice(0, 1);
  const acronyms: output = { firstInitial: first, lastInitial: last };
  return acronyms;
};

const fullName: fullName = { firstName: "David", lastName: "Rakov" };
const acronyms = Initial(fullName);
console.log(acronyms);

// 7.
// כתוב פונקציה שמקבלת מערך של אובייקטים עם שדות שם וגיל, ומחזירה את הגיל הממוצע של כל האובייקטים במערך.

//  עבור המערך
// [
//   { name: "John", age: 25 },
//   { name: "Jane", age: 30 },
//   { name: "Bob", age: 40 },
// ];
// Output: 31.666666666666668
type person = { name: string; age: number };
const ageAvg = (people: person[]): number => {
  let sum = 0;
  people.forEach((person) => {
    sum += person.age;
  });
  return sum / people.length;
};

const people: person[] = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Bob", age: 40 },
];
const ageAvgResult = ageAvg(people);
console.log(ageAvgResult);

// 8.
// כתוב פונקציה שמקבלת מערך של מספרים ומחזירה את ערכי המקסימום והמינימום במערך כאובייקט בעל שדות מתאימים.
type min_max = { min: number; max: number };
const maxAndMin = (arr: number[]): min_max => {
  let min = arr[0];
  let max = arr[0];
  arr.forEach((num) => {
    min = Math.min(min, num);
    max = Math.max(max, num);
  });
  const min_max: min_max = { min, max };
  return min_max;
};

const maxAndMinResult = maxAndMin(arr);
console.log(maxAndMinResult);

// 9.
// כתוב פונקציה שמקבלת מערך ומדפיסה אותו בסדר הפוך

const reversPrint = (arr: number[] | string[]): void => {
  for (let index = arr.length - 1; index >= 0; index--) {
    console.log(arr[index]);
  }
};

reversPrint(arr);
