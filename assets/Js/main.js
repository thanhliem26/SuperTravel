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
//Xu li imgs địa điểm nổi bật
const imgsList = $('.container__header-img .container__header-list');

const imgTravel = {
    imgs : [
        {
            img: "assets/img/img1.png",
            travel: 'Hà Nội',
            harbourage: 2819
        }, 
        {
            img: "assets/img/img2.png",
            travel: 'TP.Hồ Chí Minh',
            harbourage: 2290
        }, 
        {
            img: "assets/img/img3.png",
            travel: 'Vũng Tàu',
            harbourage: 542
        }, 
        {
            img: "assets/img/img4.png",
            travel: 'Dà Lạt',
            harbourage: 1474
        }, 
        {
            img: "assets/img/img5.png",
            travel: 'Đà Nẵng',
            harbourage: 891
        }, 
        {
            img: "assets/img/img6.png",
            travel: 'Nha Trang',
            harbourage: 629
        }, 
        {
            img: "assets/img/img7.png",
            travel: 'Quảng Ninh',
            harbourage: 222
        }, 
        {
            img: "assets/img/img8.png",
            travel: 'Hội An',
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
                    <p>${item.harbourage} <span>Chỗ ở</span></p>
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

//Xu li danh sách phòng cho thuê

const interviewList = $('.container__header-interview .container__header-list');

const introduceRoom = {
    rooms : [
        {
            img: 'assets/img/room1.jpg',
            title: 'Vi Vu ngoại thành Hà Nọi',
            text: 'Trải nghiệm không gian thoáng đãng cho chuyến đi ngay gần Hà Nội'
        }, 
        {
            img: 'assets/img/room2.jpg',
            title: 'Vũng Tàu biệt thự hồ bơi',
            text: 'Những căn biệt thự có hồ bơi dành cho kì nghỉ của bạn ở Vũng Tàu'
        },
        {
            img: 'assets/img/room3.jpg',
            title: 'Hà Nội nội thành lãng mạn',
            text: 'Không gian lãng mạn dành cho cặp đôi tại trung tâm Hà Nội'
        },
        {
            img: 'assets/img/room4.jpg',
            title: 'Sài Gòn cần là có ngay',
            text: 'Những căn homestay có 01 phòng ngủ tại Sài Gòn có thể đặt nhanh chóng'
        },
        {
            img: 'assets/img/room5.jpg',
            title: 'Bể bơi && BBQ',
            text: 'Trải nghiệm dắng cấp tại những căn homestay có bể bơi đẹp và khu vực BBQ ấm cúng.'
        },
        {
            img: 'assets/img/room6.jpg',
            title: 'Siêu giảm giá',
            text: 'Top chỗ ở giảm giá đến 50% từ các chủ nhà thân thiện trên Luxstay'
        },
        {
            img: 'assets/img/room7.jpg',
            title: 'Gần trung tâm',
            text: 'Dễ dàng di chuyển khắp nơi với top chỗ ở khu vực trung tâm thành phố HỒ Chí Minh'
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
//Xử lí render hình ảnh khách sạn
var disocverList = $('.container__header-discover .container__header-list');

var discoverHotel = {
    hotels : [
        {
            img: 'assets/img/discover1.jpg',
            title: 'Thông tin homestay',
            text: '5 resort hạng sang ở Việt Nam xuất hiện trên tạp chí du lịch Anh'
        },
        {
            img: 'assets/img/discover2.jpg',
            title: 'Thông tin homestay',
            text: 'Du lịch Cần Thơ nhất đinh phải ghé thăm những địa điểm này'
        },
        {
            img: 'assets/img/discover3.jpg',
            title: 'TP.Hồ Chí Minh',
            text: 'Tuần lễ "Tôi yêu bánh mì Sài Gòn" chính thức diễn ra từ ngày 24/3'
        },
        {
            img: 'assets/img/discover4.jpg',
            title: 'Thông tin homestay',
            text: 'Trải nghiệm thú vị ở sở thú Zoodooo Đà Lạt'
        },
        {
            img: 'assets/img/discover5.jpg',
            title: 'Hội An',
            text: 'Hội An sẽ lập chốt quản lý du khách đeo khẩu trang khi vào thành phố'
        },
        {
            img: 'assets/img/discover6.jpg',
            title: 'Thông tin homestay',
            text: 'Mức phí cách ly tại khách sạn, resort ở Việt Nam cho du khách có nhu cầu'
        },
        {
            img: 'assets/img/discover7.jpg',
            title: 'Thông tin homestay',
            text: 'Thủ đô Hà Nội nằm trong danh sách những thành phố đẹp nhất thế giới'
        },
        {
            img: 'assets/img/discover8.jpg',
            title: 'Thông tin homestay',
            text: 'Cách đặt phòng tại Đà Lạt cho chuyến du lịch tiết kiệm nhất'
        },
        {
            img: 'assets/img/discover9.jpg',
            title: 'Thông tin homestay',
            text: 'Cách lập kế hoạch tài chính cho chuyến du lịch hoàn hảo'
        },
        {
            img: 'assets/img/discover10.jpg',
            title: 'Vũng Tàu',
            text: 'List homestay Vũng Tàu cho nhóm đông người, vui cười hưởng giá tốt!'
        },
        {
            img: 'assets/img/discover11.jpg',
            title: 'Vũng Tàu',
            text: 'Xuất hiện thế giới đảo lộn ở Vũng Tàu, bạn sẵn sàng thử chưa?'
        },
        {
            img: 'assets/img/discover12.jpg',
            title: 'TP.Hồ Chí Minh',
            text: 'Những điều nên tuân thủ trước khi trả phòng homestay để lợi cả đôi trường'
        },
        {
            img: 'assets/img/discover13.jpg',
            title: 'Thông tin Hữu ích dành cho chủ nhà(For Host)',
            text: 'Lakeside villa garden: điểm dừng chân mới toanh của giới trẻ Hà thành'
        },
        {
            img: 'assets/img/discover14.jpg',
            title: 'Thông tin homestay',
            text: 'Những điều kiêng kị khi ở homestay dưới góc nhìn độc lạ & lạ của Tạ Quốc Kì Nam'
        },
        {
            img: 'assets/img/discover15.jpg',
            title: 'Thông tin homestay',
            text: 'Tại sao Đà Lạt là thành phố tình yêu'
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
