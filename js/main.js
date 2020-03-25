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
	if (window.scrollY < window.innerHeight * 5) {
		if (upd != 1) {
      //s
			document.getElementById('stext').innerHTML=('<svg class="badtxt cfix" width="428" height="428" viewBox="0 0 428 428" fill="none" xmlns="http://www.w3.org/2000/svg"> <path id="st0" d="M0,214a214,214 0 1,0 428,0a214,214 0 1,0 -428,0"/><text class ="stxt1" width="500" fill="#fff"><textPath alignment-baseline="top" xlink:href="#st0" fill="white">ВСЁ ПЛОХО ВСЁ ПЛОХО ВСЁ ПЛОХО</textPath></svg>')
      //m
      document.getElementById('mtext').innerHTML=('<svg class="badtxt cfix" width="620" height="620" viewBox="0 0 620 620" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="st1" d="M0,310a310,310 0 1,0 620,0a310,310 0 1,0 -620,0"/><text class ="mtxt1" width="500" fill="#fff"><textPath alignment-baseline="top" xlink:href="#st1" fill="white">ВСЁ ПЛОХО ВСЁ ПЛОХО ВСЁ ПЛОХО ВСЁ ПЛОХО ВСЁ ПЛОХО</textPath></svg>')
      //l
      document.getElementById('ltext').innerHTML=('<svg class="badtxt cfix" width="788" height="788" viewBox="0 0 788 788" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="st2" d="M0,394a394,394 0 1,0 788,0a394,394 0 1,0 -788,0"/><text class ="ltxt1" width="500" fill="#fff"><textPath alignment-baseline="top" xlink:href="#st2" fill="white">ВСЁ ПЛОХО ВСЁ ПЛОХО ВСЁ ПЛОХО ВСЁ ПЛОХО  ВСЁ ПЛОХО ВСЁ ПЛОХО  ВСЁ ПЛОХО ВСЁ ПЛОХО  ВСЁ ПЛОХО</textPath></svg>')
      upd = 1
		}
	}

	else  if (window.scrollY > window.innerHeight * 5 && window.scrollY < window.innerHeight * 10)  {
		if (upd != 2) {
        //s
				document.getElementById('stext').innerHTML=('<svg class="badtxt cfix" width="428" height="428" viewBox="0 0 428 428" fill="none" xmlns="http://www.w3.org/2000/svg"> <path id="st0" d="M0,214a214,214 0 1,0 428,0a214,214 0 1,0 -428,0"/><text class ="stxt2" width="500" fill="#fff"><textPath alignment-baseline="top" xlink:href="#st0" fill="white">ВСЁ НЕ ТАК ПЛОХО ВСЁ НЕ ТАК ПЛОХО</textPath></svg>')
        //m
        document.getElementById('mtext').innerHTML=('<svg class="badtxt cfix" width="620" height="620" viewBox="0 0 620 620" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="st1" d="M0,310a310,310 0 1,0 620,0a310,310 0 1,0 -620,0"/><text class ="mtxt2" width="500" fill="#fff"><textPath alignment-baseline="top" xlink:href="#st1" fill="white">ВСЁ НЕ ТАК ПЛОХО ВСЁ НЕ ТАК ПЛОХО</textPath></svg>')
        //l
        document.getElementById('ltext').innerHTML=('<svg class="badtxt cfix" width="788" height="788" viewBox="0 0 788 788" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="st2" d="M0,394a394,394 0 1,0 788,0a394,394 0 1,0 -788,0"/><text class ="ltxt2" width="500" fill="#fff"><textPath alignment-baseline="top" xlink:href="#st2" fill="white">ВСЁ НЕ ТАК ПЛОХО ВСЁ НЕ ТАК ПЛОХО</textPath></svg>')
        upd = 2
			}
		}

		else  if (window.scrollY > window.innerHeight * 10 && window.scrollY < window.innerHeight * 15)  {
			if (upd != 3) {
          //s
					document.getElementById('stext').innerHTML=('<svg class="badtxt cfix" width="428" height="428" viewBox="0 0 428 428" fill="none" xmlns="http://www.w3.org/2000/svg"> <path id="st0" d="M0,214a214,214 0 1,0 428,0a214,214 0 1,0 -428,0"/><text class ="stxt3" width="500" fill="#fff"><textPath alignment-baseline="top" xlink:href="#st0" fill="white">УЖЕ ЛУЧШЕ УЖЕ ЛУЧШЕ УЖЕ ЛУЧШЕ</textPath></svg>')
          //m
          document.getElementById('mtext').innerHTML=('<svg class="badtxt cfix" width="620" height="620" viewBox="0 0 620 620" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="st1" d="M0,310a310,310 0 1,0 620,0a310,310 0 1,0 -620,0"/><text class ="mtxt3" width="500" fill="#fff"><textPath alignment-baseline="top" xlink:href="#st1" fill="white">УЖЕ ЛУЧШЕ УЖЕ ЛУЧШЕ УЖЕ ЛУЧШЕ</textPath></svg>')
          //l
          document.getElementById('ltext').innerHTML=('<svg class="badtxt cfix" width="788" height="788" viewBox="0 0 788 788" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="st2" d="M0,394a394,394 0 1,0 788,0a394,394 0 1,0 -788,0"/><text class ="ltxt3" width="500" fill="#fff"><textPath alignment-baseline="top" xlink:href="#st2" fill="white">УЖЕ ЛУЧШЕ УЖЕ ЛУЧШЕ УЖЕ ЛУЧШЕ</textPath></svg>')
          upd = 3
				}
		}
    else  if (window.scrollY > window.innerHeight * 15 && window.scrollY < window.innerHeight * 20)  {
      if (upd !=4) {
          //s
          document.getElementById('stext').innerHTML=('<svg class="badtxt cfix" width="428" height="428" viewBox="0 0 428 428" fill="none" xmlns="http://www.w3.org/2000/svg"> <path id="st0" d="M0,214a214,214 0 1,0 428,0a214,214 0 1,0 -428,0"/><text class ="stxt4" width="500" fill="#fff"><textPath alignment-baseline="top" xlink:href="#st0" fill="white">ПРЕКРАСНО ПРЕКРАСНО</textPath></svg>')
          //m
          document.getElementById('mtext').innerHTML=('<svg class="badtxt cfix" width="620" height="620" viewBox="0 0 620 620" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="st1" d="M0,310a310,310 0 1,0 620,0a310,310 0 1,0 -620,0"/><text class ="mtxt4" width="500" fill="#fff"><textPath alignment-baseline="top" xlink:href="#st1" fill="white">ПРЕКРАСНО ПРЕКРАСНО ПРЕКРАСНО</textPath></svg>')
          //l
          document.getElementById('ltext').innerHTML=('<svg class="badtxt cfix" width="788" height="788" viewBox="0 0 788 788" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="st2" d="M0,394a394,394 0 1,0 788,0a394,394 0 1,0 -788,0"/><text class ="ltxt4" width="500" fill="#fff"><textPath alignment-baseline="top" xlink:href="#st2" fill="white">ПРЕКРАСНО ПРЕКРАСНО ПРЕКРАСНО</textPath></svg>')
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
