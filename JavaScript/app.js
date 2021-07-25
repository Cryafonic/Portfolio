$(document).ready(() => {
    $(".toggle").click(() => {
        $(".toggle").toggleClass('active');
        $(".showcase").toggleClass('active');
    });
})