window.onload = function() {
	lax.setup() // init

	const updateLax = () => {
		lax.update(window.scrollY)
		window.requestAnimationFrame(updateLax)
	}

	window.requestAnimationFrame(updateLax)
}

// let moveanim_s= anime({
//   targets: '.s',
//   rotate: 360,
//   duration: 10000,
//   easing: 'linear',
//   loop: true
// });
//
// let moveanim_m = anime({
//   targets: '.m',
//   rotate: 360,
//   duration: 20000,
//   easing: 'linear',
//   loop: true
// });
//
// let moveanim_l = anime({
//   targets: '.l',
//   rotate: 360,
//   duration: 30000,
//   easing: 'linear',
//   loop: true
// });
