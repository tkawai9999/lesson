"use strict";

// console.log("Hello \n\t world");
// console.log("Hello" + "world");

// console.log(10 ** 3);

// const PRICE = 10;
// console.log(PRICE * 140);
// console.log(PRICE * 160);

// let price = 10;
// console.log(price * 140);

// price = 11;
// console.log(price * 140);

// console.log(typeof "hello");
// console.log(typeof 5);
// console.log(typeof true);
// console.log(typeof undefined);
// console.log(typeof null);
// console.log(parseInt("hello", 10));

// if

// const score = 85;

// if (score >= 80) {
//   console.log("Great!");
// } else if (score >= 60) {
//   console.log("Good");
// } else {
//   console.log("OK");
// }

// const score = 85;
// score >= 80 ? console.log("Great!") : console.log("OK...!");

// const score = 60;
// const name = "taguchi";

// if (score >= 50 && name === "taguchi") {
//   console.log("Good job!");
// }

// switch
// const signal = "pink";
// switch (signal) {
//   case "red":
//     console.log("stop!");
//     break;
//   case "yellow":
//     console.log("caution!");
//     break;
//   case "blue":
//   case "green":
//     console.log("go!");
//     break;
//   default:
//     console.log("wrong signal!");
//     break;
// }

// for

// for (let i = 1; i <= 10; i++) {
//   console.log("hello");
//   // console.log(i + ' hello');
//   //   console.log(`${i} hello`);
// }

// while

// let hp = 200;

// while (hp > 0) {
//   console.log(`${hp} HP left!`);
//   hp -= 15;
// }

// continue, break

// for (let i = 1; i <= 10; i++) {
//   // if (i === 4) {
//   // if (i % 3 === 0) {
//   //   continue;
//   // }
//   if (i === 4) {
//     break;
//   }
//   console.log(i);
// }

// //関数
// function showAd(message = "AD") {
//   // 仮引数
//   console.log("----------");
//   console.log(`--- ${message} ---`);
//   console.log("----------");
// }

// showAd("Header AD"); // 実引数
// console.log("Tom is great!");
// console.log("Bob is great!");
// // showAd('AD');
// showAd();
// console.log("Steve is great!");
// console.log("Rich is great!");
// showAd("Footer Ad");

// 関数2

// function sum(a, b, c) {
//   // console.log(a + b + c);
//   return a + b + c;
// }
// const total = sum(1, 2, 3) + sum(3, 4, 5);
// // const total = 6 + 12; // 18

// 関数式

// const sum = function(a, b, c) {
//   return a + b + c;
// };
// const total = sum(1, 2, 3) + sum(3, 4, 5);
// console.log(total);

//アロー 関数

// const sum = function(a, b, c) {
//   return a + b + c;
// };

// const sum = (a, b, c) => {
//   return a + b + c;
// };
// const sum = (a, b, c) => a + b + c;

// const total = sum(1, 2, 3) + sum(3, 4, 5);
// console.log(total);

// const double = function(a) {
//   return a * 2;
// };
// const double = a => a * 2;
// console.log(double(12));

// Scope

{
  const a = 1;

  function f1() {
    const a = 3;
    const b = 2;
    console.log(b); // 2
    console.log(a); // 1
  }

  //   function f2() {
  //     const b = 3;
  //     console.log(b); // 3
  //     console.log(a); // 1
  //   }

  f1();
  //   f2();

  console.log(a); // 1
  //   console.log(b); // erro
}
