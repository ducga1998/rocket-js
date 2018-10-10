
(() =>  {
	var frameTime = 0;
	var frameRate = 60;
	var canvas = document.getElementById('canvasId');
	var wHeight = window.innerHeight;
	var mouseX = window.innerWidth / 2;
	var ctx = canvas.getContext('2d');
	var rocketAnim = new Tween(5000, 200, 0, 'easeOutElastic');
	var smokeAnim = new Tween(7000, 0, -canvas.height * 2, 'easeOutExpo');
	var cloudAnim = new Tween(3000, 0, 1, 'linear');
	var btn = document.getElementsByClassName('go');
	var rocket  = document.getElementById('rocket')

	var dragging = false
	document.body.addEventListener('mousedown' ,event => {
		console.log("ahihi")
		 dragging = true
	})
	
	document.body.addEventListener('mousemove' ,  (e) => {
		// console.log(e.pageX , e.pageY)
	if(dragging){
		// console.log(e.pageX , e.pageY) 
		mouseX = canvas.width / 4  + e.pageX
		// console.log(mouseX)
	}
	})
	document.body.addEventListener('mouseup' , event => {
		dragging = false
	})
	canvas.width = window.innerWidth - 40;
	canvas.height = wHeight * 1;
	// welcome[0].style.height = wHeight * 0.45 - 60 + 'px';
	var rocketY = canvas.height - 600;
	console.log(rocketY)
	var cloud = new Emitter(canvas, canvas.width / 2, canvas.height - 20, {
		"size": 1,
		"count": 1,
		"rate": 10000,
		"speed": 2,
		"fade": 2, // vecticole small animate
		"angle": -90, // goc tha 
		"spread": 100000,  // lan tran 
		"bounceX": 100,
		"bounceY": -0.8,
		"windAngle": 120,
		"windSpeed": 0.1,
		invert: 0
	}).stop();
	var smoke = new Emitter(canvas, canvas.width / 2, canvas.height - 180, {
		"size": 120,
		"count": 2,
		"rate": 30,
		"speed": 6,
		"fade": 7,
		"angle": 90 ,
		"spread": 15,
		"bounceX": 1,
		"bounceY": 2,
		"windAngle": 180,
		"windSpeed": 0.1,
		invert: 0
	}).stop();
	window.cloud = cloud	

	new Sequence({
		init: function init() {
			(function draw(time) {
				var cloudTween = cloudAnim.tween;
				ctx.clearRect(0, 0, canvas.width, canvas.height);
				smoke.y = 0
				
				smoke.x = smoke.x * 0.99 + mouseX * 0.01;
				cloud.x = cloud.x * 0.99 + mouseX * 0.01;
				cloud.y = 100
				cloud.prop({
					size: 60 + cloudTween * 250,
					speed: 4 + cloudTween * 4,
					rate: 70 + cloudTween * 70
				});
				cloud.loop();
				// smoke.loop();
				var tilt = (mouseX - smoke.x) / canvas.width * 45;
					rocket.style.top = smoke.y  + 'px';
					rocket.style.left = smoke.x + 20 + 'px';
				rocket.style.transform = "translate3d(-50%,-75%,0) rotate3d(0,0,1," + tilt + "deg)";
				if (frameTime) frameRate = frameRate * 0.99 + 1000 / (time - frameTime) * 0.01;
				frameTime = time;
				requestAnimationFrame(draw);
			})(300);
		},
		100: function _() {
			return canvas.classList.add('show');
		},
		105: function _() {
			return rocket.classList.add('show');
		},
		110: cloud.start,
		200: smoke.start,
		190: rocketAnim.start,
		// 800: function _() {
		// 	logo[0].classList.add('in');
		// 	title[0].classList.add('in');
		// },
		// 950: function _() {
		// 	slogan[0].classList.add('in');
		// },
		// 1100: function _() {
		// 	btn[0].classList.add('in');
		// 	footer[0].classList.add('in');
		// }
	});
	var launched = false;
	window.rocketFly = function(e) {
		if (launched) return;
		launched = true;
		new Sequence({
			// init: function init() {
			// 	smoke.prop({
			// 		size: 250,
			// 		spread: 45,
			// 		count: 8,
			// 		speed: 7
			// 	});
			// },
			// 900: function _() {
			// 	return cloud.prop({
			// 		windSpeed: 0.4,
			// 		bounceY: -0.1
			// 	});
			// },
			// 1000: function _() {
			// 	smoke.prop({
			// 		size: 100,
			// 		rate: 20,
			// 		spread: 8,
			// 		speed: 5,
			// 		count: 5
			// 	});
			// 	cloud.prop({
			// 		windSpeed: 0.05,
			// 		bounceY: -0.6,
			// 		fade: 5
			// 	});
			// },
			1010: smokeAnim.start,
			1060: cloudAnim.start,
			1100: function _() {
				return cloud.prop({
					spread: 180,
					fade: 1
				});
			},
			3000: function _() {
				welcome[0].classList.add('rocket-fade');
			},
			4000: function _() {
				return canvas.classList.add('rocket-fade');
			},
			4200: function _() {
				footer[0].classList.add( 'rocket-fade' );
			},
			5000: smoke.stop,
			5600: function _() {
				window.location = "http://nitro.woorockets.com";
			}
		});
	};
	window.onresize = function(e) {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight * 0.55;
		cloud.y = canvas.height - 20;
		rocketY = canvas.height - 180;
		mouseX = canvas.width / 4 + canvas.width / 2;

	};
	
})();
