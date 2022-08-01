$(function () {
      console.log('Hello Bootstrap5');

      // 商品 render
      function renderItems(){
        const list = document.getElementById("list");

        for (let i = 0; i < 20; i++) {
          const colItem = document.createElement("div")
          colItem.classList.add("col");
          colItem.innerHTML = `
            <div class="mt-4">
              <div class="card">
                  <img src="./assets/images/seed.jpg" class="card-img-top" alt="">
                  <div class="card-body">
                    <h5 class="card-title text-primary fw-bold">$2200</h5>
                    <p class="card-text fs-7">這是一件商品，這是一件商品，這是一件商品，這是一件商品。</p>
                    <p class="card-text text-end fs-8">已售出 1000</p>
                  </div>
                  <span class="badge bg-primary rounded-0 position-absolute top-0 end-0">雙12優惠</span>
                </div>
              </div>
            </div>
          `;
          list.appendChild(colItem);
        }
      }

      // 電腦板側邊欄位顯示更多按鈕功能
      function collapsePcHandler() {
        const collapse = document.getElementById("filter-collapse");
        const collapseBtn = document.getElementById("filter-collapse-btn");

        const collapseBtnText = document.getElementById("filter-btn-text");
        const filterIcon = document.getElementById("filter-icon");

        const bsCollapse = new bootstrap.Collapse(collapse, {
          toggle: false
        })

        collapseBtn.addEventListener("click", function () {
          bsCollapse.toggle();
        })

        collapse.addEventListener("show.bs.collapse", function () {
          collapseBtnText.innerText = "收起";
          filterIcon.classList.add("transform-rotate-180");
        })

        collapse.addEventListener("hide.bs.collapse", function () {
          collapseBtnText.innerText = "顯示更多";
          filterIcon.classList.remove("transform-rotate-180");
        })
      }

      // 手機板側邊欄位顯示更多按鈕功能
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

      // 載入商品 loading
      function searchHandler(){
        const searchBtn = document.getElementById("search-btn");
        const itemsWrapper = document.getElementById("items-wrapper");
        const spinnerWrapper = document.getElementById("spinner-wrapper");


        searchBtn.addEventListener("click", function(e){
          itemsWrapper.classList.add("d-none");
          spinnerWrapper.classList.remove("d-none");

          setTimeout(() => {
             itemsWrapper.classList.remove("d-none");
             spinnerWrapper.classList.add("d-none");
          }, 2000);
        })

      }








        renderItems();
        collapsePcHandler();
        collapseMobileHandler();
        offcanvasHandler();
        searchHandler();
      });