// -------Lesson Illya 2.2---------

// Example 9 - Колекція курсів (includes, indexOf, push і т. д.)
// Напишіть функції для роботи з колекцією навчальних курсів courses:
//
// addCourse(name) - додає курс до кінця колекції
// removeCourse(name) - видаляє курс із колекції
// updateCourse(oldName, newName) - змінює ім'я на нове

// const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];

// function addCourse(name) {
//   for (let course of courses) {
//     if (courses.includes(name)) {
//       console.log("Ви вже маєте такий курс");
//       break
//     } else {
//       return courses.push(name);
//     }
//   }
// }

// function removeCourse(name) {
//   for (let course of courses) {
//     if (courses.includes(name)) {
//       courses.splice(courses.indexOf(name), 1)
//       break;
//     }
//     console.log("Курс із таким ім'ям не знайдено")
//   }
// }

// function updateCourse(oldName, newName) {

//   for (let course of courses) {
//     if (courses.includes(oldName)) {
//       courses.splice(courses.indexOf(oldName), 1, newName)
//       break
//     }
//   }
// }
// addCourse('Express');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// addCourse('CSS'); // 'Ви вже маєте такий курс'

// removeCourse('React');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// removeCourse('Vue'); // 'Курс із таким ім'ям не знайдено'

// updateCourse('Express', 'NestJS');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']

// -------PRACTICE MODULE 1-------

//TODO: 9 ===================================
// При завантаженні сторінки користувачеві пропонується
// в prompt ввести число. Введення додається до значення
// змінної total.
// Операція введення числа триває до того часу,
// поки користувач не натисне кнопку Cancel в prompt.
// Після того, як користувач припинив введення натиснувши на
// кнопку Cancel, показати alert з рядком "Загальна сума введених чисел дорівнює [число]."
// Робити перевірку,що користувач ввів саме число,
// а не довільний набір символів, не потрібно.

// let start;
// let total;
// let message;

// do {
//   start = prompt("Введіть число");
//   total = start;
// } while (start);
// message = `Загальна сума введених чисел дорівнює ${total}`;
//   alert(message);

//TODO: 10 ===================================
// Напишіть цикл, який пропонує ввести
// число більше 100 через prompt.
// Якщо відвідувач ввів інше число - попросити
// ввести ще раз і так далі.
// Цикл має питати число, поки відвідувач не
// введе число більше 100, або натисне кнопку
// скасування в prompt

// let start;

// do {
//   start = prompt("Chislo", 0);
// } while (start <= 100 && start);

//TODO: 11 ===================================
//Даний рядок, що складається із символів, наприклад, 'abcde'.
// Перевірте, що першим символом цього рядка є буква 'a'.
// Якщо це так - виведіть 'так', інакше виведіть 'ні'.

// let str = "Abcde";
// str = str.toLowerCase();

// if (str.indexOf("a") === 0) {
//   console.log("DA");
// } else {
//   console.log("NI");
// }

//TODO: 12 ===================================
//Якщо число ділитися на 3 повертати
//fizz якщо ділитися на 5 повертати buzz
//Якщо ділитися на 3 і на 5 повернути fizzbuzz

// let number = 30;

// if (number % 3===0 && number % 5===0){
// console.log("fizzbuzz")
// } else if (number % 5===0){
// console.log("buzz")
// } else if (number % 3 === 0) {
//   console.log("fizz");
// } else {
//   console.log("Number is not correct");
// }

//TODO: 13 ===================================
// Напишіть if..else, що відповідає наступному switch:

// const browser = 'Opera';

// if (browser === 'Edge') {
//   alert("You've got the Edge!");
// } else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
//   alert("Okay we support these browsers too");
// } else {
//   alert("We hope that this page looks ok!");
// }

// switch (browser) {
//   case 'Edge':
//     alert("You've got the Edge!");
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert('Okay we support these browsers too');
//     break;

//   default:
//     alert('We hope that this page looks ok!');
// }

//TODO: 14 ===================================
// Написати ф-цію, яка створює масив із зазначеною довжиною та наповнює його переданим значенням
// приклад: ф-ція fillArray(3, 'a') повинна повертати масив ['a', 'a', 'a']

// let newArray = [];
// function createArray(quantity, value) {

//   do {
//     newArray.push(value);
//   } while (newArray.length < quantity);

//   return newArray;
// }

// createArray(5, "k");
// console.log(newArray)

