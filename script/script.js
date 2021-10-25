function changeBackground() {
  var text = (document.getElementById("postsButton").style.backgroundColor =
    "beige");
} //button changes colors
function backToNormal() {
  var text = (document.getElementById("postsButton").style.backgroundColor =
    "");
} //button changes colors

//lightbox on blogPosts-page
function on() {
  document.getElementById("overlay").style.display = "block";
} //overlay effect
function off() {
  restoreShortText();
  document.getElementById("overlay").style.display = "none";
} //overlay effect

var slideIndex = 1; 

//changes slideIndex based on user input
function plusSlides(n) {
  restoreShortText();
  showSlides((slideIndex += n));
}
//n stands for number, which pictures has been clicked
function currentSlide(n) {
  showSlides((slideIndex = n));
}
//shows images
function showSlides(n) {
  var slides = document.getElementsByClassName("mySlides");
  //var caption = document.getElementById("text");
  if (n > slides.length) {
    slideIndex = slides.length;
  }
  if (n < 1) {
    slideIndex = 1;
  }
  //looping through all images making sure to show none
  //if this loop is not there it is just showing the first one because all other images get overwritten
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block"; //aligning image ids (starting with 1) with vector-index (starting with 0)
}

//get more Text function in overlay-effect
function moreTextBtn(n) {
  var dots = document.getElementsByClassName("dots");
  var moreText = document.getElementsByClassName("more");
  var btnText = document.getElementsByClassName("moreBtn");

  if (dots[n - 1].style.display === "none") {
    dots[n - 1].style.display = "inline";
    btnText[n - 1].innerHTML = "Read more";
    moreText[n - 1].style.display = "none";
  } else {
    dots[n - 1].style.display = "none";
    btnText[n - 1].innerHTML = "Read less";
    moreText[n - 1].style.display = "inline";
  }
}

//restoring short version of the text //used after changing image or closing overlay-effect
function restoreShortText() {
  var dots = document.getElementsByClassName("dots")[slideIndex - 1];
  var moreText = document.getElementsByClassName("more")[slideIndex - 1];
  var btnText = document.getElementsByClassName("moreBtn")[slideIndex - 1];

  dots.style.display = "inline";
  btnText.innerHTML = "Read more";
  moreText.style.display = "none";
}

function contactOn() {
  document.getElementById("myModal").style.display = "block";
}

function contactOff() {
  document.getElementById("myModal").style.display = "none";
}






/*
create the button for each letter
onclick send letter to function
loop all post compare title with first letter with the letter we send in
if its same replace the content of wrapper 


function createFilter() {
  var filterItems = ["a", "b", "c", "d", "e"];
  for (let i = 0; i < filterItems.length; i++) {
    createFilterButton(filterItems[i]);
  }

  //<button onclick="filterPost()">A</button>;
}
function filterPosts() {
  console.log('filter', filter, 'posts :', posts);
  for (let i = 0; i < post.length; i++) {
    console.log("filter", filter, "first letter in title", posts[i].title.charAt(0), "arre they the same", posts[i]
}

function createFilterButton(filterItem) {
  document.getElementById("filter").innerHTML += `
  <li>
  <button onclick="filterPosts('${filterItem}')">
    ${filterItem}
  </button>
  </li>`;
}
*/
