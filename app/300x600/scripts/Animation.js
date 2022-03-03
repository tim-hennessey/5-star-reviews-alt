var app = app || {};


app.Animation = (function () {

	var banner = document.getElementById('banner');
	var elipse2 = document.getElementById('elipse2');
	var elipse1 = document.getElementById('elipse1');
	var box = document.getElementById('box');
	var product = document.getElementById('product');
	var shadow = document.getElementById('shadow');
	var txt = document.getElementById('txt');
	var cta = document.getElementById('cta');
	var t = TweenMax;
	var tl = new TimelineMax();


	// --------------------------------------------------------------------------------------
	// set default properties
	function initialize() {
		// DO NOT EDIT: reveals banner once loaded

		t.to(banner, .25, { autoAlpha: 1});
		t.set("#container", {perspective: 600});
		CustomBounce.create("myBounce", {strength:0.25, squash:0});

		t.set(box, {y:"-=500"});
		t.set(product, {y:"-=500"});
		t.set(shadow, {scale:0});
		t.set(cta, {scale:0});
	}

	// --------------------------------------------------------------------------------------
	// Starts the animation
	function start() {
		var total = 15;
        var container = document.getElementById("container"), w = window.innerWidth, h = window.innerHeight;

        for (var i = 0; i < total; i++) {
            var Div = document.createElement('div');
            t.set(Div, {
                attr: {class: 'dot'},
                x: R(75, 200),
                y: 300,
                opacity: R(.75, .9)
            });
            container.appendChild(Div);
            animm(Div);
        }

        function animm(elm) {
            t.to(elm, R(2.5, 3), {y:-10, autoAlpha:0, ease: Linear.easeNone, repeat: -1, delay:-15});
            t.to(elm, R(2, 3), {x: '+=30', repeat: -1, yoyo: true, ease: Sine.easeInOut});

            t.to(container, .5, { autoAlpha: 0, delay: 4, onComplete: animPlay});
            t.to(post, .5, { autoAlpha: 0, delay: 4.25});
        }

        function R(min, max) {
            return min + Math.random() * (max - min)
        }

        function animPlay() {
        	tl.to(elipse2,.15, {y: "+=10", ease: Sine.easeOut})
        	.to(elipse2,.35, {y: "-=500", ease: Sine.easeIn})
        	.to(elipse1,.15, {y: "-=10", ease: Sine.easeOut}, "-=.35")
        	.to(elipse1,.15, {y: "+=10", ease: Sine.easeIn}, "-=.15")

        	.to(box,.75, {y: "+=500", ease: "myBounce"}, "-=.15")
        	.to(shadow,.75, {scale:1, opacity:1, ease: "myBounce"}, "-=.75")
        	.to(product,.75, {y: "+=500", ease: "myBounce"}, "-=.7")
        	.to(txt,.1, {opacity:1}, "-=.25")
        	.to(cta,.7, {opacity:1, scale:1, ease:Elastic.easeOut.config(.5,.25)});
        }
	}

	// --------------------------------------------------------------------------------------
	// Stops the animation
	function stop() {
		console.log("stopping animation");
	}

	// --------------------------------------------------------------------------------------
	// Publicly accessible methods and properties
	return {
		initialize:initialize,
		start:start,
		stop:stop
	}

})();