//TODO: 15 ===================================
// Написати ф-цію, яка прибиратиме з масиву всі значення, які перетворюються на false
// undefined, null, false, '', 0, NaN

// const array = [
//   1,
//   0,
//   54,
//   'doc',
//   null,
//   'jpg',
//   undefined,
//   '',
//   'png',
//   'exe',
//   false,
//   'mp4',
//   NaN,
//   'hbs',
// ];

// function deleteFalse() {
//   for (let element of array) {

//     if (element === undefined || element === null || element === false || element === '' || element === 0 || element === NaN) {
//       array.splice(array.indexOf(element), 1)
//     }
//   }
//   return array;
// }

// deleteFalse();
// console.log(array);

//TODO: 16 ===================================
// Перевірити два масиву і дізнатися, чи вони рівні

// const arr1 = [1, 4, 6, 'color', 324, 232, 'list', 11, 9, 'dream', 34, 0, -30];
// const arr2 = [6, 'dream', -30, 11, 9, 1, 324, 34, 'color', 4, 232, 0, 'list'];

// function arrays() {
//   for (let element of arr1) {
//     if (arr2.includes(element)) {
//       continue;
//     } else {
//       console.log("NI")
//     }
//   }
//   return 'DA'
// }

// const arr3 = [4, 232, 6, -30, 'color', 324, 'list', 1, 11, 9, 'dream', 34, 0];
// const arr4 = ['color', 6, -30, 11, 9, 1, 'dream', 324, 34, 4, 232, 0, 'list'];

// for (let element of arr3) {
//   if (arr4.includes(element)) {
//     continue;
//   } else {
//     console.log("NI");
//   }
// }
// console.log("Da");

// const arr5 = [1, 4, 6, 'color', 'list', 11, 9, 'dream', 34, 0, -30, 'lesson'];
// const arr6 = [6, 324, 'dream', -30, 9, 8, 34, 'color', 4, 232, 0, 'list', 11];

// for (let element of arr5) {
//   if (arr6.includes(element)) {
//     continue;
//   } else {
//     console.log("NI");
//   }
// }
//  console.log("Da");

// const arr7 = [1, 4, 6, 'color', 324, 232, 'list', 11, 9, 'dream', 34, 0, -30];
// const arr8 = [6, 'dream', -30, 10, 9, 1, 324, 34, 'color', 4, 232, 0, 'list'];

// function arrays() {
//   for (let element of arr7) {
//     if (arr8.includes(element)) {
//       continue;
//     }
//     return "DA";
//   }
//   return "NI"
// }

// arrays();

// ------PRACTICE MODULE 2--------

//TODO:=========task-3=================
// const filmoteka = [
//   {
//     id: 1,
//     title: "Duna",
//     description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
//     rating: 10,
//     actors: [
//       "Amelia Gibson",
//       "Cameron Clayton",
//       "Viola Vasquez",
//       "Lula Collins",
//       "Victor Nichols",
//     ],
//     adult: false,
//   },
//   {
//     id: 2,
//     title: "Venom",
//     description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
//     rating: 8,
//     actors: [
//       "Inez Greer",
//       "Barry Curtis",
//       "Blanche Rios",
//       "Glen Perry",
//       "Logan Powers",
//     ],
//     adult: true,
//   },
//   {
//     id: 3,
//     title: "Luca",
//     description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
//     rating: 9,
//     actors: [
//       "Marguerite Gibbs",
//       "Lora Alvarez",
//       "Jorge Simpson",
//       "Thomas Hall",
//       "Darrell Hunter",
//     ],
//     adult: false,
//   },
//   {
//     id: 4,
//     title: "Free Guy",
//     description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
//     rating: 6,
//     actors: [
//       "Calvin Andrews",
//       "Mamie Myers",
//       "Madge Townsend",
//       "Ralph Kim",
//       "Jorge Reese",
//     ],
//     adult: true,
//   },
//   {
//     id: 5,
//     title: "Saw",
//     description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
//     rating: 7,
//     actors: [
//       "Adele Marsh",
//       "Melvin Burgess",
//       "Jesus Reese",
//       "Harriet Moreno",
//       "Curtis Cox",
//     ],
//     adult: true,
//   },
// ];

//? Напишіть функцію getAllTitlesOfFilms(films), яка повертає масив із усіма назвами фільмів.

