"use strict";
{
  //1.配列
  //2.配列
  // const scores = [80, 90, 40];
  // console.log(scores);
  // scores[2] = 100;
  // scores = [10, 20];
  // console.log(scores[2]);
  // console.log(scores.length);
  //3.オブジェクト
  //4.オブジェクト
  // const player = {
  //   name: "taguchi",
  //   score: 32
  // };
  // console.log(player.name);
  // console.log(player["name"]);
  // player.score = 100;
  // console.log(player);
  // player.email = "taguchi@gmail.com";
  // console.log(player);
  // delete player.score;
  // console.log(player);
  //5.クラス
  //6.メソッド
  // class Player {
  //   constructor(name, score) {
  //     this.name = name;
  //     this.score = score;
  //   }
  //   showInfo() {
  //     console.log(`name: ${this.name} score: ${this.score}`);
  //   }
  // static showVersion() {
  //   console.log("Player class ver. 1.0");
  // }
  // }
  // const taguchi = new Player("taguchi", 32);
  // const fkoji = new Player("fkoji", 40);
  // taguchi.showInfo();
  // Player.showVersion();
  //7.継承
  // class SoccerPlayer extends Player {
  //   // 子クラス
  //   constructor(name, score, number) {
  //     super(name, score);
  //     this.number = number;
  //   }
  //   kick() {
  //     console.log("Gooooaaal!");
  //   }
  // }
  // const tsubasa = new SoccerPlayer("tsubasa", 99, 10);
  // tsubasa.kick();
  // console.log(tsubasa.number);
  // tsubasa.showInfo();
  // 9.配列
  // const a = [1, 5, 10];
  // add;
  // a.unshift(100);
  // a.push(200, 300);
  // remove
  // a.shift();
  // a.pop();
  // 10.配列(splice)
  // a.splice(2, 0, 6, 7);
  // console.log(a);
  // const removed = a.splice(1, 2);
  // console.log(a);
  // console.log(removed);
  // 11.配列(foreach)
  // for (let i = 0; i <= 2; i++) {
  // for (let i = 0; i < a.length; i++) {
  //   console.log(a[i]);
  // }
  // a.forEach(item => {
  //   console.log(item);
  // });
  // a.forEach((item, index) => {
  //   console.log(`${index}:${item}`);
  // });
  // 12.配列(map.filter)
  // const a = [1, 2, 5, 10];
  // const b = [];
  // a.forEach(item => {
  //   b.push(item * 2);
  // });
  // const b = a.map(item => {
  //   return item * 2;
  // });
  // const b = a.map(item => item * 2);
  // const b = a.filter(item => item % 2 === 0);
  // console.log(b);
  // 13.オブジェクト
  // const o = {
  //   a: 1,
  //   b: 2
  // };
  // console.log(Object.keys(o)); // ['a', 'b']
  // console.log(Object.values(o)); // [1, 2]
  // console.log(Object.entries(o)); // [['a', 1], ['b', 2]]
  // Object.keys(o).forEach(key => {
  //   console.log(`${key}: ${o[key]}`);
  // });
  // 14.スプレット
  // const a = [10, 20];
  // const b = [1, 2, ...a];
  // console.log(b);
  // const a = [10, 20];
  // const sum = (a, b) => a + b;
  // console.log(sum(...a));
  // const o1 = { a: 1 };
  // const o2 = { ...o1, b: 2 };
  // console.log(o2);
  // 15.配列。分割代入
  // const numbers = [1, 2];
  // const [a, b] = numbers;
  // console.log(a);
  // console.log(b);
  // const numbers = [1, 2, 3, 8];
  // const [a, b, ...rest] = numbers;
  // // console.log(a);
  // // console.log(b);
  // // console.log(rest);
  // const player = {
  //   name: "taguchi",
  //   score: 55,
  //   hp: 33,
  //   mp: 22
  // };
  // const { name, score, ...points } = player;
  // console.log(name);
  // console.log(score);
  // console.log(points);
  // 16.文字列操作
  // const str = "hello";
  // console.log(str.length); // 5
  // console.log(str.substring(2, 4)); // ll
  // console.log(str[1]); //値参照のみ
  // 17.Math
  // console.log(Math.PI);
  // console.log(Math.random()); // 0 ... 0.99999
  // Math.random() -> 0 ... 0.99999
  // Math.random() * 6 -> 0 ... 5.99999
  // Math.random() * 6 + 1 -> 1 ... 6.99999
  // Math.floor(Math.random() * 6 + 1) -> 1 ... 6
  // 18.Date
  // const d = new Date();
  // console.log(d);
  // console.log(d.getFullYear());
  // console.log(d.getMonth()); // 0 - 11
  // console.log(d.getDate());
  // console.log(d.getDay()); // 0 - 6(曜日)
  // console.log(d.getHours());
  // console.log(d.getMinutes());
  // console.log(d.getSeconds());
  // console.log(d.getMilliseconds());
  // console.log(d.getTime()); // UTC 1970/01/01 00:00:0
  //  18.Date
  // const d = new Date(2018, 11); // 2018/12/01 00:00:00
  // d.setHours(10, 20, 30); // 2018/12/01 10:20:30
  // d.setDate(d.getDate() + 3); // 2019/12/04 10:20:30
  // console.log(d);
  //  19.Date
  // const d1 = new Date(2018, 11, 1);
  // const d2 = new Date(2018, 11, 10);
  // console.log(d2 - d1); //777600000
  // console.log((d2 - d1) / (24 * 60 * 60 * 1000)); //9
  //  20.alert.confirm
  // alert("aa");
  // const answer = confirm("Are you sure?");
  // console.log(answer);
  // 21.setInteval
  // let i = 0;
  // const showTime = () => {
  //   console.log(new Date());
  //   i++;
  //   if (i > 2) {
  //     clearInterval(timerId);
  //   }
  // };
  // let timerId = setInterval(showTime, 1000);

  // 22.setTimeout
  // const showTime = () => {
  //   console.log(new Date());
  // };
  // let timerId = setTimeout(showTime, 1000);
  // let i = 0;
  // const showTime = () => {
  //   console.log(new Date());
  //   let timerId = setTimeout(showTime, 1000);
  //   i++;
  //   if (i > 2) {
  //     clearTimeout(timerId);
  //   }
  // };
  // showTime();

  // 23.例外処理
  // const a = "hello";
  const a = 5;
  try {
    console.log(a.toUpperCase());
  } catch (e) {
    console.log(e.message);
  }

  console.log("Finish!");
}
