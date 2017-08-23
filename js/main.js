$(function () {
	$('.portfolio__works').isotope({
		layoutMode: 'masonry',
		itemSelector: '.portfolio__work',
		masonryHorizontal: {
			rowHeight: 342
		}
	});

	var $container = $('.portfolio__wrapper');

	$('.portfolio__filter').click(function () {
		var $this = $(this);

		if ( !$this.hasClass('is-checked') ) {
			$this.parents('.portfolio__wrapper').find('.is-checked').removeClass('is-checked');
			$this.addClass('is-checked');
		}
		var selector = $this.attr('data-filter');
		$container.isotope({  itemSelector: '.portfolio__work', filter: selector });
		return false;
	});

	$('.is-checked').click();


	$('.slider').slick({
		autoplay: true,
		autoplaySpeed: 4000,
		dots: true,
		arrows: false
	});

	$(".main-header").on("click","a", function (event) {
		event.preventDefault();

		var id  = $(this).attr('href'),
		top = $(id).offset().top;

		$('body,html').animate({scrollTop: top}, 1500);
	});
	$(".feedback__content").on("click", "a", function (e) {
		e.preventDefault();

		var id = $(this).attr('href'),
		top = $(id).offset().top;

		$('body,html').animate({scrollTop: top}, 500);
	})

});

var map;
function initMap() {
	var center = {lat: 49.568598, lng: 34.5853338};

	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 49.568777, lng: 34.584936},
		zoom: 16,
		disableDefaultUI: true
	});
	var marker = new google.maps.Marker({
		position: center,
		map: map,
		icon: {
			url: "img/map-mark.png"
		},
		animation: google.maps.Animation.BOUNCE
	});
}