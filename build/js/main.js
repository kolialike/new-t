jQuery(function(i){var e=(new Swiper(".swiper-container",{pagination:".swiper-pagination",nextButton:".swiper-button-next",prevButton:".swiper-button-prev",slidesPerView:1,centeredSlides:!0,paginationClickable:!0,initialSlide:1}),i(".devices-img").find("img")),n=i(".tabs").find("a");n.on("click",function(t){t.preventDefault(),i(this).addClass("active").siblings().removeClass("active");var a=n.index(i(this));e.eq(a).addClass("active").siblings().removeClass("active")})});