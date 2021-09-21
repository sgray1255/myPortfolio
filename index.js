window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 75 || document.documentElement.scrollTop > 75) {
    document.getElementById("js-nav").style.top = "0";
  } else {
    document.getElementById("js-nav").style.top = "-50px";
  }
}