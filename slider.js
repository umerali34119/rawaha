$(document).ready(() => {
    $('.product-slider-container').flickity({
        // options
        cellAlign: 'left',
        contain: true ,
        wrapAround: true
    });


})



function sidebar() {
    var menuBar = document.querySelector('.searchside');
    if (menuBar) {
        if (!menuBar.classList.contains('sideBar')) {
            menuBar.classList.add('sideBar');
        } else {
            menuBar.classList.remove('sideBar');
        }
    } 
}
function sidebar1() {
    var menuBar = document.querySelector('.userside');
    if (menuBar) {
        if (!menuBar.classList.contains('sideBar')) {
            menuBar.classList.add('sideBar');
        } else {
            menuBar.classList.remove('sideBar');
        }
    } 
}
function sidebar2() {
    var menuBar = document.querySelector('.shoppingside');
    if (menuBar) {
        if (!menuBar.classList.contains('sideBar')) {
            menuBar.classList.add('sideBar');
        } else {
            menuBar.classList.remove('sideBar');
        }
    } 
}
