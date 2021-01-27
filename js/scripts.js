var bannerClosed;
function init() {
  document.getElementById('covidBanner').style.visibility='visible';
  bannerClosed = false;
<<<<<<< Updated upstream
  if (window.location.href == "https://www.tamupercussionstudio.com/") {
=======
  if (window.location.href == 'https://www.tamupercussionstudio.com/' || window.location.href.includes('#') || window.location.href.includes('index.html')) {
>>>>>>> Stashed changes
    var vidDefer = document.getElementsByTagName('iframe');
    for (var i=0; i<vidDefer.length; i++) {
      if(vidDefer[i].getAttribute('data-src')) {
        vidDefer[i].setAttribute('src',vidDefer[i].getAttribute('data-src'));
      }
    }
  }
}
window.onload = init;

//Delete after COVID
function closeBanner() {
  document.getElementById('covidBanner').style.visibility = 'hidden';
  bannerClosed = true;
}

<<<<<<< Updated upstream
if (window.location.href == "https://www.tamupercussionstudio.com/") {
=======
if (window.location.href == 'https://www.tamupercussionstudio.com/' || window.location.href.includes('#') || window.location.href.includes('index.html')) {
>>>>>>> Stashed changes
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
  var slideIndex = 1;
  showSlides(slideIndex);
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName('mySlides');
    var dots = document.getElementsByClassName('dot');
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }
    slides[slideIndex-1].style.display = 'block';
    dots[slideIndex-1].className += ' active';
  }
}

function scrollCheck() {
  var y = document.getElementById('parallaxWrapper').scrollTop;
  var about = document.getElementById('about').offsetTop;
  var join = document.getElementById('join').offsetTop;
  var r3 = document.getElementById('row3').offsetTop + about;
  //Stick overlay opacity
  if (y == 0)
    document.getElementById('stickOverlay').style.opacity = '1';
  else {
    var limit = document.getElementById('bigLogo').offsetTop;
    var ratio = 1 - (y/limit);
    document.getElementById('stickOverlay').style.opacity = ratio;
  }
  //Menu button opacity
  if (y >= window.screen.height && y <= about) {
    document.getElementById('navHeader').style.visibility = 'visible';
    document.getElementById('navHeader').style.opacity = (y-window.screen.height) / (about-window.screen.height);
  }
  else if (y > about) {
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
}

//Changes visibility of navigation screen and performs menu button animation
function toggleNav() {
  var nav = document.getElementById('nav');
  var stick1 = document.getElementById('stick1');
  var stick2 = document.getElementById('stick2');
  var label = document.getElementById('menuLabel');
  var banner = document.getElementById('covidBanner');
  var isVis = banner.style.visibility;
  if (nav.style.visibility == 'hidden') {
    nav.style.visibility = 'visible';
    label.style.transitionDelay = '0s';
    label.style.opacity = 0;
    label.style.visibility = 'hidden';
    stick1.src = 'assets/drumstickWhite.png';
    stick2.src = 'assets/drumstickWhite.png';
    stick1.style.transform = 'rotate(-45deg) translate(-2.5vh, 2.5vh) scale(1, 1.4)';
    stick2.style.transform = 'rotate(225deg) translate(-2.5vh, -2.5vh) scale(1, 1.4)';
    banner.style.visibility = 'hidden';
  }
  else {
    nav.style.visibility = 'hidden';
    document.getElementById('navHeader').style.opacity = '1';
    label.style.transitionDelay = '1s';
    label.style.visibility = 'visible';
    label.style.opacity = 1;
    stick1.src = 'assets/drumstickBlack.png';
    stick2.src = 'assets/drumstickBlack.png';
    stick1.style.transform = 'rotate(0deg) translate(0, 0) scale(1, 1.4)';
    stick2.style.transform = 'rotate(180deg) translate(0, -5vh) scale(1, 1.4)';
    if (!bannerClosed) banner.style.visibility = 'visible';
  }
}
