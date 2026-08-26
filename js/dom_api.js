// 節點導覽屬性
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

// 元素節點導覽屬性
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
