//js-input
var total = document.querySelector('.item-input');
var app = document.querySelector('.app');
var stp = document.querySelector('.js__input-active');
function addip() {
    total.classList.add('item-active');
}
function removeip() {
    total.classList.remove('item-active');
}
stp.addEventListener('click', function(event) {
    event.stopPropagation();
})
app.addEventListener('click', removeip);
total.addEventListener('click', addip);
//js-modal
var modal_lg = document.querySelector('.navbar__modal');
var open_modal = document.querySelector('.js__openModal');
function removemodal() {
    modal_lg.classList.remove('js-closeModal');
}
open_modal.addEventListener('click', function() {
    if(modal_lg.classList.contains('js-openModal')) {
        // modal_lg.classList.
        modal_lg.classList.replace('js-openModal', 'js-closeModal')
        setTimeout(removemodal, 400)
    } else {
        
        modal_lg.classList.add('js-openModal')
    }
});
app.addEventListener('click', function() {
    modal_lg.classList.remove('js-openModal');
});
open_modal.addEventListener('click', function(event) {
    event.stopPropagation();
})
//showslide
var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

var slideIndex = 1;
var currentSlide = 1;
var dot = $$('.container_welcome-item');
var next = $('.container_welcome-item#next');
autoNext = next.onclick = function() {
    var nextSlide;
    if(currentSlide == 2) {
        nextSlide = 1;
    } else {
        nextSlide = currentSlide + 1;
    }
    var cur = $(`.slide${currentSlide}`).classList.add('next');
    var x = $('.next');
    setTimeout(() => {
        x.classList.remove('active', 'next')
    }, 500);
    var next = $(`.slide${nextSlide}`).classList.add('active', 'prev');
    var y = $('.prev');
    setTimeout(() => {
        y.classList.remove('prev');
    }, 500)
    dot[currentSlide-1].classList.remove('active');
    currentSlide = nextSlide;
    
    dot[currentSlide-1].classList.add('active');
}
setInterval(autoNext, 10000);
var prev = $('#prev');
prev.onclick = function() {
    var prevSlide;
    if(currentSlide == 1) {
        prevSlide = 2;
    } else {
        prevSlide = currentSlide - 1;
    }
    var cur = $(`.slide${currentSlide}`).classList.add('next1');
    var x = $('.next1');
    setTimeout(() => {
        x.classList.remove('active', 'next1')
    }, 500);
    var prev = $(`.slide${prevSlide}`).classList.add('active', 'prev1');
    var y = $('.prev1');
    setTimeout(() => {
        y.classList.remove('prev1');
    }, 500)
    dot[currentSlide-1].classList.remove('active');
    currentSlide = prevSlide;
    dot[currentSlide-1].classList.add('active');
    ; 
}
//Xu li imgs ?????a ??i???m n???i b???t
const imgsList = $('.container__header-img .container__header-list');

const imgTravel = {
    imgs : [
        {
            img: "assets/img/img1.png",
            travel: 'H?? N???i',
            harbourage: 2819
        }, 
        {
            img: "assets/img/img2.png",
            travel: 'TP.H??? Ch?? Minh',
            harbourage: 2290
        }, 
        {
            img: "assets/img/img3.png",
            travel: 'V??ng T??u',
            harbourage: 542
        }, 
        {
            img: "assets/img/img4.png",
            travel: 'D?? L???t',
            harbourage: 1474
        }, 
        {
            img: "assets/img/img5.png",
            travel: '???? N???ng',
            harbourage: 891
        }, 
        {
            img: "assets/img/img6.png",
            travel: 'Nha Trang',
            harbourage: 629
        }, 
        {
            img: "assets/img/img7.png",
            travel: 'Qu???ng Ninh',
            harbourage: 222
        }, 
        {
            img: "assets/img/img8.png",
            travel: 'H???i An',
            harbourage: 323
        } 
    ],
    render : function() {
        const imgs = this.imgs.map(function(item, index) {
            return `
            <div class="container__header-item">
                <img src="${item.img}" alt="" >
                <div class="container__header-title">
                    <h4>${item.travel}</h4>
                    <p>${item.harbourage} <span>Ch??? ???</span></p>
                </div>
            </div>`
            
        })
        imgsList.innerHTML = imgs.join('');
    },
    handEvents : function() {
        var prev = $('.btn__imgs-prev');
        var next = $('.btn__imgs-next');
        var counter = 0;
        var imgItem = $$('.container__header-item');
        var size = imgItem[0].clientWidth + 14;
        
        next.addEventListener('click', function() {
            prev.classList.remove('btn_item')
            if(counter == Math.ceil(imgItem.length / 2 - 1)) {
                next.classList.add('btn_item')
                return;
            } else {
                
            var next1 = counter + 1;
            imgItem.forEach(function(item) {
                item.style.transition = 'transform 0.5s ease-in-out';
                item.style.transform = 'translateX(' + (-size * next1) + 'px)'
            })
            counter = next1;
            }
            
        })

        prev.addEventListener('click', function() {
            next.classList.remove('btn_item')
            if(counter <= 0) {
                prev.classList.add('btn_item')
                return;
            }
            counter--;
            imgItem.forEach(function(item) {
                item.style.transition = 'transform 0.5s ease-in-out';
                item.style.transform = 'translateX(' + (-size * counter) + 'px)'
            })
            
        })
    },
    start : function() {
        this.render();
        this.handEvents();
    }
}
imgTravel.start();

