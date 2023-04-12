
const reviews = window.reviewData;


function generateReviewCard(review) {
  
  const card = document.createElement('div');
  card.classList.add('card');

  const name = document.createElement('h3');
  name.innerText = review.name;
  card.appendChild(name);

  const date = document.createElement('p');
  date.classList.add('date');
  date.innerText = new Date(review.date).toLocaleDateString();
  card.appendChild(date);

  const rating = document.createElement('div');
  rating.classList.add('rating');
  for (let i = 1; i <= 5; i++) {
    const star = document.createElement('span');
    if (i <= review.rating) {
      star.innerText = '★';
    } else {
      star.innerText = '☆';
    }
    rating.appendChild(star);
  }
  card.appendChild(rating);

  const text = document.createElement('p');
  text.innerText = review.text;
  card.appendChild(text);

  // Add the review card to the reviews container
  const container = document.querySelector('.reviews-container');
  container.appendChild(card);
}

function generateReviewCards() {
    var reviewsContainer = document.getElementById("reviews-container");
  
    // Check if the reviewsContainer element exists
    if (reviewsContainer) {
      // Update the innerHTML property
      reviewsContainer.innerHTML = "";
  
      // Generate the review cards
      for (var i = 0; i < reviewData.length; i++) {
        // ...
      }
    }
  }
  

// Function to handle the form submission
function handleFormSubmit(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the form data
  const form = event.target;
  const name = form.name.value;
  const date = new Date().toISOString();
  const rating = parseInt(form.rating.value);
  const text = form.text.value;

  // Create a new review object
  const review = {
    name,
    date,
    rating,
    text
  };

  // Add the new review to the data
  reviews.push(review);

  // Regenerate all the review cards
  generateReviewCards();

  // Clear the form
  form.reset();
}

// Generate the initial review cards
generateReviewCards();

// Add a submit event listener to the form
const form = document.querySelector('.new-review-form');
form.addEventListener('submit', handleFormSubmit);
