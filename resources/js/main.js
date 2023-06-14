// FORM 

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

// FAQ

const items = document.querySelectorAll(".accordion-item h2");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));

// Api

// c5eed1ea747dbcef1a182debf55dd0d57cb72051

// function fetchArticles() {
//   fetch('https://wger.de/api/v2/article')
//     .then(response => response.json())
//     .then(data => {
//       // Process the fetched articles
//       data.results.forEach(article => {
//         console.log('Title:', article.title);
//         console.log('URL:', article.url);
//         console.log('------------------------');
//       });
//     })
//     .catch(error => {
//       console.error('Error:', error);
//     });
// }

// // Function to fetch guides
// function fetchGuides() {
//   fetch('https://wger.de/api/v2/exerciseinfo')
//     .then(response => response.json())
//     .then(data => {
//       // Process the fetched guides
//       data.results.forEach(guide => {
//         console.log('Name:', guide.name);
//         console.log('Description:', guide.description);
//         console.log('------------------------');
//       });
//     })
//     .catch(error => {
//       console.error('Error:', error);
//     });
// }

// // Fetch articles and guides
// fetchArticles();
// fetchGuides();
