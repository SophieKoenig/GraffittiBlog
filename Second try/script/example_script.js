function getPosts() {
    fetch("../data/posts.json")
    .then((response) => response.json())
    .then((data) => {
        console.log('data :) :',data);
        for (let i = 0; i < data.length; i++) {
            createTumbnail(data[i]);
        }
    });
    
    /*.then((data) => {
        for (let i = 0; i < data.length; i++) {
            console.log('my posts: ', i ,data[i])
        }
    })*/
}

function createTumbnail(post) {
    var test = `<div class="tumb"><h1> ${post.title}</h1><p>${post.shortsummary}`
    document.getElementById('')
    console.log('in create tumb', post)
}

/*function getPosts() {
    fetch('../data/posts.json')
      .then(response => response.json())
      .then(data => {
        for (let i = 0; i < data.length; i++) {
          createThumbnail(data[i]);
        }
      })
    }
    
    
    var createThumbnail = (post) => {
      var wrapper = document.querySelector('.wrapper');
      wrapper.innerHTML += `<div class="wrapper__content">
      <h3>${post.title}</h3>
      <img src="${post.previewImage}"> 
      <p>${post.shortSummary}</p>
      </div>` 
    
    };*/