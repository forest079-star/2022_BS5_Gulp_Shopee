$(function () {
      console.log('Hello Bootstrap5');

      // 側邊欄位顯示更多按鈕功能
      function collapseMobileHandler() {
        const collapseMobile = document.getElementById("filter-mobile-collapse");
        const collapseBtnMobile = document.getElementById("filter-mobile-collapse-btn");

        const collapseBtnTextMobile = document.getElementById("filter-mobile-btn-text");
        const filterIconMobile = document.getElementById("filter-mobile-icon");

        const bsCollapseMobile = new bootstrap.Collapse(collapseMobile, {
          toggle: false
        })

        collapseBtnMobile.addEventListener("click", function () {
          bsCollapseMobile.toggle();
        })

        collapseMobile.addEventListener("show.bs.collapse", function () {
          collapseBtnTextMobile.innerText = "收起";
          filterIconMobile.classList.add("transform-rotate-180");
        })

        collapseMobile.addEventListener("hide.bs.collapse", function () {
          collapseBtnTextMobile.innerText = "顯示更多";
          filterIconMobile.classList.remove("transform-rotate-180");
        })
      }

      // 手機板側邊欄位
      function offcanvasHandler() {
        const myOffcanvas = document.getElementById("offcanvasScrolling");
        const mobileFilterBtn = document.getElementById("mobile-filter-btn");
        const bsOffcanvas = new bootstrap.Offcanvas(myOffcanvas, {
            backdrop: true
        })
        mobileFilterBtn.addEventListener('click', function(e){
          e.stopPropagation();
          bsOffcanvas.toggle();
        })
      }










        collapseMobileHandler();
        offcanvasHandler();
      });