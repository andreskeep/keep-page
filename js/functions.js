
let logo = $('#logo')
const entrar = $('#entrar')
const volver = $('#volver')
const acercaInfo = $('#container-titulo')
const botonContact = $('#contact')
const closeContact = $('#close-contact')
const modalContact = $('.modal-contact')
const navIcon = $('#nav-icon')
const menuNav = $('#menu-nav')
const overlay = $('#overlay-menu')
const overlay2 = $('.overlay-dos')
const overlay3 = $('.overlay-tres')
const main = $('#main')
const logoSecundary = $('.logo-secundary')
const about = $('#about')
const menuItem = $('.menu-item')

/*$(window).mousemove(function(e) {
	let size = $(this).width()
	let halfSize= size/2
	let x = e.pageX
	let y = e.pageY
  	let msg = x + ", " + y;
 	console.log(msg)

});*/

/* Animación boton página web*/
navIcon.on('click', function(){
	$(this).toggleClass('open')
	overlay.toggleClass('active-menu')
	overlay2.toggleClass('active-menu')
	overlay3.toggleClass('active-menu')
	setTimeout(function(){
		menuNav.toggleClass('active-menu-text')
	}, 500);
});

$('#menu-item-1').on('click', function(e){
	overlay.toggleClass('active-menu');
	overlay2.toggleClass('active-menu');
	overlay3.toggleClass('active-menu');
	navIcon.removeClass('open');
	setTimeout(function(){
		menuNav.removeClass('active-menu-text')
	}, 500);
	e.preventDefault();
	if($('#logo').hasClass('logo-principal-hidden') && $('#main').hasClass('main-active')){

		$('#logo').removeClass('logo-principal-hidden');
		

		$('.wrapper').animate({
				top : '0vh',
		}, 1000);
		
		logoSecundary.animate({
		top: '-100px',
		});
		

		$('.content').css({
			backgroundColor : '#1b1b1b',
		});

		$('#logo').animate({
			top: '50%',
		}, 2000);

		$('#foot').animate({
			bottom: '0px',
		}, 1000);

		$('.izq-matas').animate({
			left : '0px',
		}, 1600);

		$('.der-matas').animate({
			right : '0px',
		}, 1500);

	 	$('.lianas').animate({
			top: '0px',
		}, 2000);

		$('.astronauta').animate({
			top : '30%',
		}, 1500);

		setTimeout(function(){
			main.removeClass('main-active');
		}, 500)

		about.removeClass('active-about');

	} else if ( $('#logo').hasClass('logo-principal-hidden') && $('#portfolio-section').hasClass('portfolio-show') ){
		
		$('#logo').removeClass('logo-principal-hidden');
		e.preventDefault();

		$('.wrapper').animate({
			top : '0vh',
		}, 1000);

		$('#portfolio-section').removeClass('portfolio-show');
		
		logoSecundary.animate({
		top: '-100px',
		});

		$('#logo').animate({
			top: '50%',
		}, 2000);

		$('#foot').animate({
			bottom: '0px',
		}, 1000);

		$('.izq-matas').animate({
			left : '0px',
		}, 1600);

		$('.der-matas').animate({
			right : '0px',
		}, 1500);

	 	$('.lianas').animate({
			top: '0px',
		}, 2000);

		$('.astronauta').animate({
			top : '30%',
		}, 1500);
		
	} else{

	}
});

$('#menu-item-2').on('click', function(){
	overlay.toggleClass('active-menu');
	overlay2.toggleClass('active-menu');
	overlay3.toggleClass('active-menu');
	navIcon.removeClass('open');
	setTimeout(function(){
		menuNav.removeClass('active-menu-text')
	}, 500);
	if($('#logo').hasClass('logo-principal-hidden') && $('#main').hasClass('main-active')){

	} else if( $('#logo').hasClass('logo-principal-hidden') && $('#portfolio-section').hasClass('portfolio-show') && $('#main').not('main-active')){

		setTimeout(function(){
			$('#portfolio-section').removeClass('portfolio-show');
		}, 500);

		setTimeout(function(){
		main.addClass('main-active');
		}, 500);

		about.addClass('active-about');

	}else{

		$('#logo').addClass('logo-principal-hidden');

		$('.wrapper').animate({
				top : '0vh',
			}, 1000);

		$('.content').css({
			backgroundColor : '#1b1b1b',
		});

		$('#logo').animate({
			top: '-=100%',
		}, 2000);

		$('#foot').animate({
			bottom: '-=300px',
		}, 1000);

		$('.izq-matas').animate({
			left : '-=500px',
		}, 1600);

		$('.der-matas').animate({
			right : '-=500px',
		}, 1500);

	 	$('.lianas').animate({
			top: '-=200px',
		}, 2000);

		$('.astronauta').animate({
			top : '+=100%',
		}, 1500);

		setTimeout(function(){
			main.addClass('main-active');
		}, 800);

		setTimeout(function(){
				logoSecundary.animate({
					top: '+=150px',
				})
		}, 1000)

		about.addClass('active-about');
	}
});


