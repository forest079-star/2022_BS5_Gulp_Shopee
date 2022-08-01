"use strict";

$(function () {
  console.log('Hello Bootstrap5'); // 商品 render

  function renderItems() {
    var list = document.getElementById("list");

    for (var i = 0; i < 20; i++) {
      var colItem = document.createElement("div");
      colItem.classList.add("col");
      colItem.innerHTML = "\n            <div class=\"mt-4\">\n              <div class=\"card\">\n                  <img src=\"./assets/images/seed.jpg\" class=\"card-img-top\" alt=\"\">\n                  <div class=\"card-body\">\n                    <h5 class=\"card-title text-primary fw-bold\">$2200</h5>\n                    <p class=\"card-text fs-7\">\u9019\u662F\u4E00\u4EF6\u5546\u54C1\uFF0C\u9019\u662F\u4E00\u4EF6\u5546\u54C1\uFF0C\u9019\u662F\u4E00\u4EF6\u5546\u54C1\uFF0C\u9019\u662F\u4E00\u4EF6\u5546\u54C1\u3002</p>\n                    <p class=\"card-text text-end fs-8\">\u5DF2\u552E\u51FA 1000</p>\n                  </div>\n                  <span class=\"badge bg-primary rounded-0 position-absolute top-0 end-0\">\u96D912\u512A\u60E0</span>\n                </div>\n              </div>\n            </div>\n          ";
      list.appendChild(colItem);
    }
  } // 電腦板側邊欄位顯示更多按鈕功能


  function collapsePcHandler() {
    var collapse = document.getElementById("filter-collapse");
    var collapseBtn = document.getElementById("filter-collapse-btn");
    var collapseBtnText = document.getElementById("filter-btn-text");
    var filterIcon = document.getElementById("filter-icon");
    var bsCollapse = new bootstrap.Collapse(collapse, {
      toggle: false
    });
    collapseBtn.addEventListener("click", function () {
      bsCollapse.toggle();
    });
    collapse.addEventListener("show.bs.collapse", function () {
      collapseBtnText.innerText = "收起";
      filterIcon.classList.add("transform-rotate-180");
    });
    collapse.addEventListener("hide.bs.collapse", function () {
      collapseBtnText.innerText = "顯示更多";
      filterIcon.classList.remove("transform-rotate-180");
    });
  } // 手機板側邊欄位顯示更多按鈕功能


  function collapseMobileHandler() {
    var collapseMobile = document.getElementById("filter-mobile-collapse");
    var collapseBtnMobile = document.getElementById("filter-mobile-collapse-btn");
    var collapseBtnTextMobile = document.getElementById("filter-mobile-btn-text");
    var filterIconMobile = document.getElementById("filter-mobile-icon");
    var bsCollapseMobile = new bootstrap.Collapse(collapseMobile, {
      toggle: false
    });
    collapseBtnMobile.addEventListener("click", function () {
      bsCollapseMobile.toggle();
    });
    collapseMobile.addEventListener("show.bs.collapse", function () {
      collapseBtnTextMobile.innerText = "收起";
      filterIconMobile.classList.add("transform-rotate-180");
    });
    collapseMobile.addEventListener("hide.bs.collapse", function () {
      collapseBtnTextMobile.innerText = "顯示更多";
      filterIconMobile.classList.remove("transform-rotate-180");
    });
  } // 手機板側邊欄位


  function offcanvasHandler() {
    var myOffcanvas = document.getElementById("offcanvasScrolling");
    var mobileFilterBtn = document.getElementById("mobile-filter-btn");
    var bsOffcanvas = new bootstrap.Offcanvas(myOffcanvas, {
      backdrop: true
    });
    mobileFilterBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      bsOffcanvas.toggle();
    });
  } // 載入商品 loading


  function searchHandler() {
    var searchBtn = document.getElementById("search-btn");
    var itemsWrapper = document.getElementById("items-wrapper");
    var spinnerWrapper = document.getElementById("spinner-wrapper");
    searchBtn.addEventListener("click", function (e) {
      itemsWrapper.classList.add("d-none");
      spinnerWrapper.classList.remove("d-none");
      setTimeout(function () {
        itemsWrapper.classList.remove("d-none");
        spinnerWrapper.classList.add("d-none");
      }, 2000);
    });
  } // Modal


  function modalHandler() {
    var cartBtn = document.getElementById("cart-btn");
    var cart = new bootstrap.Modal(document.getElementById("cart"), {
      keyboard: false
    });
    cartBtn.addEventListener("click", function () {
      cart.toggle();
    });
  }

  renderItems();
  collapsePcHandler();
  collapseMobileHandler();
  offcanvasHandler();
  searchHandler();
  modalHandler();
});
//# sourceMappingURL=all.js.map
