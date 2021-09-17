function changeBackground() {
  var text = (document.getElementById("postsButton").style.backgroundColor =
    "beige");
}

function backToNormal() {
  var text = (document.getElementById("postsButton").style.backgroundColor =
    "");
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
