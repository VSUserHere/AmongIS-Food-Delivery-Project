// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

//$("#5").css("animation", "hue-shift 2.5s ease-in-out infinite");

const sr = ScrollReveal({
    origin: 'bottom',
    distance: '45px',
    duration: 1500,
    reset: false
});

sr.reveal('#hunry, #sub, #logo, .text-center, #title, #orders, #info, #login-warning, #create, .menu, .cart, #cart-toggle, #to-joints, #all-good', {
    interval: 100
});
