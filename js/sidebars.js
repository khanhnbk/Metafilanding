/* global bootstrap: false */
(function () {
  'use strict'
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  tooltipTriggerList.forEach(function (tooltipTriggerEl) {
    new bootstrap.Tooltip(tooltipTriggerEl)
  })
})()
// document.querySelector(".arrowLeftfillcircle").addEventListener('click', function () {
//   document.body.classList.toggle("menu-hide");
// }, false);
// document.querySelector(".logo_2").addEventListener('click', function () {
//   document.body.classList.toggle("menu-hide");
// }, false);
// document.querySelector(".navbar-toggler").addEventListener('click', function () {
//   document.body.classList.toggle("an-menu_mobile");
// }, false);

// window.onload = function () {
  var btnScroll = document.getElementById('btnScroll');
  var mainSctoll = document.querySelector('main');
  var windowTop = mainSctoll.scrollTop;

  var openmenuarrow = document.getElementById('btn-menu');
  var menu = document.getElementById('navbar-toggle-menu');
  var mainpage = document.getElementById('mainpage');
  var menuX = document.getElementById('menu-x');
  var iconmenu = document.getElementById('icon-menu');
  var staticAppInfo = document.getElementById('staticAppinfoRight');
  var showHideAppInfo = document.getElementById('showHide')
  var arrowChanger = document.getElementById('arrowLeftRight')
  var menuLeft2 = document.querySelector('.menu-left2');

  function rmclass(e){
    mainpage.classList.remove("hovermenu");
    mainpage.classList.remove("menu-hide");
    mainpage.classList.toggle("an-menu_mobile");
  }
  function changer(){
      mainpage.classList.remove("hovermenu");
      mainpage.classList.remove("menu-hide");
      iconmenu.classList.toggle("fa-xmark");
  }
  function btnHideShow(){
    staticAppInfo.classList.toggle("btnShowHideAppInfo");
  }
  function changerArrow(){
    arrowChanger.classList.toggle("btnShow")
  }
  function xoaclass(){
    if(!mainpage.classList.contains('hovermenu') && !mainpage.classList.contains('menu-hide')){
      mainpage.classList.add("hovermenu");
      mainpage.classList.add("menu-hide");
    } else {
      mainpage.classList.remove("hovermenu");
      mainpage.classList.remove("menu-hide");
    }
  }
  function menuOver(){
    if(mainpage.classList.contains('hovermenu')){
      mainpage.classList.remove("menu-hide");
    }
  }
  function menuOut(){
    if(mainpage.classList.contains('hovermenu')){
      mainpage.classList.add("menu-hide");
    }
  }
 
  function windowTo() {
    // mainSctoll.scrollTo(0,0);
    mainSctoll.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
  function windowTopfun() {
    if(mainSctoll.scrollTop > 80 &&  mainSctoll.scrollTop - windowTop > 0){
      btnScroll.classList.add('show-top');
      windowTop = mainSctoll.scrollTop;
    } else {
      btnScroll.classList.remove('show-top');
        windowTop = mainSctoll.scrollTop;
    }
  };
  mainSctoll.addEventListener('scroll', function(e) {windowTopfun()}, false);
  btnScroll.addEventListener('click', windowTo, false);

  openmenuarrow.addEventListener('click', xoaclass, false);
  menuLeft2.addEventListener('mouseover', menuOver, false);
  menuLeft2.addEventListener('mouseout', menuOut, false);
  menu.addEventListener('click', rmclass, false);
  menuX.addEventListener('click', rmclass, false);
  menuX.addEventListener('click', changer, false);
  menu.addEventListener('click', changer, false);
  showHideAppInfo.addEventListener("click", btnHideShow, false);
  showHideAppInfo.addEventListener("click", changerArrow, false);
// };


var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

function myFunction() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
  
  btn.classList.toggle("pauBtnVideo");
}

// 3D Slider for Reece

/*=================================================
INIT
===================================================*/

on = 0;  // Init
time = 500; // Set the delay before the next click is accepted to 1 second
pos = 1; // Set init position
pos2 = 2;
pos3 = 3;

/*=================================================
CLICK FUNCTIONS
===================================================*/

// Right
$('.right').click(function(){
  rotateRight(); // Call
  on = 1; // Set delay on
});

// Left
$('.left').click(function(){
  rotateLeft(); // Call
  on = 1; // Set delay on
});

/*=================================================
AUTOPLAY
===================================================*/

play = setInterval(function(){
  rotateLeft()
},3000)

/*=================================================
ROTATE FUNCTIONS
===================================================*/

// Rotate left
function rotateLeft(){
  if(on == 0){
    $('.p_slider__item:nth-of-type(' + pos + ')').animate({'left':'200px'},200)
    $('.p_slider__item:nth-of-type(' + pos + ')').css('z-index','0')
    $('.p_slider__item:nth-of-type(' + pos2 + ')').animate({'left':'-200px'},200)
    setTimeout (function(){
      $('.p_slider__item:nth-of-type(' + pos2 + ')').css({'transform':'scale(0.6)','opacity':'0.8','webkit-filter':'blur(2px)','z-index':'1'});
      pos++;pos2++;pos3++;
      if(pos > 3){pos = 1}if(pos2 > 3){pos2 = 1;}if(pos3 > 3){pos3 = 1;}
    },400)
    $('.p_slider__item:nth-of-type(' + pos3 + ')').animate({'left':'0px'},200)
    $('.p_slider__item:nth-of-type(' + pos3 + ')').css({'transform':'scale(1)','opacity':'1','webkit-filter':'blur(0px)','z-index':'2'})
    setTimeout (function(){
      on = 0; // Accept clicks again
    },time)
  }
}

// Rotate right
function rotateRight(){
  if(on == 0){
    $('.p_slider__item:nth-of-type(' + pos3 + ')').animate({'left':'-200px'},200)
    $('.p_slider__item:nth-of-type(' + pos3 + ')').css('z-index','0')
    $('.p_slider__item:nth-of-type(' + pos2 + ')').animate({'left':'200px'},200)
    setTimeout (function(){
      $('.p_slider__item:nth-of-type(' + pos2 + ')').css({'transform':'scale(0.6)','opacity':'0.8','webkit-filter':'blur(2px)','z-index':'0'});
      pos--;pos2--;pos3--;
      if(pos < 1){pos = 3}if(pos2 < 1){pos2 = 3;}if(pos3 < 1){pos3 = 3;}
      console.log(pos,pos2,pos3)
    },400)
    $('.p_slider__item:nth-of-type(' + pos + ')').animate({'left':'0px'},200)
    $('.p_slider__item:nth-of-type(' + pos + ')').css({'transform':'scale(1)','opacity':'1','webkit-filter':'blur(0px)','z-index':'1'})
    setTimeout (function(){
      on = 0; // Accept clicks again
    },time)
  }
}

$('.p_slider__item img').hover(function(){
  clearInterval(play)
})
$('.p_slider__item img').mouseenter(function(){
  $(this).animate({'top':'-14px'},300);
})
$('.p_slider__item img').mouseout(function(){
  $(this).stop(true,false).animate({'top':'0px'},300)
  play = setInterval(function(){
    rotateLeft()
  },3000)
})




var swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  spaceBetween: 10,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

var reveals = document.querySelectorAll(".reveal-show");
function reveal() {
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    // var revwalpoint = 50;
    if (revealtop < windowHeight) {
      reveals[i].classList.add("active-show");
    } 
    else {
    reveals[i].classList.remove("active-show");
    }
  }
};
window.addEventListener('scroll', function(e) {reveal()}, false);
