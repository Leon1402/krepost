$(".phone").mask("+7(999)999-99-99");

jQuery.preloadImages = function () {
	for (var i = 0; i < arguments.length; i++) {
		jQuery("<img>").attr("src", arguments[i]);
	}
};

$.preloadImages("res/1.jpg", "res/2.jpg", "res/3.jpg", "res/downHover.png", "res/upHover.png",
"res/whatsappHover.png", "res/viberHover.png", "res/mailHover.png", "res/InstagramHover.png");


var up = document.getElementById('up'),
	down = document.getElementById('down'),
	slide = 0,
	slides = document.getElementById('header'),
	color = [
		'url(res/1.jpg)',
		'url(res/2.jpg)',
		'url(res/3.jpg)'
	],
	dotes = document.getElementsByClassName('numb');

down.addEventListener('click', nextSlide);
up.addEventListener('click', prevSlide);

for (var i = 0; i < dotes.length; i++) {
	dotes[i].addEventListener('click', changeSlide)
}

function changeSlide() {
	for (var i = 0; i < dotes.length; i++) {
		dotes[i].classList.remove('active');
	}
	this.classList.add('active');
	slides.style.backgroundImage = color[this.dataset.index];
	slide = this.dataset.index;
	timeOut();
}

function timeOut() {
	down.removeEventListener('click', nextSlide);
	up.removeEventListener('click', prevSlide);
	for (var i = 0; i < dotes.length; i++)
		dotes[i].removeEventListener('click', changeSlide)
	setTimeout(function () {
		down.addEventListener('click', nextSlide);
		up.addEventListener('click', prevSlide);
		for (var i = 0; i < dotes.length; i++)
			dotes[i].addEventListener('click', changeSlide);
	}, 1000);
}

function nextSlide() {
	for (var i = 0; i < dotes.length; i++) {
		dotes[i].classList.remove('active');
	}
	slide++;
	if (slide >= 3) slide = 0;
	slides.style.backgroundImage = color[slide];
	dotes[slide].classList.add('active');
	timeOut();
}

function prevSlide() {
	for (var i = 0; i < dotes.length; i++) {
		dotes[i].classList.remove('active');
	}
	slide--;
	if (slide <= -1) slide = 2;
	slides.style.backgroundImage = color[slide];
	dotes[slide].classList.add('active');
	timeOut();
}

$(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() != 0) {
			$('#topNubex').fadeIn();
		} else {
			$('#topNubex').fadeOut();
		}
	});
	let $cord = $('.map').offset().top;
	$('#topNubex').click(function () {
		$('body,html').animate({ scrollTop: 0 }, 700);
	});
	$('#location').click(function () {
		$('body,html').animate({ scrollTop: $cord }, 700);
	})
});

var modal = document.getElementById('id01');

window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}
let nextSlideGalery = function () {
	images[mainSlide].classList.remove('active');
	prevImages[mainSlide].classList.remove('active');
	mainSlide++;
	if (mainSlide >= count) mainSlide = 0;
	images[mainSlide].classList.add('active');
	prevImages[mainSlide].classList.add('active');
}

let prevSlideGalery = function () {
	images[mainSlide].classList.remove('active');
	prevImages[mainSlide].classList.remove('active');
	mainSlide--;
	if (mainSlide < 0) mainSlide = count - 1;
	images[mainSlide].classList.add('active');
	prevImages[mainSlide].classList.add('active');
}

let selectSlide = function () {
	images[mainSlide].classList.remove('active');
	prevImages[mainSlide].classList.remove('active');
	mainSlide = this.dataset.index;
	images[mainSlide].classList.add('active');
	prevImages[mainSlide].classList.add('active');
}

let mainSlide = 0;
let images = document.querySelectorAll('.slide');
let prevImages = document.querySelectorAll('.prevItem');
let count = images.length;

images[mainSlide].classList.add('active');
prevImages[mainSlide].classList.add('active');

document.getElementById('nextSlide').addEventListener('click', nextSlideGalery);
document.getElementById('prevSlide').addEventListener('click', prevSlideGalery);

for (let i = 0; i < count; i++)
	prevImages[i].addEventListener('click', selectSlide)

var closeAllCarsList = function () {
	for (let i = 0; i < buttonCarsList.length; i++) {
		carsList[i].classList.remove('activeCars');
	}
	
}

var openCarsList = function () {
	for (let i = 0; i < buttonCarsList.length; i++)
		if (i != this.dataset.index)
			carsList[i].classList.remove('activeCars');
	carsList[this.dataset.index].classList.toggle('activeCars');
	
}

var buttonCarsList = document.querySelectorAll('.carList');
var carsList = document.querySelectorAll('.carsList');

for (let i = 0; i < buttonCarsList.length; i++)
	buttonCarsList[i].addEventListener('click', openCarsList);
jQuery(function ($) {
	$(document).mouseup(function (e) { 
		var div = $(".carsList"); 
		var but = $(".carList")
		if (!div.is(e.target) 
			&& div.has(e.target).length === 0
			&& !but.is(e.target)) {
			closeAllCarsList();
		}
	});
});