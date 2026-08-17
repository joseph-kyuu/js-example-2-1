const button = document.querySelector(".button");

function playerName() {
  let name = prompt("請輸入您的名稱");
  button.textContent = `玩家：${name}`;
}

button.addEventListener("click", playerName);

/*
===========
!!!!! 計數器，減少 CPU 耗能 !!!!!
===========
*/

let i = 0;

let start = Date.now();

function count() {
  // do a heavy job
  for (let j = 0; j < 10000000; j++) {
    i++;
  }

  // console.log("完成時間為" + (Date.now() - start) + "ms");
}

// count();
// console.log(`目前 i 的總數為${i}`);

/*
===========
!!!!! 計數器，減少 CPU 耗能 !!!!!
===========
*/

let k = 0;

let start2 = Date.now();

function count2() {
  // do a heavy job
  for (let j = 0; j < 100; j++) {
    k++;
    console.log(`目前計算了${j}次`);
  }

  // 還沒數到 10 億
  if (k < 1000) {
    console.log("安排");
    console.log(`目前 k 的總數為${k}`);
    setTimeout(count2, 0);
  } else {
    console.log("完成！");
    console.log("花費時間：" + (Date.now() - start2) + "ms");
  }
}

// count2();

/*
===========
!!!!! 計數器，減少 CPU 耗能 !!!!!
===========
*/

let l = 0;

let start3 = Date.now();

function count3() {
  // 先安排下一次 count2()
  if (l < 1000) {
    console.log("安排下一次 count3()");
    setTimeout(count3, 0);
  }

  // 這一次處理 100 次
  for (let j = 0; j < 100; j++) {
    l++;
  }

  console.log(`目前 k 的總數為 ${l}`);

  // 已經完成
  if (l >= 1000) {
    console.log("完成！");
    console.log("花費時間：" + (Date.now() - start3) + "ms");
  }
}

// count3();

/*
===========
!!!!! 進度 !!!!!
===========
*/
const progress = document.querySelector("#progress");

function count4() {
  for (let i = 0; i < 1e6; i++) {
    i++;
    progress.innerHTML = i;
  }
}

// count4();

/*
===========
!!!!! 進度 !!!!!
===========
*/
const progress2 = document.querySelector("#progress2");

let m = 0;

function count5() {
  // 每次計算 10 次
  for (let j = 0; j < 10; j++) {
    m++;
  }

  // 更新畫面
  progress2.textContent = m;

  // 還沒完成，就安排下一次
  if (m < 1000) {
    setTimeout(count5, 0);
    // queueMicrotask(count5);
  }
}

count5();

/*
===========
!!!!! 延遲執行 !!!!!
===========
*/

const button2 = document.querySelector(".button2");

function delay() {
  // console.log(1);

  setTimeout(() => {
    // console.log(3);
  }, 1000);
  // console.log(2);
}
// console.log(4);

button2.addEventListener("click", delay);
