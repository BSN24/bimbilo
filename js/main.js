$(document).ready(function () {
    "use strict";

    $(".page-search__select, .select-custom").selectric({
        disableOnMobile: false,
        nativeOnMobile: false,
        responsive: true,

    });



    //Mobile menu
    (function () {
        $(".hamburger-btn").click(function () {
            $(".main-nav").toggleClass("main-nav--open");
            $("body").toggleClass("page-lock");
        });

        $(".main-nav__btn").click(function () {
            $(".main-nav").removeClass("main-nav--open");
            $("body").removeClass("page-lock");
        });

        $(document).on("click", function (e) {

            var mainNav = $(".page-header");

            if (!mainNav.is(e.target) && mainNav.has(e.target).length === 0) {
                $(".main-nav").removeClass("main-nav--open");
                $("body").removeClass("page-lock");
            }

        });
    })();
});