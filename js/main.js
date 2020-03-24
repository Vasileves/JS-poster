window.onload = function() {
	lax.setup() // init

	const updateLax = () => {
		lax.update(window.scrollY)
		window.requestAnimationFrame(updateLax)
	}

	window.requestAnimationFrame(updateLax)
}



var upd = 1

var scroll = function () {
	if (window.scrollY < window.innerHeight * 3) {
		if (upd != 1) {
			document.getElementById('stext').innerHTML=('<svg class="badtxt s" width="428" height="428" viewBox="0 0 428 428" fill="none" xmlns="http://www.w3.org/2000/svg"> <path id="st0" d="M0,214a214,214 0 1,0 428,0a214,214 0 1,0 -428,0"/><text class ="stxt1" width="500" fill="#fff"><textPath alignment-baseline="top" xlink:href="#st0" fill="white">ВСЁ ПЛОХО ВСЁ ПЛОХО ВСЁ ПЛОХО ВСЁ ПЛОХО</textPath></svg>')
			upd = 1
		}
	}

	else  if (window.scrollY > window.innerHeight * 3 && window.scrollY < window.innerHeight * 10)  {
		if (upd != 2) {
					document.getElementById('stext').innerHTML=('<svg class="badtxt s" width="428" height="428" viewBox="0 0 428 428" fill="none" xmlns="http://www.w3.org/2000/svg"> <path id="st0" d="M0,214a214,214 0 1,0 428,0a214,214 0 1,0 -428,0"/><text class ="stxt2" width="500" fill="#fff"><textPath alignment-baseline="top" xlink:href="#st0" fill="white">ВСЁ НЕ ТАК ПЛОХО ВСЁ НЕ ТАК ПЛОХО</textPath></svg>')
				upd = 2
			}
		}

		else  if (window.scrollY > window.innerHeight * 10 && window.scrollY < window.innerHeight * 20)  {
			if (upd != 3) {
					document.getElementById('stext').innerHTML=('<svg class="badtxt s" width="428" height="428" viewBox="0 0 428 428" fill="none" xmlns="http://www.w3.org/2000/svg"> <path id="st0" d="M0,214a214,214 0 1,0 428,0a214,214 0 1,0 -428,0"/><text class ="stxt3" width="500" fill="#fff"><textPath alignment-baseline="top" xlink:href="#st0" fill="white">УЖЕ ЛУЧШЕ УЖЕ ЛУЧШЕ УЖЕ ЛУЧШЕ</textPath></svg>')
					upd = 3
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
