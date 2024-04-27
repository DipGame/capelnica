document.addEventListener("DOMContentLoaded", function () {

    // Скрипт три линии
    $(function () {
        $('#nav-icon4').click(function () {
            $(this).toggleClass('open');
        });
    });

    // Скрипт появления моб меню

    if (document.querySelector('#nav-icon4')) {
        const navIcon = document.querySelector('#nav-icon4');
        const overlayMenu = document.querySelector('.overlay__box')
        const box = document.querySelector('.box')

        console.log('dsad');

        function toggleMobMenu() {
            overlayMenu.classList.toggle('overlay_open');
            box.classList.toggle('box_open');
        }

        function removeMobMenu() {
            overlayMenu.classList.remove('overlay_open');
            box.classList.remove('box_open');
        }

        overlayMenu.addEventListener('click', () => {
            removeMobMenu();
            if (navIcon.classList.contains('open')) {
                navIcon.classList.remove('open');
            }
        })

        navIcon.addEventListener('click', () => {
            toggleMobMenu();
        })
    }

    // Скрипт submenu мобилка 
    if (document.querySelector('.parent')) {
        const parent = document.querySelectorAll('.parent');

        parent.forEach(element => {
            element.querySelector('a').addEventListener('click', (e) => {
                e.preventDefault();
                element.classList.toggle('parent_active');
            })
        });
    }
});
