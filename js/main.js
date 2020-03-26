




///////////////////////////////////
// SCROLL TEXTPATH RESOLUTION CHECK
///////////////////////////////////

if (window.innerWidth > 1023) {
	smallTpath = 'width="428" height="428" viewBox="0 0 428 428" fill="none" xmlns="http://www.w3.org/2000/svg"> <path id="st0" d="M0,214a214,214 0 1,0 428,0a214,214 0 1,0 -428,0"/>'
	mediumTpath = 'width="620" height="620" viewBox="0 0 620 620" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="st1" d="M0,310a310,310 0 1,0 620,0a310,310 0 1,0 -620,0"/>'
	largeTpath = 'width="788" height="788" viewBox="0 0 788 788" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="st2" d="M0,394a394,394 0 1,0 788,0a394,394 0 1,0 -788,0"/>'
}

else {
	smallTpath = 'width="302" height="302" viewBox="0 0 302 302" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="st0" d="M0,151a151,151 0 1,0 302,0a151,151 0 1,0 -302,0"/>'
	mediumTpath = 'width="450" height="450" viewBox="0 0 450 450" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="st1" d="M0,225a225,225 0 1,0 450,0a225,225 0 1,0 -450,0"/>'
	largeTpath = 'width="578" height="578" viewBox="0 0 578 578" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="st2" d="M0,289a289,289 0 1,0 578,0a289,289 0 1,0 -578,0"/>'
}



var upd = 0

var scroll = function () {
	if (window.scrollY < window.innerHeight * 3) {
		if (upd != 1) {
      //s
			document.getElementById('stext').innerHTML=('<svg class="badtxt cfix fadeanim" ' + smallTpath + ' <text class ="stxt1" width="500" fill="#fff"><textPath alignment-baseline="top" xlink:href="#st0" fill="white">ВСЁ ПЛОХО ВСЁ ПЛОХО ВСЁ ПЛОХО</textPath></svg>')
      //m
      document.getElementById('mtext').innerHTML=('<svg class="badtxt cfix fadeanim" '+ mediumTpath +' <text class ="mtxt1" width="500" fill="#fff"><textPath alignment-baseline="top" xlink:href="#st1" fill="white">ВСЁ ПЛОХО ВСЁ ПЛОХО ВСЁ ПЛОХО ВСЁ ПЛОХО ВСЁ ПЛОХО</textPath></svg>')
      //l
      document.getElementById('ltext').innerHTML=('<svg class="badtxt cfix fadeanim" '+ largeTpath +'<text class ="ltxt1" width="500" fill="#fff"><textPath alignment-baseline="top" xlink:href="#st2" fill="white">ВСЁ ПЛОХО ВСЁ ПЛОХО ВСЁ ПЛОХО ВСЁ ПЛОХО  ВСЁ ПЛОХО ВСЁ ПЛОХО  ВСЁ ПЛОХО ВСЁ ПЛОХО  ВСЁ ПЛОХО</textPath></svg>')
      upd = 1
		}
	}

	else  if (window.scrollY > window.innerHeight * 3 && window.scrollY < window.innerHeight * 8)  {
		if (upd != 2) {
        //s
				document.getElementById('stext').innerHTML=('<svg class="badtxt cfix fadeanim" ' + smallTpath + ' <text class ="stxt2" width="500" fill="#fff"><textPath alignment-baseline="top" xlink:href="#st0" fill="white">ВСЁ НЕ ТАК ПЛОХО ВСЁ НЕ ТАК ПЛОХО</textPath></svg>')
        //m
        document.getElementById('mtext').innerHTML=('<svg class="badtxt cfix fadeanim" ' +	mediumTpath + ' <text class ="mtxt2" width="500" fill="#fff"><textPath alignment-baseline="top" xlink:href="#st1" fill="white">ВСЁ НЕ ТАК ПЛОХО ВСЁ НЕ ТАК ПЛОХО</textPath></svg>')
        //l
        document.getElementById('ltext').innerHTML=('<svg class="badtxt cfix fadeanim" ' + largeTpath + ' <text class ="ltxt2" width="500" fill="#fff"><textPath alignment-baseline="top" xlink:href="#st2" fill="white">ВСЁ НЕ ТАК ПЛОХО ВСЁ НЕ ТАК ПЛОХО</textPath></svg>')
        upd = 2
			}
		}

		else  if (window.scrollY > window.innerHeight * 8 && window.scrollY < window.innerHeight * 13)  {
			if (upd != 3) {
          //s
					document.getElementById('stext').innerHTML=('<svg class="badtxt cfix fadeanim" ' + smallTpath + ' <text class ="stxt3" width="500" fill="#fff"><textPath alignment-baseline="top" xlink:href="#st0" fill="white">УЖЕ ЛУЧШЕ УЖЕ ЛУЧШЕ УЖЕ ЛУЧШЕ</textPath></svg>')
          //m
          document.getElementById('mtext').innerHTML=('<svg class="badtxt cfix fadeanim" ' +	mediumTpath + ' <text class ="mtxt3" width="500" fill="#fff"><textPath alignment-baseline="top" xlink:href="#st1" fill="white">УЖЕ ЛУЧШЕ УЖЕ ЛУЧШЕ УЖЕ ЛУЧШЕ</textPath></svg>')
          //l
          document.getElementById('ltext').innerHTML=('<svg class="badtxt cfix fadeanim" ' + largeTpath + ' <text class ="ltxt3" width="500" fill="#fff"><textPath alignment-baseline="top" xlink:href="#st2" fill="white">УЖЕ ЛУЧШЕ УЖЕ ЛУЧШЕ УЖЕ ЛУЧШЕ</textPath></svg>')
          upd = 3
				}
		}
    else  if (window.scrollY > window.innerHeight * 13 && window.scrollY < window.innerHeight * 20)  {
      if (upd !=4) {
          //s
          document.getElementById('stext').innerHTML=('<svg class="badtxt cfix fadeanim" ' + smallTpath + ' <text class ="stxt4" width="500" fill="#fff"><textPath alignment-baseline="top" xlink:href="#st0" fill="white">ПРЕКРАСНО ПРЕКРАСНО</textPath></svg>')
          //m
          document.getElementById('mtext').innerHTML=('<svg class="badtxt cfix fadeanim" ' + mediumTpath + '<text class ="mtxt4" width="500" fill="#fff"><textPath alignment-baseline="top" xlink:href="#st1" fill="white">ПРЕКРАСНО ПРЕКРАСНО ПРЕКРАСНО</textPath></svg>')
          //l
          document.getElementById('ltext').innerHTML=('<svg class="badtxt cfix fadeanim" ' + largeTpath + ' <text class ="ltxt4" width="500" fill="#fff"><textPath alignment-baseline="top" xlink:href="#st2" fill="white">ПРЕКРАСНО ПРЕКРАСНО ПРЕКРАСНО</textPath></svg>')
          upd = 4
        }
    }
};

