document.addEventListener("DOMContentLoaded", function () {

    Fancybox.bind('[data-fancybox="first_gallery"]', {
        Images: {
            initialSize: "cover",
        },
    });
    Fancybox.bind('[data-fancybox="second_gallery"]', {
        Images: {
            initialSize: "cover",
        },
    });
    Fancybox.bind('[data-fancybox="video"]', {
    });

    let fotoSwiper1 = new Swiper(".fotoSwiper1", {
        autoplay: {
            delay: 0,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
            reverseDirection: false,
        },
        freeMode: true,
        speed: 20000,
        freeModeMomentum: false,
        loop: true,
        centeredSlides: false,
        slidesPerView: 1,
        spaceBetween: 30,
        // navigation: {
        //     nextEl: ".swiper-button-next-slider_2",
        //     prevEl: ".swiper-button-prev-slider_2",
        // },
        breakpoints: {
            550: {
                slidesPerView: 'auto',
                spaceBetween: 30,
            },
        }
    });
    let fotoSwiper2 = new Swiper(".fotoSwiper2", {
        autoplay: {
            delay: 0,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
            reverseDirection: true,
        },
        freeMode: true,
        speed: 20000,
        freeModeMomentum: false,
        loop: true,
        centeredSlides: false,
        slidesPerView: 1,
        spaceBetween: 30,
        // navigation: {
        //     nextEl: ".swiper-button-next-slider_2",
        //     prevEl: ".swiper-button-prev-slider_2",
        // },
        breakpoints: {
            550: {
                slidesPerView: 'auto',
                spaceBetween: 30,
            },
        }
    });

    let capelSwiper1 = new Swiper(".capelSwiper1", {
        autoplay: {
            delay: 0,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
            reverseDirection: false,
        },
        freeMode: true,
        speed: 20000,
        freeModeMomentum: false,
        loop: true,
        centeredSlides: false,
        slidesPerView: 1,
        spaceBetween: 30,
        breakpoints: {
            695: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1045: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1357: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        }
    });

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

    // Скрипт формы

    [].forEach.call(document.querySelectorAll('[name="phone"]'), function (input) {
        var keyCode;
        function mask(event) {
            event.keyCode && (keyCode = event.keyCode);
            var pos = this.selectionStart;
            if (pos < 3) event.preventDefault();
            var matrix = "+7 (___) ___ ____",
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, ""),
                new_value = matrix.replace(/[_\d]/g, function (a) {
                    return i < val.length ? val.charAt(i++) : a
                });
            i = new_value.indexOf("_");
            if (i != -1) {
                i < 5 && (i = 3);
                new_value = new_value.slice(0, i)
            }
            var reg = matrix.substr(0, this.value.length).replace(/_+/g,
                function (a) {
                    return "\\d{1," + a.length + "}"
                }).replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
                this.value = new_value;
            }
            if (event.type == "blur" && this.value.length < 5) {
                this.value = "";
            }
        }

        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);
        input.addEventListener("keydown", mask, false);

    });

    if (document.querySelector('.form_desc')) {
        const formSelect = document.querySelectorAll(".form_desc");

        formSelect.forEach(formSel => {
            let form = formSel.querySelector("form");
            let hedCont = formSel.querySelector(".cont_1");
            let formBtn = formSel.querySelector("[type='submit']");
            let hedContText = formSel.querySelector(".first_text");
            let nameInp = formSel.querySelector("[name='name']");
            let phoneInp = formSel.querySelector("[name='phone']");
            let nameCont = nameInp.parentNode;
            let phoneCont = phoneInp.parentNode;

            $(function () {
                $(nameInp).keyup(function () {
                    sergey = $(this).val().toLowerCase(), spout = 'http://,https,url,.ru,.com,.net,.tk,php,.ucoz,www,.ua,.tv,.info,.org,.su,.ру,.су,.ком,.инфо,//'.split(',');
                    for (litvinov = 0; litvinov < spout.length; litvinov++) {
                        if (sergey.search(spout[litvinov]) != -1) {
                            $(this).val(sergey.replace(spout[litvinov], '[Запрещено]'));
                            return true;
                        }
                    }
                });
            });

            function checkInputsValid(input, num) {
                if (input.value.length < num) {
                    input.parentNode.classList.add("err");
                    return false;
                } else {
                    input.parentNode.classList.remove("err");
                    return true;
                }
            }

            let check;

            function addLisInput(input, num) {
                checkInputsValid(input, num);
                input.addEventListener('input', check = () => checkInputsValid(input, num))
            }

            function removeLisInput(input) {
                input.removeEventListener('input', check)
            }

            function handleTextGood() {
                formSel.classList.add("good");
                hedContText.textContent = "Спасибо за заявку! Скоро мы свяжемся с вами!";
            }

            function handleTextNoGood() {
                alert("Повторите попытку позже");
            }

            function handleTextError() {
                alert("Что-то пошло не так");
            }

            form.addEventListener('submit', (e) => {
                e.preventDefault();
                removeLisInput(nameInp);
                removeLisInput(phoneInp);

                addLisInput(nameInp, 1);
                addLisInput(phoneInp, 17);

                if (checkInputsValid(nameInp, 1) && checkInputsValid(phoneInp, 17)) {
                    handleTextGood();
                    console.log('sub');
                }
            })
        });
    }

    if (document.getElementById("cont_ans")) {
        const contAns = document.getElementById("cont_ans");
        const cardsAns = contAns.querySelectorAll(".card");

        cardsAns.forEach(card => {
            card.addEventListener('click', () => {
                card.classList.toggle("open");
            })
        });
    }

    if (document.getElementById("tab_cont_1")) {
        const contTab_1 = document.getElementById("tab_cont_1");
        const tab_1 = contTab_1.querySelectorAll("a");
        const cocteli = document.querySelector(".cocteli");
        const cont_3 = cocteli.querySelector(".cont_3");
        const cards_1 = cont_3.querySelectorAll(".card");

        tab_1.forEach(tab => {

            tab.addEventListener('click', () => {
                tab_1.forEach(tabb => {
                    tabb.classList.remove("active");
                })
                tab.classList.add("active");
                cards_1.forEach(card => {
                    card.classList.add("invise");
                    if (tab.id == card.id) {
                        card.classList.remove("invise");
                    } else if (tab.id == 'cl_0') {
                        card.classList.remove("invise");

                    }
                });
            })
        });
    }
});
