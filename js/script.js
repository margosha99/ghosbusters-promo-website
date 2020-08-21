$(document).ready(function () {
    const mobileMenuBtn = $(".mobile-menu-btn");
    const mobileMenu = $('.mobile-menu');
    const tab = $(".tab");

    mobileMenuBtn.on('click', ()=>{
        mobileMenu.toggleClass('active');
        $("body").toggleClass("no-scroll");
    });

    tab.click(function () {  
        tab.removeClass('active');
        $(this).toggleClass('active');
        // console.log($(this));
        let activeTabContent = $(this).attr("data-target");
        // console.log(activeTabContent);
        $('.tabs-content').removeClass("visible");
        $(activeTabContent).toggleClass("visible");
    });
    var mySwiper = new Swiper('.swiper-container', {
        slidesPerView:4,
        spaceBetween:25,
        loop: true,
        breakpoints: {
            992:{
                slidesPerView:4,
            },
            768:{
                slidesPerView:2,
            },
            320:{
                slidesPerView:1,
                slidesOffsetAfter:50,
                navigation:{
                    nextEl: ".btn-next",
                }
            }
        }
    });
});