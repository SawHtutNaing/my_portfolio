
AOS.init();

var items = document.querySelectorAll(".timeline li");

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function callbackFunc() {
  for (var i = 0; i < items.length; i++) {
    if (isElementInViewport(items[i])) {
      if(!items[i].classList.contains("in-view")){
        items[i].classList.add("in-view");
      }
    } else if(items[i].classList.contains("in-view")) {
        items[i].classList.remove("in-view");
    }
  }
}
 
window.addEventListener("load", callbackFunc);
window.addEventListener("scroll", callbackFunc);

// contact form start  


$(".sendmess").click(function() {
	$(".bar").css("animationName", "send");
	SendMess();
})

function SendMess() {
	setTimeout(function() {
		$(".l1").css("display", "none");
		$(".l2").css("display", "none");
		$(".mailinput").css("display", "none");
		$(".messtxt").css("display", "none");
		$(".sendmess").css("display", "none");

		$(".success").css("display", "inline");
		$(".closemess").css("display", "inline");
	}, 1500);
}

$(".closemess").click(function() {
	$(".bar").css("animationName", "none");
	$(".l1").css("display", "inline");
	$(".l2").css("display", "inline");
	$(".mailinput").css("display", "inline");
	$(".messtxt").css("display", "inline");
	$(".sendmess").css("display", "inline");

	$(".success").css("display", "none");
	$(".closemess").css("display", "none");
	
	$(".mailinput").val("");
	$(".messtxt").val("");
})


// contact form end 


// typing effect start 

const text = "Hello , I am Web developer & UI/UX Designer";
const typingElement = document.querySelector('.typing');

let i = 0;
function typeLetter() {
  typingElement.innerHTML += text.charAt(i);
  i++;
  if (i == text.length) {
    clearInterval(intervalId);
  }
}

const intervalId = setInterval(typeLetter, 100);

// typing effect end 

// carousel 


$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  
  responsive:{
    0:{
      items:1
  },
  600:{
      items:2
  }
  
  }
})



if(screen.width < 900){
   let makeArr = document.querySelector(".short").textContent.split(""); 
   console.log(makeArr.length)
   makeArr.length = 100  ;
   console.log(makeArr.length)

   document.querySelector(".short").textContent = makeArr.join("")+ "  ........." ;
   

 
}


// color switch 

const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark");
  document.querySelector(".navbar ").classList.toggle("navbar-light");
  document.querySelector(".navbar ").classList.toggle("navbar-dark");
  document.querySelector(".navbar ").classList.toggle("bg-make");
  

  document.querySelector(".navbar ").classList.toggle("bg-light")
})