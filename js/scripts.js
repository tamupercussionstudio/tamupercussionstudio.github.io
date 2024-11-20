// var bannerClosed;
function init() {
	// document.getElementById('covidBanner').style.visibility='hidden'; // 'visible';
	// bannerClosed = true;  // 'false';
}

//Delete after COVID
// function closeBanner() {
//   document.getElementById('covidBanner').style.visibility = 'hidden';
//   bannerClosed = true;
// }

if (window.location.href == 'https://www.tamupercussionstudio.com/' || window.location.href.includes('#') || window.location.href.includes('index.html')) {
	//Stick overlay displacement to fit screen
	var panel1 = document.getElementById('panel1');
	var panel2 = document.getElementById('panel2');
	if (window.innerWidth < window.innerHeight) {
		panel1.src = 'assets/stickOverlay3.png';
		panel2.src = 'assets/stickOverlay4.png';
		panel1.style.height = 'auto';
		panel2.style.height = 'auto';
		panel1.style.width = '100vw';
		panel2.style.width = '100vw';
		panel1.style.top = '0';
		panel2.style.bottom = '0';
	}
	window.addEventListener("orientationchange", function(event) {
		switch(window.orientation) {
			case -90: case 90:
				panel1.src = 'assets/stickOverlay1.png';
				panel2.src = 'assets/stickOverlay2.png';
				panel1.style.height = '100vh';
				panel2.style.height = '100vh';
				panel1.style.width = 'auto';
				panel2.style.width = 'auto';
				break;
			default:
				panel1.src = 'assets/stickOverlay3.png';
				panel2.src = 'assets/stickOverlay4.png';
				panel1.style.height = 'auto';
				panel2.style.height = 'auto';
				panel1.style.width = '100vw';
				panel2.style.width = '100vw';
				panel1.style.top = '0';
				panel2.style.bottom = '0';
		}
	});

	//Watch Section slideshow code from https://www.w3schools.com/howto/howto_js_slideshow.asp
	var slides = document.getElementsByClassName('mySlides');
	var numSlides = slides.length;
	var slideIndex = 0;
	showSlides(slideIndex);
	// Next/previous controls
	function plusSlides(n) {
		currentSlide(slideIndex+n);
	}
	// Thumbnail image controls
	function currentSlide(n) {
		if (n > numSlides-1) {n = 0}
		if (n < 0) {n = numSlides-1}
		stopSlide(slideIndex);
		slideIndex = n;
		showSlides(slideIndex);
	}
	function stopSlide(n) {
		// Pause the iframe video on the slide
		var curFrame = slides[n].querySelector('iframe');
		if (curFrame) {
			curFrame.contentWindow.postMessage(JSON.stringify({ event: 'command', func: 'pauseVideo' }), '*');
		}
	}
	function showSlides(n) {
		// make the nth slide visible and the others invisible, and update dots

		var slide = slides[n];
		var dots = document.getElementsByClassName('dot');

		for (let i = 0; i < numSlides; i++) {
				slides[i].style.display = 'none';
		}
		for (let i = 0; i < dots.length; i++) {
				dots[i].className = dots[i].className.replace(' active', '');
		}
		slide.style.display = 'block';
		dots[n].className += ' active';
	}
}

function scrollCheck() {
	var y = Math.ceil(document.getElementById('parallaxWrapper').scrollTop);
  var about = document.getElementById('about').offsetTop;
  var showNavAt = window.innerHeight * 0.8; // Example threshold

	var join = document.getElementById('join').offsetTop;
	var r3 = document.getElementById('row3').offsetTop + about;
	//Stick overlay opacity
	if (y == 0)
		document.getElementById('stickOverlay').style.opacity = '1';
	else {
		var limit = document.getElementById('downArrow').offsetTop;
		var ratio = 1 - (y/limit);
		document.getElementById('stickOverlay').style.opacity = ratio;
	}
	//Menu button opacity
	if (y >= window.screen.height && y < about) {
		document.getElementById('navHeader').style.visibility = 'visible';
		document.getElementById('navHeader').style.opacity = (y-window.screen.height) / (about-window.screen.height);
	}
	else if (y >= about) {
		document.getElementById('navHeader').style.visibility = 'visible';
		document.getElementById('navHeader').style.opacity = '1';
	}
	else {
		document.getElementById('navHeader').style.visibility = 'hidden';
		document.getElementById('navHeader').style.opacity = '0';
	}
	//Arm with tickets position
	if (y <= r3) {
		var ratio1 = 100 - 80 * (y/r3);
		var ratio2 = -20 * (y/r3);
		document.getElementById('tickets').style.transform = 'translate(' + ratio1 + '%, ' + ratio2 + '%) rotate(-5deg)';
	}
	else if (y >= r3 && y <= join) {
		var ratio1 = 20 + 80 * ((y-r3)/(join-r3));
		var ratio2 = -20 + 20 * ((y-r3)/(join-r3));
		document.getElementById('tickets').style.transform = 'translate(' + ratio1 + '%, ' + ratio2 + '%) rotate(-5deg)';
	}
	else {
		document.getElementById('tickets').style.transform = 'translate(100%, -20%) rotate(-5deg)';
	}

	
  if (y >= showNavAt) {
    document.getElementById('navHeader').style.visibility = 'visible';
    document.getElementById('navHeader').style.opacity = '1';
  } else {
    document.getElementById('navHeader').style.visibility = 'hidden';
    document.getElementById('navHeader').style.opacity = '0';
  }
}