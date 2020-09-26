

// navbar
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("myTopnav").style.top = "0";
    $(".topnav").addClass('scrolled');

  }
  if (prevScrollpos < currentScrollPos)
 {
    document.getElementById("myTopnav").style.top = "-10rem";
  }
  else{
   $(".topnav").removeClass('scrolled');
  }

  prevScrollpos = currentScrollPos;
}
var zeroScroll= window.pageYOffset;

window.onsccroll= function(){
  var currentScrollPos = window.pageYOffset;

  if(zeroScroll=currentScrollPos){
  $(".topnav").removeClass('scrolled');
}
}
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//to add scroll animations

ScrollReveal().reveal('.row',{duration:1000,easing: 'cubic-bezier(0.5, 0, 0, 1)',mobile:true,
    rotate:{
        x:20,
        y:20
    }
});

ScrollReveal().reveal('.banner-heading',{duration:1000,mobile:true,distance:'100px'});
ScrollReveal().reveal('.banner-img',{duration:1000,mobile:true,distance:'100px'});


// news-carousel
function createSlick(){

	$(".slider").not('.slick-initialized').slick({
		centerMode: true,
	    autoplay: true,
	    dots: true,

  		slidesToShow: 3,
	    responsive: [{
	        breakpoint: 768,
	        settings: {
	            dots: false,
	            arrows: false,
	            infinite: false,
	            slidesToShow: 1,
	            slidesToScroll: 1
	        }
	    }]
	});

}

createSlick();

//Will not throw error, even if called multiple times.
