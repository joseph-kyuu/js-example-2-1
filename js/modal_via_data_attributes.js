// 設定事件監聽
// 事件委派
document.addEventListener("click", function (e) {
  // 開啟 Modal
  // 取得開啟 modal 的按鈕節點
  // 找到觸發器
  console.dir(e);
  const openButton = e.target.closest('[data-bs-toggle="modal"]');
  // console.dir(openButton);

  if (openButton) {
    // 取得要開啟的 modal 的 id 名稱
    const targetSelector = openButton.dataset.bsTarget;
    // console.log(targetSelector);

    // 找到 Modal 本體／模板
    // 取得要開啟的 modal 節點
    const modal = document.querySelector(targetSelector);
    // console.log(modal);

    // 替要開啟的 modal 節點的 class 加上 show
    modal.classList.add("show");
  }

  // 關閉 Modal
  // 取得關閉 modal 的按鈕節點
  const closeButton = e.target.closest('[data-bs-dismiss="modal"]');

  // 取得要關閉的 modal 節點
  // 替要關閉的 modal 節點的 class 移除 show
  if (closeButton) {
    const modal = closeButton.closest(".modal");

    modal.classList.remove("show");
  }
});

/*

*/
