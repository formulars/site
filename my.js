function talk() {
    const talkLayer = document.getElementById('talkLayer');
    talkLayer.style.display = 'block';
    talkLayer.addEventListener('click', (e) => { if (e.target === talkLayer) { talkLayer.style.display = 'none'; } });
}

function talkOff() {
    const talkLayer = document.getElementById('talkLayer');
    talkLayer.style.display = 'none';
}

/* Open-Close mobile menu */
function mobiMenu() { document.getElementById("openedMenu").classList.toggle("opened"); }
function mobiMenuOFF() {
    var el = document.getElementById("openedMenu");
    el.classList.remove("opened");
    el.classList.add("openedMenu");
}

// Управление каруселью
$(document).ready(function () {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        margin: 0,
        nav: true,
        loop: true,
        slideBy: 1,
        dots: false,
        responsive: {
            0: { items: 1 },
            768: { items: 3 },
            1440: { items: 5 },
            2160: { items: 10 }
        }
    })
});

// В разделе Testimonials обрабатываем события наведения и увода курсора мыши
// Не работает при просмотре повторной порции данных
// const blocks = document.querySelectorAll('.block');
// for(let block of blocks) {
//     let number =  block.querySelector("img").src.slice(-6, -4);
//     block.addEventListener('mouseenter', () => {
//         block.classList.add('blockActiv');
//         block.querySelector("img").src = "/pic/picB" + number + ".png";
//     });
//     block.addEventListener('mouseleave', () => {
//         block.classList.remove('blockActiv');
//         block.querySelector("img").src = "/pic/picA" + number + ".png";
//     });
// };

/* Open-Close lang menu */
function lngMenu(){
    document.getElementById("langEN").onclick = "";
    for( let lang of document.querySelectorAll(".langs") ) { lang.classList.toggle("dsp") };
};

/* Замена в моб.версии */
if (document.body.clientWidth <= 767) {
    document.querySelector(".portfBigPic").src="pic/portf14.png";
    document.querySelector(".inviteHeader").innerHTML = document.querySelector(".inviteHeader").textContent.replace("<br/>", "");
};
