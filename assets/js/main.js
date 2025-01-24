/* ===================================================================
    Author          : Modina Theme
    Version         : 1.0
* ================================================================= */

(function($) {
    "use strict";

    $(document).ready(function() {

        //>> Mobile Menu Js Start <<//
        $('#mobile-menu').meanmenu({
            meanMenuContainer: '.mobile-menu',
            meanScreenWidth: "991",
            meanExpand: ['<i class="far fa-plus"></i>'],
        });

        //>> Sidebar Toggle Js Start <<//
        $(".offcanvas__close,.offcanvas__overlay").on("click", function(e) {
            e.preventDefault();
            $(".offcanvas__info").removeClass("info-open");
            $(".offcanvas__overlay").removeClass("overlay-open");
        });
        $(".sidebar__toggle").on("click", function(e) {
            e.preventDefault();
            $(".offcanvas__info").addClass("info-open");
            $(".offcanvas__overlay").addClass("overlay-open");
        });

        //>> Body Overlay Js Start <<//
        $(".body-overlay").on("click", function(e) {
            e.preventDefault();
            $(".offcanvas__area").removeClass("offcanvas-opened");
            $(".df-search-area").removeClass("opened");;
            $(".body-overlay").removeClass("opened");
        });

        //>> Sticky Header Js Start <<//

        $(window).scroll(function() {
            if ($(this).scrollTop() > 250) {
                $("#header-sticky").addClass("sticky");
            } else {
                $("#header-sticky").removeClass("sticky");
            }
        });

        //>> Scroll Js Start <<//
        const scrollPath = document.querySelector(".scroll-up path");
        const pathLength = scrollPath.getTotalLength();
        scrollPath.style.transition = scrollPath.style.WebkitTransition = "none";
        scrollPath.style.strokeDasharray = pathLength + " " + pathLength;
        scrollPath.style.strokeDashoffset = pathLength;
        scrollPath.getBoundingClientRect();
        scrollPath.style.transition = scrollPath.style.WebkitTransition = "stroke-dashoffset 10ms linear";

        const updatescroll = function() {
            let scrolltotal = $(window).scrollTop();
            let height = $(document).height() - $(window).height();
            let scrolltotalheight = pathLength - (scrolltotal * pathLength) / height;
            scrollPath.style.strokeDashoffset = scrolltotalheight;
        };
        updatescroll();

        $(window).scroll(updatescroll);
        const offset = 50;
        const duration = 950;

        $(window).on("scroll", function() {
            if (jQuery(this).scrollTop() > offset) {
                jQuery(".scroll-up").addClass("active-scroll");
            } else {
                jQuery(".scroll-up").removeClass("active-scroll");
            }
        });

        $(".scroll-up").on("click", function(event) {
            event.preventDefault();
            jQuery("html, body").animate({
                    scrollTop: 0,
                },
                duration
            );
            return false;
        });


        //>> Banner Three Slider Start <<//
        const sliderActive1 = ".hero-content-slider";
        const sliderInit1 = new Swiper(sliderActive1, {
            loop: true,
            slidesPerView: 3,
            speed: 2000,
            effect: "fade",
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".dot",
                clickable: true,
            },
        });

        function animated_swiper(selector, init) {
            let animated = function animated() {
                $(selector + " [data-animation]").each(function() {
                    let anim = $(this).data("animation");
                    let delay = $(this).data("delay");
                    let duration = $(this).data("duration");
                    $(this)
                        .removeClass("anim" + anim)
                        .addClass(anim + " animated")
                        .css({
                            webkitAnimationDelay: delay,
                            animationDelay: delay,
                            webkitAnimationDuration: duration,
                            animationDuration: duration,
                        })
                        .one("animationend", function() {
                            $(this).removeClass(anim + " animated");
                        });
                });
            };
            animated();
            init.on("slideChange", function() {
                $(sliderActive1 + " [data-animation]").removeClass("animated");
            });
            init.on("slideChange", animated);
        }

        animated_swiper(sliderActive1, sliderInit1);
        const heroImageSlider = new Swiper(".hero-image-slider", {
            loop: "true",
            effect: "fade",
            slidesPerView: 3,
            speed: 2000,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".dot",
                clickable: true,
            },
        });

        const heroTextSlider2 = new Swiper(".hero-text-slider-2", {
            speed: 1000,
            loop: "true",
            slidesPerView: 1,
            speed: 1000,
            // direction: "vertical",
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            navigation: {
                prevEl: ".array-prev",
                nextEl: ".array-next",
            },

        });

        //>> Hero-1 Slider Start <<//
        const sliderActive2 = ".hero-slider-4";
        const sliderInit2 = new Swiper(sliderActive2, {
            loop: true,
            slidesPerView: 1,
            effect: "fade",
            speed: 3000,
            autoplay: {
                delay: 7000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".array-prev",
                prevEl: ".array-next",
            },
            pagination: {
                el: ".dot-2",
                clickable: true,
            },
        });

        function animated_swiper(selector, init) {
            const animated = function animated() {
                $(selector + " [data-animation]").each(function () {
                    let anim = $(this).data("animation");
                    let delay = $(this).data("delay");
                    let duration = $(this).data("duration");
                    $(this)
                        .removeClass("anim" + anim)
                        .addClass(anim + " animated")
                        .css({
                            webkitAnimationDelay: delay,
                            animationDelay: delay,
                            webkitAnimationDuration: duration,
                            animationDuration: duration,
                        })
                        .one("animationend", function () {
                            $(this).removeClass(anim + " animated");
                        });
                });
            };
            animated();
            init.on("slideChange", function () {
                $(sliderActive2 + " [data-animation]").removeClass("animated");
            });
            init.on("slideChange", animated);
        }
        animated_swiper(sliderActive2, sliderInit2);
        //>> Banner Animation <<//

        //>> Search Popup Start <<//
        const $searchWrap = $(".search-wrap");
        const $navSearch = $(".nav-search");
        const $searchClose = $("#search-close");

        $(".search-trigger").on("click", function (e) {
            e.preventDefault();
            $searchWrap.animate({ opacity: "toggle" }, 500);
            $navSearch.add($searchClose).addClass("open");
        });

        $(".search-close").on("click", function (e) {
            e.preventDefault();
            $searchWrap.animate({ opacity: "toggle" }, 500);
            $navSearch.add($searchClose).removeClass("open");
        });

        function closeSearch() {
            $searchWrap.fadeOut(200);
            $navSearch.add($searchClose).removeClass("open");
        }

        $(document.body).on("click", function (e) {
            closeSearch();
        });

        $(".search-trigger, .main-search-input").on("click", function (e) {
            e.stopPropagation();
        });


        //>> Video Popup Start <<//
        $(".img-popup").magnificPopup({
            type: "image",
            gallery: {
                enabled: true,
            },
        });

        $('.video-popup').magnificPopup({
            type: 'iframe',
            callbacks: {}
        });

        //>> Counterup Start <<//
        $(".count").counterUp({
            delay: 15,
            time: 4000,
        });

        //>> Wow Animation Start <<//
        new WOW().init();

        //>> Nice Select Start <<//
        $('select').niceSelect();

        //>> Data Background Start <<//
        $("[data-background").each(function() {
            $(this).css(
                "background-image",
                "url( " + $(this).attr("data-background") + "  )"
            );
        });

        //>> Testimonial Swiper Slide Start <<//
        const testimonialImageSlider = new Swiper(".testimonial-image-slider", {
            loop: true,
            spaceBetween: 20,
            autoplay: true,
            slidesPerView: 3,
            speed: 1000,
            direction: "vertical",
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".array-next",
                prevEl: ".array-prev",
            },

        });

        const testimonialSlideContent = new Swiper(".testimonial-slide-content", {
            loop: true,
            spaceBetween: 20,
            autoplay: true,
            slidesPerView: 1,
            speed: 1000,
            direction: "vertical",
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".array-next",
                prevEl: ".array-prev",
            },

        });

        testimonialImageSlider.controller.control = testimonialSlideContent;
        testimonialSlideContent.controller.control = testimonialImageSlider;

        const testimonialSlider2 = new Swiper(".testimonial-slider-2", {
            speed: 800,
            loop: "true",
            slidesPerView: 1,
            centeredSlides: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".dot",
                clickable: true,
            },
        });

        const testimonialSlider3 = new Swiper(".testimonial-slider-3", {
            speed: 1500,
            loop: "true",
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".array-next",
                prevEl: ".array-prev",
            },

        });

        //>> Portfolio Swiper Slide Start <<//
        const portfolioSlider = new Swiper(".portfolio-slider", {
            spaceBetween: 30,
            speed: 1500,
            loop: "true",
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".array-next",
                prevEl: ".array-prev",
            },

        });

        const portfolioSlider2 = new Swiper(".portfolio-slider-2", {
            spaceBetween: 30,
            speed: 1500,
            loop: "true",
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".array-next",
                prevEl: ".array-prev",
            },

        });

        portfolioSlider.controller.control = portfolioSlider2;
        portfolioSlider2.controller.control = portfolioSlider;

        //>> Work Cases Swiper Slide Start <<//
        const workCasesSlider = new Swiper(".work-cases-slider", {
            spaceBetween: 30,
            speed: 1000,
            loop: "true",
            slidesPerView: 3,
            speed: 1000,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".array-prev",
                prevEl: ".array-next",
            },
            breakpoints: {
                1399: {
                    slidesPerView: 3,
                },
                1199: {
                    slidesPerView: 2,
                },
                767: {
                    slidesPerView: 1,
                },
                575: {
                    slidesPerView: 1,
                },
                0: {
                    slidesPerView: 1,
                },
            },
        });

        //>> Work Cases Swiper Slide Start <<//
        const workCasesSlider2 = new Swiper(".work-cases-slider-2", {
            spaceBetween: 60,
            speed: 1000,
            loop: "true",
            slidesPerView: 3,
            centeredSlides: true,
            speed: 1000,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".dot",
                clickable: true,
            },
            breakpoints: {
                1399: {
                    slidesPerView: 3,
                },
                1199: {
                    slidesPerView: 2,
                },
                767: {
                    slidesPerView: 2,
                },
                0: {
                    slidesPerView: 1,
                },
            },
        });

        //>> Brand Swiper Slide Start <<//
        const brandSlider = new Swiper(".brand-slider", {
            spaceBetween: 30,
            speed: 1000,
            loop: "true",
            slidesPerView: 1,
            speed: 1000,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".dot",
                clickable: true,
            },
            breakpoints: {
                1199: {
                    slidesPerView: 5,
                },
                991: {
                    slidesPerView: 3,
                },
                767: {
                    slidesPerView: 2,
                },
                575: {
                    slidesPerView: 1,
                },
                0: {
                    slidesPerView: 1,
                }
            },
        });

        //>> Case Study Swiper Slide Start <<//
        const caseStudyWrapper2 = new Swiper(".case-study-wrapper-2", {
            spaceBetween: 30,
            speed: 1000,
            loop: "true",
            slidesPerView: 3,
            centeredSlides: true,
            speed: 1000,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".dot",
                clickable: true,
            },
            breakpoints: {
                1199: {
                    slidesPerView: 3,
                },
                991: {
                    slidesPerView: 2,
                },
                575: {
                    slidesPerView: 1,
                },
                0: {
                    slidesPerView: 1,
                }
            },
        });

        //>> Service Swiper Slide Start <<//
        const serviceSlider = new Swiper(".service-slider", {
            spaceBetween: 30,
            speed: 1000,
            loop: "true",
            slidesPerView: 4,
            speed: 1000,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".array-prev",
                prevEl: ".array-next",
            },
            breakpoints: {
                1299: {
                    slidesPerView: 4,
                },
                1199: {
                    slidesPerView: 3,
                },
                991: {
                    slidesPerView: 2,
                },
                575: {
                    slidesPerView: 1,
                },
                0: {
                    slidesPerView: 1,
                }
            },
        });

        //>> Project Swiper Slide Start <<//
        const projectSlider = new Swiper(".project-slider", {
            spaceBetween: 30,
            speed: 1000,
            loop: "true",
            slidesPerView: 4,
            centeredSlides: true,
            speed: 1000,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".array-prev",
                prevEl: ".array-next",
            },
            breakpoints: {
                1299: {
                    slidesPerView: 4,
                },
                1199: {
                    slidesPerView: 3,
                },
                991: {
                    slidesPerView: 2,
                },
                767: {
                    slidesPerView: 2,
                },
                575: {
                    slidesPerView: 1,
                },
                0: {
                    slidesPerView: 1,
                }
            },
        });

        //>> Product Details Swiper Slide Start <<//
        const shopSliderThumb = new Swiper(".shop-slider-thumb", {
            loop: true,
            spaceBetween: 10,
            slidesPerView: 4,
            freeMode: true,
            watchSlidesProgress: true,
            navigation: {
                nextEl: ".right-array",
                prevEl: ".left-array",
            },
        });

        const shopSingleProductSlide = new Swiper(".shop-single-slide", {
            speed: 1000,
            loop: "true",
            grabCursor: true,
            navigation: {
                nextEl: ".right-array",
                prevEl: ".left-array",
            },
            thumbs: {
                swiper: shopSliderThumb,
            },
        });

        const productSlider = new Swiper(".product-slider", {
            spaceBetween: 30,
            speed: 1000,
            loop: "true",
            slidesPerView: 4,
            speed: 1000,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".dot",
                clickable: true,
            },
            breakpoints: {
                1199: {
                    slidesPerView: 4,
                },
                991: {
                    slidesPerView: 3,
                },
                767: {
                    slidesPerView: 2,
                },
                575: {
                    slidesPerView: 1,
                },
                0: {
                    slidesPerView: 1,
                }
            },
        });

        //>> Active Js Start <<//
        $(".service-box-items-2").hover(
            function() {
                $(".service-box-items-2").removeClass("active");
                $(this).addClass("active");
            }
        );

        //>> Quantity Js Start <<//
        $(".quantity").on("click", ".plus", function(e) {
            let $input = $(this).prev("input.qty");
            let val = parseInt($input.val(), 10); // Specify base 10
            $input.val(val + 1).change();
        });

        $(".quantity").on("click", ".minus", function(e) {
            let $input = $(this).next("input.qty");
            let val = parseInt($input.val(), 10); // Specify base 10
            if (val > 0) {
                $input.val(val - 1).change();
            }
        });

        //>> Quantity Cart Js Start <<//
        const quantity = 0;
        const price = 0;
        $(".cart-item-quantity-amount, .product-quant").html(quantity);
        $(".total-price, .product-pri").html(price.toFixed(2));
        $(".cart-increment, .cart-incre").on("click", function() {
            if (quantity <= 4) {
                quantity++;
                $(".cart-item-quantity-amount, .product-quant").html(quantity);
                let basePrice = $(".base-price, .base-pri").text();
                $(".total-price, .product-pri").html((basePrice * quantity).toFixed(2));
            }
        });

        $(".cart-decrement, .cart-decre").on("click", function() {
            if (quantity >= 1) {
                quantity--;
                $(".cart-item-quantity-amount, .product-quant").html(quantity);
                let basePrice = $(".base-price, .base-pri").text();
                $(".total-price, .product-pri").html((basePrice * quantity).toFixed(2));
            }
        });

        $(".cart-item-remove>a").on("click", function() {
            $(this).closest(".cart-item").hide(300);
        });

        //>> PaymentMethod Js Start <<//
        let paymentMethod = $("input[name='pay-method']:checked").val();
        $(".payment").html(paymentMethod);
        $(".checkout-radio-single").on("click", function() {
            let paymentMethod = $("input[name='pay-method']:checked").val();
            $(".payment").html(paymentMethod);
        });

        //>> PaymentMethod Js Start <<//
        const projectItems2 = document.querySelectorAll(".project-items-2");
        function followImageCursor(event, projectItems2) {
            const contentBox = projectItems2.getBoundingClientRect();
            const dx = event.clientX - contentBox.x;
            const dy = event.clientY - contentBox.y;
            projectItems2.children[2].style.transform = `translate(${dx}px, ${dy}px) rotate(10deg)`;
        }
        
        projectItems2.forEach((item, i) => {
            item.addEventListener("mousemove", (event) => {
                setInterval(followImageCursor(event, item), 1000);
            });
        });
        

    }); // End Document Ready Function
    

    function loader() {
        $(window).on('load', function() {
            // Animate loader off screen
            $(".preloader").addClass('loaded');
            $(".preloader").delay(600).fadeOut();
        });
    }
    loader();


})(jQuery); // End jQuery