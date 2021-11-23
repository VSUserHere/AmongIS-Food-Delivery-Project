// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

//$("#5").css("animation", "hue-shift 2.5s ease-in-out infinite");

$(window).on("load", function () {
    $(".loader-wrap").fadeOut("slow");
});

const sr = ScrollReveal({
    origin: 'bottom',
    distance: '45px',
    duration: 1500,
    reset: false
});

sr.reveal('#hunry, #sub, #logo, .text-center, #title, #sub-title, #orders, #info, #login-warning, #create, .menu, .cart, #cart-toggle, #to-joints, #all-good, #login-email, #login-password, #login-button, #login-remember, #login-actions', {
    interval: 100
});