$('#menu-item-3').on('click',function(){
	overlay.toggleClass('active-menu');
	overlay2.toggleClass('active-menu');
	overlay3.toggleClass('active-menu');
	navIcon.removeClass('open');
	setTimeout(function(){
		menuNav.removeClass('active-menu-text')
	}, 500);
	if( ($('#logo').hasClass('logo-principal-hidden')) == false && ($('#portfolio-section').not('portfolio-show')) && ($('#main').not('main-active'))  ){
		
		$('#logo').addClass('logo-principal-hidden');
		$('.wrapper').animate({
				top : '0vh',
			}, 1000);

		$('.content').css({
			backgroundColor : '#1b1b1b',
		});

		$('#logo').animate({
			top: '-=100%',
		}, 2000);

		$('#foot').animate({
			bottom: '-=300px',
		}, 1000);

		$('.izq-matas').animate({
			left : '-=500px',
		}, 1600);

		$('.der-matas').animate({
			right : '-=500px',
		}, 1500);

	 	$('.lianas').animate({
			top: '-=200px',
		}, 2000);

		$('.astronauta').animate({
			top : '+=100%',
		}, 1500);

		setTimeout(function(){
				logoSecundary.animate({
					top: '+=150px',
				})
		}, 1000);

		setTimeout(function(){
			main.removeClass('main-active');
		}, 500)

		about.removeClass('active-about');
		
		setTimeout(function(){
			$('#portfolio-section').addClass('portfolio-show');
		}, 500);




	}else if( $('#logo').hasClass('logo-principal-hidden') && $('#portfolio-section').not('portfolio-show') ) {
		$('#logo').addClass('logo-principal-hidden');

		$('.wrapper').animate({
				top : '0vh',
			}, 1000);

		$('#logo').animate({
			top: '-=100%',
		}, 2000);

		$('#foot').animate({
			bottom: '-=300px',
		}, 1000);

		$('.izq-matas').animate({
			left : '-=500px',
		}, 1600);

		$('.der-matas').animate({
			right : '-=500px',
		}, 1500);

	 	$('.lianas').animate({
			top: '-=200px',
		}, 2000);

		$('.astronauta').animate({
			top : '+=100%',
		}, 1500);

		setTimeout(function(){
			main.removeClass('main-active');
		}, 500)

		about.removeClass('active-about');

		setTimeout(function(){
		$('#portfolio-section').addClass('portfolio-show');
		}, 600);
	}else{

	}
});

$('#menu-item-4').on('click', function(){
	overlay.toggleClass('active-menu');
	overlay2.toggleClass('active-menu');
	overlay3.toggleClass('active-menu');
	navIcon.removeClass('open');
	setTimeout(function(){
		menuNav.removeClass('active-menu-text')
	}, 500);
	setTimeout(function(){
		modalContact.toggleClass('contact-show');
	},700);
});


entrar.click(function(){

	$('#logo').addClass('logo-principal-hidden');

	$('.wrapper').animate({
			top : '0vh',
		}, 1000);

	$('.content').css({
		backgroundColor : '#1b1b1b',
	});

	$('#logo').animate({
		top: '-=100%',
	}, 2000);

	$('#foot').animate({
		bottom: '-=300px',
	}, 1000);

	$('.izq-matas').animate({
		left : '-=500px',
	}, 1600);

	$('.der-matas').animate({
		right : '-=500px',
	}, 1500);

 	$('.lianas').animate({
		top: '-=200px',
	}, 2000);

	$('.astronauta').animate({
		top : '+=100%',
	}, 1500);

	setTimeout(function(){
		main.addClass('main-active');
	}, 800);

	setTimeout(function(){
			logoSecundary.animate({
				top: '+=150px',
			})
	}, 1000)

	about.addClass('active-about');

});

logoSecundary.on('click', function(e){

	$('#logo').removeClass('logo-principal-hidden');
	e.preventDefault();

	$('.wrapper').animate({
			top : '0vh',
	}, 1000);

	$('#portfolio-section').removeClass('portfolio-show');
	
	logoSecundary.animate({
	top: '-100px',
	});
	

	$('.content').css({
		backgroundColor : '#1b1b1b',
	});

	$('#logo').animate({
			top: '50%',
		}, 2000);

		$('#foot').animate({
			bottom: '0px',
		}, 1000);

		$('.izq-matas').animate({
			left : '0px',
		}, 1600);

		$('.der-matas').animate({
			right : '0px',
		}, 1500);

	 	$('.lianas').animate({
			top: '0px',
		}, 2000);

		$('.astronauta').animate({
			top : '30%',
		}, 1500);

	setTimeout(function(){
		main.removeClass('main-active');
	}, 500)

	about.removeClass('active-about');

});


volver.click(function(){
	content.slideToggle()
	acercaInfo.fadeOut()
	
})

$('.service-title').on('click',function(){
	$(this).next().toggleClass('show-text');
});

$('#portafolio').on('click', function(){
	$('#logo').addClass('logo-principal-hidden');
	$('.wrapper').animate({
			top : '0vh',
		}, 1000);

	$('.content').css({
		backgroundColor : '#1b1b1b',
	});

	$('#logo').animate({
		top: '-=100%',
	}, 2000);

	$('#foot').animate({
		bottom: '-=300px',
	}, 1000);

	$('.izq-matas').animate({
		left : '-=500px',
	}, 1600);

	$('.der-matas').animate({
		right : '-=500px',
	}, 1500);

 	$('.lianas').animate({
		top: '-=200px',
	}, 2000);

	$('.astronauta').animate({
		top : '+=100%',
	}, 1500);

	setTimeout(function(){
			logoSecundary.animate({
				top: '+=150px',
			})
	}, 1000)
	
	setTimeout(function(){
		$('#portfolio-section').addClass('portfolio-show');
	}, 500);

});

botonContact.click(function(){
	modalContact.toggleClass('contact-show');
})

closeContact.click(function(){
	modalContact.removeClass('contact-show');
})