//Xu li danh s??ch ph??ng cho thu??

const interviewList = $('.container__header-interview .container__header-list');

const introduceRoom = {
    rooms : [
        {
            img: 'assets/img/room1.jpg',
            title: 'Vi Vu ngo???i th??nh H?? N???i',
            text: 'Tr???i nghi???m kh??ng gian tho??ng ????ng cho chuy???n ??i ngay g???n H?? N???i'
        }, 
        {
            img: 'assets/img/room2.jpg',
            title: 'V??ng T??u bi???t th??? h??? b??i',
            text: 'Nh???ng c??n bi???t th??? c?? h??? b??i d??nh cho k?? ngh??? c???a b???n ??? V??ng T??u'
        },
        {
            img: 'assets/img/room3.jpg',
            title: 'H?? N???i n???i th??nh l??ng m???n',
            text: 'Kh??ng gian l??ng m???n d??nh cho c???p ????i t???i trung t??m H?? N???i'
        },
        {
            img: 'assets/img/room4.jpg',
            title: 'S??i G??n c???n l?? c?? ngay',
            text: 'Nh???ng c??n homestay c?? 01 ph??ng ng??? t???i S??i G??n c?? th??? ?????t nhanh ch??ng'
        },
        {
            img: 'assets/img/room5.jpg',
            title: 'B??? b??i && BBQ',
            text: 'Tr???i nghi???m d???ng c???p t???i nh???ng c??n homestay c?? b??? b??i ?????p v?? khu v???c BBQ ???m c??ng.'
        },
        {
            img: 'assets/img/room6.jpg',
            title: 'Si??u gi???m gi??',
            text: 'Top ch??? ??? gi???m gi?? ?????n 50% t??? c??c ch??? nh?? th??n thi???n tr??n Luxstay'
        },
        {
            img: 'assets/img/room7.jpg',
            title: 'G???n trung t??m',
            text: 'D??? d??ng di chuy???n kh???p n??i v???i top ch??? ??? khu v???c trung t??m th??nh ph??? H??? Ch?? Minh'
        },
    ],
    render : function() {
        var htmls = this.rooms.map(function(room, index) {
            return `
            <div class="container__interview-item">
            <div class="container__interview-img">
                <img src="${room.img}" alt="">
            </div>
            <div class="container__interview-title">
                <h4>${room.title}</h4>
                <p>${room.text}</p>
            </div>
        </div>
            `
        })
        interviewList.innerHTML = htmls.join('');
    },
    handEvents : function() {
        var prev = $('.container__header-interview .btn__imgs .btn__imgs-prev');
        var next = $('.container__header-interview .btn__imgs .btn__imgs-next');
       
        var counter = 0;
        var imgItem = $$('.container__interview-item');
        var size = imgItem[0].clientWidth;
        
        next.addEventListener('click', function() {
         
            prev.classList.remove('btn_item')
            if(counter == Math.ceil(imgItem.length / 2 - 1)) {
                next.classList.add('btn_item')
                return;
            } else {
                
            var next1 = counter + 1;
            imgItem.forEach(function(item) {
                item.style.transition = 'transform 0.5s ease-in-out';
                item.style.transform = 'translateX(' + (-size * next1) + 'px)'
            })
            counter = next1;
            }
            
        })

        prev.addEventListener('click', function() {
            next.classList.remove('btn_item')
            if(counter <= 0) {
                prev.classList.add('btn_item')
                return;
            }
            counter--;
            imgItem.forEach(function(item) {
                item.style.transition = 'transform 0.5s ease-in-out';
                item.style.transform = 'translateX(' + (-size * counter) + 'px)'
            })
            
        })
    },
    start : function() {
        this.render();
        this.handEvents();
    }
}
introduceRoom.start();
//X??? l?? render h??nh ???nh kh??ch s???n
var disocverList = $('.container__header-discover .container__header-list');

