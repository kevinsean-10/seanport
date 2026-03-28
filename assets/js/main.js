/*
	Landed by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function ($) {

	var $window = $(window),
		$body = $('body');

	// Breakpoints.
	breakpoints({
		xlarge: ['1281px', '1680px'],
		large: ['981px', '1280px'],
		medium: ['737px', '980px'],
		small: ['481px', '736px'],
		xsmall: [null, '480px']
	});

	// Play initial animations on page load.
	$window.on('load', function () {
		window.setTimeout(function () {
			$body.removeClass('is-preload');
		}, 100);
	});

	// Touch mode.
	if (browser.mobile)
		$body.addClass('is-touch');

	// Scrolly links.
	$('.scrolly').scrolly({
		speed: 2000
	});

	// Dropdowns.
	$('#nav > ul').dropotron({
		alignment: 'right',
		hideDelay: 350
	});

	// Nav.

	// Title Bar.
	// $(
	// 	'<div id="titleBar">' +
	// 		'<a href="#navPanel" class="toggle"></a>' +
	// 		'<span class="title">' + $('#logo').html() + '</span>' +
	// 	'</div>'
	// )
	// 	.appendTo($body);

	// Panel.
	$(
		'<div id="navPanel">' +
		'<nav>' +
		$('#nav').navList() +
		'</nav>' +
		'</div>'
	)
		.appendTo($body)
		.panel({
			delay: 500,
			hideOnClick: true,
			hideOnSwipe: true,
			resetScroll: true,
			resetForms: true,
			side: 'left',
			target: $body,
			visibleClass: 'navPanel-visible'
		});

	// Parallax.
	// Disabled on IE (choppy scrolling) and mobile platforms (poor performance).
	if (browser.name == 'ie'
		|| browser.mobile) {

		$.fn._parallax = function () {

			return $(this);

		};

	}
	else {

		$.fn._parallax = function () {

			$(this).each(function () {

				var $this = $(this),
					on, off;

				on = function () {

					$this
						.css('background-position', 'center 0px');

					$window[0].addEventListener('scroll', function () {
						var pos = parseInt($window.scrollTop()) - parseInt($this.position().top);
						$this.css('background-position', 'center ' + (pos * -0.15) + 'px');
					}, { passive: true });

				};

				off = function () {

					$this
						.css('background-position', '');

					$window
						.off('scroll._parallax');

				};

				breakpoints.on('<=medium', off);
				breakpoints.on('>medium', on);

			});

			return $(this);

		};

		$window
			.on('load resize', function () {
				$window.trigger('scroll');
			});

	}

	// Spotlights.
	var $spotlights = $('.spotlight');

	$spotlights
		._parallax()
		.each(function () {

			var $this = $(this),
				on, off;

			on = function () {

				var top, bottom, mode;

				// Use main <img>'s src as this spotlight's background.
				$this.css('background-image', 'url("' + $this.find('.image.main > img').attr('src') + '")');

				// Side-specific scrollex tweaks.
				if ($this.hasClass('top')) {

					mode = 'top';
					top = '-20%';
					bottom = 0;

				}
				else if ($this.hasClass('bottom')) {

					mode = 'bottom-only';
					top = 0;
					bottom = '20%';

				}
				else {

					mode = 'middle';
					top = 0;
					bottom = 0;

				}

				// Add scrollex.
				$this.scrollex({
					mode: mode,
					top: top,
					bottom: bottom,
					initialize: function (t) { $this.addClass('inactive'); },
					terminate: function (t) { $this.removeClass('inactive'); },
					enter: function (t) { $this.removeClass('inactive'); },

					// Uncomment the line below to "rewind" when this spotlight scrolls out of view.

					//leave:	function(t) { $this.addClass('inactive'); },

				});

			};

			off = function () {

				// Clear spotlight's background.
				$this.css('background-image', '');

				// Remove scrollex.
				$this.unscrollex();

			};

			breakpoints.on('<=medium', off);
			breakpoints.on('>medium', on);

		});

	// Wrappers.
	var $wrappers = $('.wrapper');

	$wrappers
		.each(function () {

			var $this = $(this),
				on, off;

			on = function () {

				$this.scrollex({
					top: 250,
					bottom: 0,
					initialize: function (t) { $this.addClass('inactive'); },
					terminate: function (t) { $this.removeClass('inactive'); },
					enter: function (t) { $this.removeClass('inactive'); },

					// Uncomment the line below to "rewind" when this wrapper scrolls out of view.

					//leave:	function(t) { $this.addClass('inactive'); },

				});

			};

			off = function () {
				$this.unscrollex();
			};

			breakpoints.on('<=medium', off);
			breakpoints.on('>medium', on);

		});

	// Banner.
	var $banner = $('#banner');

	$banner
		._parallax();

	//btnMore
	// document.getElementById("btnMore").addEventListener("click", function(event) {
	// 	event.preventDefault(); // Prevents the default action of the link

	// 	// var container3 = document.getElementById("three");
	// 	// container3.style.height = "1100pt";

	// 	var divShow = document.getElementById("info2");
	// 	divShow.style.display="block";

	// 	var divShow = document.getElementById("info3");
	// 	divShow.style.display="block";

	// 	var showbtn = document.getElementById("btnMoreShow");
	// 	var hidebtn = document.getElementById("btnMore");

	// 	hidebtn.parentElement.parentElement.style.display = "none"; // Hide the current <ul>
	// 	showbtn.parentElement.parentElement.style.display = "block"; // Show the hidden <ul>
	// });
	// document.getElementById("btnMoreShow").addEventListener("click", function(event){
	// 	event.preventDefault();

	// 	// var container3 = document.getElementById("three");
	// 	// container3.style.height = "700pt";

	// 	var divShow = document.getElementById("info2");
	// 	divShow.style.display="none";

	// 	var divShow = document.getElementById("info3");
	// 	divShow.style.display="none";

	// 	var showbtn = document.getElementById("btnMoreShow");
	// 	var hidebtn = document.getElementById("btnMore");

	// 	hidebtn.parentElement.parentElement.style.display = "block"; // Hide the current <ul>
	// 	showbtn.parentElement.parentElement.style.display = "none"; // Show the hidden <ul>


	// 	var target = document.getElementById("three");
	// 	target.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the target element

	// });
	// document.addEventListener('DOMContentLoaded', function() {
	// 	document.querySelectorAll('.experience').forEach(function(experience) {
	// 		experience.addEventListener('mouseenter', function() {
	// 			const imageSrc = this.getAttribute('data-image');
	// 			document.getElementById('company-image').setAttribute('src', imageSrc);
	// 		});

	// 		experience.addEventListener('mouseleave', function() {
	// 			document.getElementById('company-image').setAttribute('src', 'images/pic04.jpg');
	// 		});
	// 	});
	// });

	document.addEventListener('DOMContentLoaded', () => {
		// Get the section element
		const spotlightSection = document.querySelector('#WX');
		const companyImage = spotlightSection.querySelector('#company-image');

		// Add click event listeners to all experience items
		document.querySelectorAll('.experience').forEach(experience => {
			experience.addEventListener('click', function () {
				// Get the data-image attribute value
				const newImageUrl = this.getAttribute('data-image');

				// Update the background-image of the section
				if (spotlightSection) {
					spotlightSection.style.backgroundImage = `url(${newImageUrl})`;
				}

				// Update the src of the company image
				if (companyImage) {
					companyImage.src = newImageUrl;
				}
			});
		});
	});

	document.addEventListener('DOMContentLoaded', () => {
		// Get the section element
		const spotlightSection = document.querySelector('#ED');
		const companyImage = spotlightSection.querySelector('#institute-image');

		// Add click event listeners to all experience items
		document.querySelectorAll('.education').forEach(experience => {
			experience.addEventListener('click', function () {
				// Get the data-image attribute value
				const newImageUrl = this.getAttribute('data-image');

				// Update the background-image of the section
				if (spotlightSection) {
					spotlightSection.style.backgroundImage = `url(${newImageUrl})`;
				}

				// Update the src of the company image
				if (companyImage) {
					companyImage.src = newImageUrl;
				}
			});
		});
	});


	// document.getElementById('company-image').src = 'images/sinarmasland.jpg';

	// document.getElementById('company-image').style.backgroundColor = 'rgba(255, 0, 0, 0.5)'; // Add a semi-transparent red background





})(jQuery);