var raf = window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    window.oRequestAnimationFrame;
var $window = $(window);
var lastScrollTop = $window.scrollTop();

if (raf) {
    loop();
}

function loop() {
    var scrollTop = $window.scrollTop();
    if (lastScrollTop === scrollTop) {
        raf(loop);
        return;
    } else {
        lastScrollTop = scrollTop;

        // fire scroll function if scrolls vertically
        scroll();
        raf(loop);
    }
}


//////////////
//Libs startup
//////////////



$(".logo").fadeOut();
$(".bgend").fadeOut();
window.onload = function() {

	scroll()

	lax.setup({
	    breakpoints: { small: 0, large: 1367 }
	})

	const updateLax = () => {
		lax.update(window.scrollY)
		window.requestAnimationFrame(updateLax)
	}

	window.requestAnimationFrame(updateLax)
}


window.addEventListener("resize", function() {
	lax.updateElements()
});

const partconf =
{
  "particles": {
    "number": {
      "value": 55,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 4,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 4,
      "direction": "top",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": true,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 10
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}

particlesJS('particles', partconf)

//ii tap scroll

$("#ii").click(function() {
	if (window.scrollY < window.innerHeight * 3) {
    $('html,body').animate({
        scrollTop: $("#link1").offset().top},
        3000);
		}
	else if (window.scrollY > window.innerHeight * 3 && window.scrollY < window.innerHeight * 8)
	 {
    $('html,body').animate({
        scrollTop: $("#link2").offset().top},
        3000);
		}
	else if (window.scrollY > window.innerHeight * 8 && window.scrollY < window.innerHeight * 13)
		 {
	    $('html,body').animate({
	        scrollTop: $("#link3").offset().top},
	        3000);
			}
	else if (window.scrollY > window.innerHeight * 12 && window.scrollY < window.innerHeight * 20)
		 {
	    $('html,body').animate({
	        scrollTop: $("#link4").offset().top},
	        3000);
  		}

});


// SHOW BGEND

jQuery(function( $ ){
    $(window).scroll(function() {
        var yPos = ( $(window).scrollTop() );

        if(yPos > window.innerHeight * 16) { // Show element after this amount of scrolled down pixels

			$(".bgend").fadeIn();
		} else {
			$(".bgend").fadeOut();
		}
	});
});

jQuery(function( $ ){
    $(window).scroll(function() {
        var yPos = ( $(window).scrollTop() );

        if(yPos > window.innerHeight * 17) { // Show element after this amount of scrolled down pixels

			$(".logo").fadeIn();
		} else {
			$(".logo").fadeOut();
		}
	});
});