var discoverHotel = {
    hotels : [
        {
            img: 'assets/img/discover1.jpg',
            title: 'Th??ng tin homestay',
            text: '5 resort h???ng sang ??? Vi???t Nam xu???t hi???n tr??n t???p ch?? du l???ch Anh'
        },
        {
            img: 'assets/img/discover2.jpg',
            title: 'Th??ng tin homestay',
            text: 'Du l???ch C???n Th?? nh???t ??inh ph???i gh?? th??m nh???ng ?????a ??i???m n??y'
        },
        {
            img: 'assets/img/discover3.jpg',
            title: 'TP.H??? Ch?? Minh',
            text: 'Tu???n l??? "T??i y??u b??nh m?? S??i G??n" ch??nh th???c di???n ra t??? ng??y 24/3'
        },
        {
            img: 'assets/img/discover4.jpg',
            title: 'Th??ng tin homestay',
            text: 'Tr???i nghi???m th?? v??? ??? s??? th?? Zoodooo ???? L???t'
        },
        {
            img: 'assets/img/discover5.jpg',
            title: 'H???i An',
            text: 'H???i An s??? l???p ch???t qu???n l?? du kh??ch ??eo kh???u trang khi v??o th??nh ph???'
        },
        {
            img: 'assets/img/discover6.jpg',
            title: 'Th??ng tin homestay',
            text: 'M???c ph?? c??ch ly t???i kh??ch s???n, resort ??? Vi???t Nam cho du kh??ch c?? nhu c???u'
        },
        {
            img: 'assets/img/discover7.jpg',
            title: 'Th??ng tin homestay',
            text: 'Th??? ???? H?? N???i n???m trong danh s??ch nh???ng th??nh ph??? ?????p nh???t th??? gi???i'
        },
        {
            img: 'assets/img/discover8.jpg',
            title: 'Th??ng tin homestay',
            text: 'C??ch ?????t ph??ng t???i ???? L???t cho chuy???n du l???ch ti???t ki???m nh???t'
        },
        {
            img: 'assets/img/discover9.jpg',
            title: 'Th??ng tin homestay',
            text: 'C??ch l???p k??? ho???ch t??i ch??nh cho chuy???n du l???ch ho??n h???o'
        },
        {
            img: 'assets/img/discover10.jpg',
            title: 'V??ng T??u',
            text: 'List homestay V??ng T??u cho nh??m ????ng ng?????i, vui c?????i h?????ng gi?? t???t!'
        },
        {
            img: 'assets/img/discover11.jpg',
            title: 'V??ng T??u',
            text: 'Xu???t hi???n th??? gi???i ?????o l???n ??? V??ng T??u, b???n s???n s??ng th??? ch??a?'
        },
        {
            img: 'assets/img/discover12.jpg',
            title: 'TP.H??? Ch?? Minh',
            text: 'Nh???ng ??i???u n??n tu??n th??? tr?????c khi tr??? ph??ng homestay ????? l???i c??? ????i tr?????ng'
        },
        {
            img: 'assets/img/discover13.jpg',
            title: 'Th??ng tin H???u ??ch d??nh cho ch??? nh??(For Host)',
            text: 'Lakeside villa garden: ??i???m d???ng ch??n m???i toanh c???a gi???i tr??? H?? th??nh'
        },
        {
            img: 'assets/img/discover14.jpg',
            title: 'Th??ng tin homestay',
            text: 'Nh???ng ??i???u ki??ng k??? khi ??? homestay d?????i g??c nh??n ?????c l??? & l??? c???a T??? Qu???c K?? Nam'
        },
        {
            img: 'assets/img/discover15.jpg',
            title: 'Th??ng tin homestay',
            text: 'T???i sao ???? L???t l?? th??nh ph??? t??nh y??u'
        },
    ],
    render: function() {
        var htmls = this.hotels.map(function(item, index) {
            return `<div class="container__discover-item">
                        <img src="${item.img}" alt="">
                    <div class="container__discover-text">
                        <h4>${item.title}</h4>
                        <p>${item.text}</p>
                    </div>
                </div>`
        }) 
        disocverList.innerHTML = htmls.join('');
    },
    handEvents : function() {
        var prev = $('.container__header-discover .btn__imgs .btn__imgs-prev');
        var next = $('.container__header-discover .btn__imgs .btn__imgs-next');
       
        var counter = 0;
        var imgItem = $$('.container__discover-item');
        var size = imgItem[0].clientWidth + 12;
        next.addEventListener('click', function() {
            
            prev.classList.remove('btn_item')
            if(counter == Math.ceil(imgItem.length / 2 + 4)) {
                next.classList.add('btn_item')
                return;
            } else {
                
            var next1 = counter + 1;
            imgItem.forEach(function(item) {
                item.style.transition = 'transform 0.5s ease-in-out';
                item.style.transform = 'translateX(' + (-size * next1) +  'px)'
            })
            counter = next1;
            }
            
        })

        prev.addEventListener('click', function() {
            next.classList.remove('btn_item')
            if(counter <= 0) {
                prev.classList.add('btn_item')
                return;
            }
            counter--;
            imgItem.forEach(function(item) {
                item.style.transition = 'transform 0.5s ease-in-out';
                item.style.transform = 'translateX(' + (-size * counter) + 'px)'
            })
            
        })
    },
    start : function() {
        this.render();
        this.handEvents();
    }
}

discoverHotel.start();
