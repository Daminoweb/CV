//=======JQUERY=======//
(function ($) {
    $(document).ready(function () {
//Page loader
    //    $.pageLoader();
//Ajout de classe lors que click sur le bouton
        $("nav").click(function () {
            $("nav,#wrap").toggleClass("active");
            $("button").toggleClass("icon-menu").toggleClass("icon-croix");
        });
//Replier menu si on click sur le site.
        $("#wrap").click(function () {
            if ($("#wrap").hasClass("active")) {
                $("nav,#wrap").removeClass("active");
                $("button").toggleClass("icon-croix").toggleClass("icon-menu");
                return false;
            }
        });
//Smooth sroll
        $('nav a[href^="#"]').on('click', function (event) {
            var target = $($(this).attr('href'));
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
            }
        });
    });
})(jQuery);

//====Pur JS===//
var year = new Date().getFullYear();
document.getElementById("date").innerHTML = year;