const menu = document.getElementById('menu');
const navigation = document.getElementById('navigation');
const unoredredList = document.getElementById('unoredred-list');
const links = document.querySelectorAll('.link');
menu.addEventListener('click', function () {
    showHideSide();
});

function showHideSide() {
    menu.classList.toggle('toggle');
    navigation.classList.toggle('active');
    unoredredList.classList.toggle('active');
}
links.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        links.forEach(l => {
            l.classList.remove('clicked');
            showHideSide();
            link.classList.add('clicked');
        })
    });
})