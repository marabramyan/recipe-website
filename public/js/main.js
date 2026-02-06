// Main JavaScript for recipe website

document.addEventListener('DOMContentLoaded', () => {
  // Load featured recipes on homepage
  const featuredContainer = document.getElementById('featured-recipes');
  if (featuredContainer) {
    displayFeaturedRecipes();
  }

  // Add smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});

// Display featured recipes on homepage
function displayFeaturedRecipes() {
  const container = document.getElementById('featured-recipes');
  if (!container || typeof recipes === 'undefined') return;

  // Get 4 random recipes for featured section
  const featured = getRandomRecipes(4);

  container.innerHTML = featured.map(recipe => createRecipeCard(recipe)).join('');
}

// Get random recipes
function getRandomRecipes(count) {
  const shuffled = [...recipes].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// Simple animation for elements coming into view
function animateOnScroll() {
  const elements = document.querySelectorAll('.recipe-card, .category-card');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, {
    threshold: 0.1
  });

  elements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
}

// Call animation after content loads
setTimeout(animateOnScroll, 100);
