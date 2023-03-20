window.onload = function digital_fn() {
    let toggle = document.querySelector('#nav .toggle-btn');
    let collapse = document.querySelector('#nav .collapse');

    toggle.addEventListener('click', () => {
        collapse.classList.toggle('active');
    });

    // Masonry JS Init
    let grid = document.querySelector('#site-main .recent-work-area .images-flex');
    let masonry = new Masonry(grid, {
        itemSelector: '.flex-item',
        gutter:100,
        fitWidth:true
    });
}

navigation = document.getElementById("navigation");

const myScrollFunc = function () {
    const y = window.scrollY;
    if (y >= 2000) {
        navigation.className = "mobile-nav show"
    } else {
        navigation.className = "mobile-nav hide"
    }
};
window.addEventListener("scroll", myScrollFunc);

const list = document.querySelectorAll('.list');
function activeLink() {
    list.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((item) =>
    item.addEventListener('mouseover', activeLink))
