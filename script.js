function moreContent() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("expand");
  var btnText = document.getElementById("btn1");
  var about = document.getElementsByTagName("article")[0];

  if (dots.style.display == "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Continue Reading"; 
      moreText.style.display = "none";
  } 
  else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
      btnText.style.position = "relative";
      btnText.style.left = "-35%";
      btnText.style.bottom= "3%";
  }
}