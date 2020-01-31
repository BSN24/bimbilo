$(document).ready(function () {
    "use strict";



    $(".page-search__select, .select-custom").selectric({
        disableOnMobile: false,
        nativeOnMobile: false,
        responsive: true,
    });

    //Кастомные selects для страницы company
    $(".select-field").find(".select-field__input").selectric({
        disableOnMobile: false,
        nativeOnMobile: false,
        responsive: true,
    });

    //Кастомный select выбора городов
    (function () {

        $.fn.selectpicker.Constructor.BootstrapVersion = "4";
        $(".selectpicker").selectpicker({
            deselectAllText: "Удалить все",
            selectAllText: "Выбрать все"
        });

        $(".bootstrap-select").on("click", function (e) {
            $(this).find(".dropdown-menu").toggleClass("active");
        });

    })();

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

    $(".product__slider-main").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: ".product__slider-nav",
        infinite: false,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    dots: false,
                    fade: false,
                    arrows: true,
                    prevArrow: "<button class='product__slider-btn product__slider-btn--prev fa fa-chevron-left'>",
                    nextArrow: "<button class='product__slider-btn product__slider-btn--next fa fa-chevron-right'>",
                }
            }
        ]
    });

    $(".product__slider-nav").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: ".product__slider-main",
        dots: false,
        arrows: false,
        centerMode: false,
        focusOnSelect: true,
        infinite: false,
        draggable: false
    });

    //Загрузка файла
    var file_api = ( window.File && window.FileReader && window.FileList && window.Blob ) ? true : false;

    $(".form__file-input").change(function (e) {

        var file = $(this)[0].files[0];

        if (file_api && file) {
            var fileName = file.name;
            $(".form__file-label").text(file.name);
        } else {
            $(".form__file-label").text("Добавить фото");
        }

    });
});