$(document).ready(function() {
	$('.firstsceen').slick({
		dots: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 6000,
		infinite: true
	});
	$('.news').slick({
		dots: true,
		arrows: true,
		appendArrows: '.section_home-news',
		autoplay: true,
		autoplaySpeed: 6000,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive:[
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		}, {
			breakpoint: 768,
			settings: {
				arrows: false,
				slidesToShow: 1,
				slidesToScroll:1
			}
		}]
	});
	$('.players').slick({
		dots: true,
		arrows: true,
		appendArrows: '.section_home-players',
		autoplay: true,
		autoplaySpeed: 6000,
		speed: 750,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive:[
		{
			breakpoint: 1495,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3
			}
		}, {
			breakpoint: 1024,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		}, {
			breakpoint: 768,
			settings: {
				arrows: false,
				slidesToShow: 1,
				slidesToScroll:1
			}
		}]
	});
});