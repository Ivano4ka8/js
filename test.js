
// // Example 6 - Операція rest
// // Напиши функцію transformUsername(user) так, щоб вона повертала новий об'єкт із властивістю fullName, замість firstName та lastName.
// //
// // Рішення
// function transformUsername({ firstName, lastName, ...otherProps }) {
//   return {
  
//     // fullName: `${firstName} ${lastName}`,
//     // ...otherProps,
//   };
// }

// console.log(
//   transformUsername({
//     id: 1,
//     firstName: "Jacob",
//     lastName: "Mercer",
//     email: "j.mercer@mail.com",
//     friendCount: 40,
//   })
// );

// console.log(
//   transformUsername({
//     id: 2,
//     firstName: "Adrian",
//     lastName: "Cross",
//     email: "a.cross@hotmail.com",
//     friendCount: 20,
//   })
// );


// // Напишіть функцію calcTotalPrice(stones, stoneName), яка приймає масив об'єктів та рядок з назвою каменю. Функція рахує і повертає загальну вартість каміння з таким ім'ям, ціною та кількістю з об'єкта
// //

// // const stones = [
// //   { name: 'Смарагд', price: 1300, quantity: 4 },
// //   { name: 'Діамант', price: 2700, quantity: 3 },
// //   { name: 'Сапфір', price: 400, quantity: 7 },
// //   { name: 'Щебінь', price: 200, quantity: 2 },
// // ];

// const calcTotalPrice = ((users, stoneName) =>
//   users.reduce((acum=0, user) => {
//     if (user.name === stoneName) {
//      return acum += user.price;
//     }
//   }, 0))

// // function calcTotalPrice(stones, stoneName) {
// //   let total = 0;
// //   for (let stone of stones) {
// //     if (stone.name === stoneName) {
// //       return total += stone.price
// //     }
// //   }
// // }

// console.log(
//   calcTotalPrice(
//     [
//       { name: "Смарагд", price: 1300, quantity: 4 },
//       { name: "Діамант", price: 2700, quantity: 3 },
//       { name: "Сапфір", price: 400, quantity: 7 },
//       { name: "Щебінь", price: 200, quantity: 2 },
//     ],
//     "Щебінь"
//   )
// );


// Домашня практика
// Example 4 - Комплексні завдання
// Напиши скрипт управління особистим кабінетом інтернет банку. Є об'єкт account в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.
//
// /*
//  * Типів транзакцій всього два.
//  * Можна покласти чи зняти гроші з рахунку.
//  */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

const account = {
  balance: 0, // Поточний баланс рахунку
  transactions: {
    id: 9,
    type: "deposit",
    amount: 500,
  },
  createTrans:createTransaction(),
};

//    * Метод створює та повертає об'єкт транзакції.
//    * Приймає суму та тип транзакції.
//    */
const createTransaction((amount, type)=> return ) 
 console.log(createTransaction)
//
//   /*
//    * Метод, що відповідає за додавання суми до балансу.
//    * Приймає суму транзакції.
//    * Викликає createTransaction для створення об'єкта транзакції
//    * після чого додає його до історії транзакцій
//    */
//   deposit(amount) {},
//
//   /*
//    * Метод, що відповідає за зняття суми з балансу.
//    * Приймає суму транзакції.
//    * Викликає createTransaction для створення об'єкта транзакції
//    * після чого додає його до історії транзакцій.
//    *
//    * Якщо amount більше ніж поточний баланс, виводь повідомлення
//    * про те, що зняття такої суми не можливе, недостатньо коштів.
//    */
//   withdraw(amount) {},
//
//   /*
//    * Метод повертає поточний баланс
//    */
//   getBalance() {},
//
//   /*
//    * Метод шукає та повертає об'єкт транзакції по id
//    */
//   getTransactionDetails(id) {},
//
//   /*
//    * Метод повертає кількість коштів
//    * певного типу транзакції з усієї історії транзакцій
//    */
//   getTransactionTotal(type) {},
// };
