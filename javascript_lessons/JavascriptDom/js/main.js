"use strict";
{
  //1. DOMを扱ってみよう
  // document.body.textContent = "Hello";
  // document.title = "Changed!";

  //02 要素を指定してみよう (02:59)
  // document.getElementById("target").textContent = "Changed!";

  //03 querySelectorを使ってみよう (02:59)
  // document.querySelector("h1").textContent = "H1!";
  // document.querySelectorAll("li").forEach(li => {
  //   li.textContent = "li!";
  // });

  // document.querySelectorAll("li:nth-child(odd)").forEach(li => {
  //   li.textContent = "li!";
  // });
  // document.querySelectorAll("li:first-child").forEach(li => {
  //   li.textContent = "li!";
  // });

  //04 親要素､子要素を指定してみよう (02:59)
  // const ul = document.querySelector("ul");

  // console.log(ul.parentNode); // body
  // console.log(ul.children); // li
  // console.log(ul.children[0]); // li

  // for (let i = 0; i < ul.children.length; i++) {
  //   console.log(ul.children[i].textContent);
  // }

  //05 要素の属性を操作してみよう (02:57)
  // const h1 = document.querySelector("h1");
  // console.log(h1.title);
  // h1.title = "changed";
  // console.log(h1.title);

  // h1.style.color = "blue";
  // h1.style.backgroundColor = "pink";

  //06 カスタムデータ属性を扱ってみよう (02:45)
  // const h1 = document.querySelector("h1");
  // console.log(h1.dataset.appId);
  // h1.dataset.message = "this is custom message!";

  //07 クラス属性を操作してみよう (02:46)
  //08 classListを使ってみよう (02:42)
  // const div = document.querySelector("div");
  // div.className = "box border-pink";

  // div.classList.add("border-pink");
  // div.classList.remove("box");
  // if (div.classList.contains("border-pink")) {
  //   div.classList.remove("border-pink");
  // } else {
  //   div.classList.add("border-pink");
  // }
  // div.classList.toggle("border-pink");

  //09 要素を生成してみよう (02:57)
  // const h1 = document.createElement("h1");
  // h1.textContent = "Title";
  // document.body.appendChild(h1);

  // const p = document.createElement("p");
  // p.textContent = "hello!hello!";
  // document.body.appendChild(p);

  // const h2 = document.createElement("h2");
  // h2.textContent = "sub title";
  // document.body.insertBefore(h2, p);

  //10 要素のコピー､削除をしてみよう (02:25)
  // const copy = p.cloneNode(true);
  // const copy = p.cloneNode(true);
  // document.body.insertBefore(copy, h2);

  // document.body.removeChild(h2);

  //11 テキスト入力部品を操作してみよう (02:31)
  // const text = document.querySelector('input[type="text"]');
  // const textarea = document.querySelector("textarea");

  // console.log(text.value);
  // console.log(textarea.value);

  // // text.focus();
  // text.select();
  // text.disabled = true;

  //12 フォーム部品を操作してみよう (02:44)
  // console.log(document.querySelectorAll('input[type="checkbox"]')[0].checked);
  // console.log(document.querySelectorAll('input[type="checkbox"]')[1].checked);

  // document.querySelectorAll('input[type="checkbox"]')[0].checked = true;

  // console.log(document.querySelectorAll('input[type="radio"]')[0].checked);
  // console.log(document.querySelectorAll('input[type="radio"]')[1].checked);

  // document.querySelectorAll('input[type="radio"]')[1].checked = true;

  // console.log(document.querySelectorAll("select option")[0].selected);
  // console.log(document.querySelectorAll("select option")[1].selected);
  // console.log(document.querySelectorAll("select option")[2].selected);

  // document.querySelectorAll("select option")[2].selected = true;

  //13 イベントリスナーを使ってみよう (02:48)
  // const button = document.querySelector("button");
  // button.addEventListener("click", () => {
  //   console.log("message");
  // });

  // button.addEventListener("dblclick", () => {
  //   console.log("message2");
  // });

  //14 イベントオブジェクトを扱ってみよう (02:41)
  // const div = document.querySelector("div");

  // document.addEventListener("mousemove", e => {
  //   // console.log(e);
  //   div.textContent = `${e.clientX}:${e.clientY}`;
  // });

  //15 preventDefaultを使ってみよう (02:55)
  const a = document.querySelector("a");
  const span = document.querySelector("span");

  a.addEventListener("click", () => {
    a.classList.add("hidden");
    span.classList.remove("hidden");
  });

  // a.addEventListener("click", e => {
  //   e.preventDefault();
  //   a.classList.add("hidden");
  //   span.classList.remove("hidden");
  // });

  console.log("end!");
}
