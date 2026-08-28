/*
===========
!!!!! 節點導覽屬性 !!!!!
===========
*/

console.log("=== 節點導覽屬性 ===");
console.log("body 的 parentNode:", document.body.parentNode);
console.log("body 的 childNodes:", document.body.childNodes);
console.log("body 的 firstChild:", document.body.firstChild);
console.log("body 的 lastChild:", document.body.lastChild);
console.log("body 的 是否具有子節點:", document.body.hasChildNodes());
console.log(
  "body 的 lastChild 是否具有子節點:",
  document.body.lastChild.hasChildNodes(),
);
console.log("body 的 previousSibling:", document.body.previousSibling);
console.log("body 的 nextSibling:", document.body.nextSibling);

/*
===========
!!!!! 元素節點導覽屬性 !!!!!
===========
*/

console.log("=== 元素節點導覽屬性 ===");
console.log("body 的 parentElement:", document.body.parentElement);
console.log("body 的 children:", document.body.children);
console.log("body 的 firstElementChild:", document.body.firstElementChild);
console.log("body 的 lastElementChild:", document.body.lastElementChild);
console.log(
  "body 的 previousElementSibling:",
  document.body.previousElementSibling,
);
console.log("body 的 nextElementSibling:", document.body.nextElementSibling);
console.log("=== document 不是元素節點 ===");
console.log(document.documentElement.parentNode); // document
console.log(document.documentElement.parentElement); // null

/*
===========
!!!!! 查詢節點方法 !!!!!
===========
*/

console.log("使用 getElementById():", document.getElementById("parent"));
console.log(
  "id名稱被自動建立為全域變數:",
  target === document.getElementById("target"),
);
console.log("使用 querySelectorAll():", document.querySelectorAll("li"));
console.log("使用 querySelectorAll():", document.querySelectorAll("li")[1]);
console.log("使用 querySelectorAll():", document.querySelectorAll(".item"));
console.log("使用 querySelectorAll():", document.querySelectorAll("#parent"));

const span = document.querySelector("#span");
console.log("取得 #span 節點", span);
console.log("使用 matches():", span.matches("#parent"));
console.log("使用 matches():", span.matches("#span"));
console.log("使用 closest():", span.closest("#target"));
console.log("使用 closest():", span.closest("#parent"));
console.log("使用 closest():", span.closest(".item"));
console.log(
  "使用 getElementsByTagName():",
  document.getElementsByTagName("li"),
);
console.log(
  "使用 getElementsByClassName():",
  document.getElementsByClassName("item"),
);
console.log("使用 getElementsByName():", document.getElementsByName("text"));
console.log("使用 getElementById():", document.getElementById("target"));

/*
===========
!!!!! 更多節點屬性 !!!!!
===========
*/

console.dir(span);
console.log(span.nodeType);
console.log(span.nodeName);
console.log(span.tagName);
console.log(Object.getOwnPropertyNames(span));
const inner = document.querySelector(".inner");
const outer = document.querySelector(".outer");
// console.log(innerHTML, outerHTML);
inner.innerHTML = `<p>使用 innerHTML 的全新段落 1</p>`;
console.log(inner.innerHTML);
outer.outerHTML = `<p class='new'>使用 outerHTML 的全新段落 2</p>`;
console.log(outer.outerHTML);
const outer2 = document.querySelector(".new");
console.log(outer2.outerHTML);
