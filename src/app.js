class Blog {
  // Progression 1: Add 2 methods - addTitle(), and addDescription()
  constructor(title, detail) {
    this.title = title;
    this.detail = detail;
  }
  addTitle() {
    var title_card = document.createElement('h1');
    title_card.setAttribute('id', 'blog-title');
    document.getElementById('card-text').appendChild(title_card);
    title_card.innerHTML += this.title;
  }
  addDescription() {
    var description = document.createElement('p');
    description.setAttribute('id', 'blog-description');
    document.getElementById('card-text').appendChild(description);
    description.innerHTML += this.detail;
  }
}

// Progression 2: Setup an event listner - add two functions
// 1. `helperAddPost()`
// 2. `helperPost()`
function helperAddPost() {
  let popup = document.getElementById('popupContact');
  popup.style.display = 'block';
}
function helperPost() {
  let title = document.getElementById('title');
  let detail = document.getElementById('detail');
  const myBlog = new Blog(title.value, detail.value);
  myBlog.addTitle();
  myBlog.addDescription();
  let popup = document.getElementById('popupContact');
  popup.style.display = 'none';
}
