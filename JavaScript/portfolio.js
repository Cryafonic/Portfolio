$(document).ready(() => {
    // toggles active class on nav
    $(".toggle").click(() => {
        $(".toggle").toggleClass("active");
        $(".showcase").toggleClass("active");
    });

    let setTime = 2000

    let list = document.querySelectorAll('.icons a img');

    // add classof active on floating icons
    for (let i = 0; i < list.length; i++) {
        setTimeout(() => {
            list[i].classList.add("active");
        }, setTime = setTime + 1000);
    }
})