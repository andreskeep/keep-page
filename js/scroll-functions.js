
const wrapper =  $('.wrapper');
var icons = $('.servicio');
console.log(icons);

$('#arrow-down').on('click', function(){
	let wrapperPosition = $('.wrapper').offset().top;
		wrapper.animate({
			top : '-100vh',
		}, 1000);
    icons.each(function(i){
        setTimeout(function(){
            $('.servicio').eq(i).addClass('show-servicio');
        }, 700 *( i + 1));
    });
});


$('body')[0].addEventListener('wheel', findScrollDirectionOtherBrowsers);


function findScrollDirectionOtherBrowsers(event){
    var delta;
    let wrapperPosition = $('.wrapper').offset().top;
    if (event.wheelDelta){
            delta = event.wheelDelta;
    }else{
            delta = -1 * event.deltaY;
    }

    if (delta < 0 && $('#logo').hasClass('logo-principal-hidden')){
    	let wrapperPosition = $('.wrapper').offset().top;
    	let height = $(window).height();
    	console.log('La posición del wrapper es: ' + wrapperPosition);
    	console.log('La El alto de la pantalla es: ' + height);
    	if( wrapperPosition < height){
	    	wrapper.animate({
				top : '-100vh',
			}, 1000);
    	}

        icons.each(function(i){
            setTimeout(function(){
                $('.servicio').eq(i).addClass('show-servicio');
                console.log('elemento ' + i);
            }, 500 *( i + 1));
        });

        console.log("DOWN");

    } else if (delta > 0 && $('#logo').hasClass('logo-principal-hidden')){
    	let wrapperPosition = $('.wrapper').offset().top;
    	let height = $(window).height();
    	console.log('La posición del wrapper es: ' + wrapperPosition);
    	console.log('La El alto de la pantalla es: ' + height);
    	console.log((height*-1))
    	if( wrapperPosition < height && wrapperPosition >= (height*-1)){
	    	wrapper.animate({
				top : '0vh',
			}, 1000);
    	}
        console.log("UP");
    }
}