// let films = [];
// function getAllTitlesOfFilms(films) {
//   for (let film of filmoteka) {
//     films.push(film.title);
//   }
// }

// getAllTitlesOfFilms(films);
// console.log(films);

//? Напишіть функцію findFilmByName(films, filmTitle), яка шукає фільм за назвою.

// function findFilmByName(films, filmTitle) {
//   for (let film of filmoteka) {
//     if (film.title === filmTitle) {
//       return film;
//     }
//   }
// }
// console.log(findFilmByName(films, "Duna"));

//? Напишіть функцію getAdultFilms(films), яка повертає масив усіх дорослих фільмів.

// function getAdultFilms(films) {
//   let filmsAdult = [];
//   for (let film of filmoteka) {
//     if (film.adult === true) {
//       filmsAdult.push(film);
//     }
//   }
//   return filmsAdult;
// }
// console.log(getAdultFilms(films));

//? Напишіть функцію getNotAdultFilms(films), яка повертає масив усіх фільмів без обмеження.

// function getNotAdultFilms(films) {
//   let filmsNotAdult = [];
//   for (let film of filmoteka) {
//     if (film.adult === false) {
//       filmsNotAdult.push(film);
//     }
//   }
//   return filmsNotAdult;
// }
// console.log(getNotAdultFilms(films));

//TODO:============task-4===============
// Створіть масив styles з елементами «Джаз» та «Блюз».
// Додайте "Рок-н-рол" в кінець.
// Замініть значення "Блюз" на "Класика".
// Видалить перший елемент масиву і виведіть його в консоль.
// Вставте «Реп» і «Реггі» на початок масиву.

// const styles = ["Джаз", "Блюз"];
// styles.push("Рок-н-рол");
// console.log(styles);
// let stylesIndex = styles.indexOf("Блюз");
// styles.splice(stylesIndex, 1, "Класика");
// console.log(styles);
// console.log(styles.shift(0, 1));
// console.log(styles);
// styles.unshift("Реп", "Реггі");
// console.log(styles);

//TODO:============task-5==============
// Напишіть функцію min(a, b), яка повертає
// менше з чисел a, b
// Потрібно додати перевірку, що функція отримує числа

// function min(a, b) {
//     if (Number.isInteger(a, b) && a < b) {
//         return a;
//     } else if (Number.isInteger(a, b) && a > b) {
//         return b;
//     } else {
//         return "Value is not a Number"
//     }
// }
// //? Answer
// console.log(min(5, "o"));
// //?

//TODO:=============task-6=================
// напиши функцію яка сумуватиме сусідні числа і пушити в новий масив
// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];
// const result = [];
// for (let i = 0; i < someArr.length; i++) {
//   console.log(someArr[i]);
//     result.push(someArr[i]+someArr[i+1]);
//     console.log(result);
// }

//? Answer

//?

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];
// const result = sumAdjacentNumbers(someArr);
// console.log(result); // [33, 45, 39, 17, 25, 27, 29]

//TODO:============task-7==============
//Напишіть функцію logItems(array), яка приймає
//масив та використовує цикл for, який для кожного
//елемента масиву виводитиме повідомлення у форматі
//<номер елемента> - <значення елемента>
//Нумерація елементів має починатися з першого.
//['Джаз', 'Блюз', 'Рок-н-рол', 'Реггі', 'Реп']

// const musicGenres = ['Джаз', 'Блюз', 'Рок-н-рол', 'Реггі', 'Реп'];

// //? Answer
// function logItems(array) {
//     for (let i = 0; i < array.length; i++) { 
//         return (`${i} - ${array[i]}`);
//     }
    
// }
// //?

// console.log(logItems(musicGenres));

//TODO:=============task-8=================
// Функція formatMessage(message, maxLength)
// приймає рядок (параметр message) і форматує його,
// якщо довжина перевищує значення параметрі maxLength.

//? Answer
// function formatMessage(message, maxLength) {
//     let length = message.length;

//     if (length >= maxLength) {
//         return message.slice(0,maxLength);
//     }
// }
// //?

// console.log(formatMessage('Curabitur ligula sapien', 16));
// // Повертає 'Curabitur ligula...'.
// console.log(formatMessage('Curabitur ligula sapien', 23)); //Повертає 'Curabitur ligula sapien'.
// console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 15)); //Повертає 'Nunc sed turpis...'.
// console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 41)); //Повертає 'Nunc sed turpis a felis in nunc fringilla'.

