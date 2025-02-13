
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const nav = document.querySelector('nav');
const heroText = document.querySelector('.hero-text');
const addToCartButton = document.querySelector('.add-to-cart');
const footer = document.querySelector('footer');

const buttonSpecs = document.getElementById('specs_btn');
const targetSectionSpecs = document.getElementById('specs');
const buttonFeatures = document.getElementById('features_btn');
const targetSectionFeatures = document.getElementById('features');
const buttonHero = document.getElementById('hero_btn');
const targetSectionHero = document.getElementById('hero');


function loadThemeFromLocalStorage() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    body.classList.add('dark');
    themeToggle.textContent = 'Светлая тема';
    hero.classList.add('dark');
    specs.classList.add('dark');
    features.classList.add('dark');
    calltoaction.classList.add('dark');
    footer.classList.add('dark');
  }
}

themeToggle.addEventListener('click', () => {
  const isDarkMode = body.classList.contains('dark');
  body.classList.toggle('dark', !isDarkMode);
  hero.classList.toggle('dark', !isDarkMode); 
  specs.classList.toggle('dark', !isDarkMode);
  heroText.classList.toggle('dark', !isDarkMode);
  features.classList.toggle('dark', !isDarkMode);
  calltoaction.classList.toggle('dark', !isDarkMode);
  footer.classList.toggle('dark', !isDarkMode);

  if (isDarkMode) {
    localStorage.setItem('theme', 'dark');
    themeToggle.textContent = 'Темная тема';
  } else if (!isDarkMode) {
    localStorage.removeItem('theme');
    themeToggle.textContent = 'Светлая тема';
  }
});


window.addEventListener('scroll', function() {

  const targetPositionSpecs = targetSectionSpecs.getBoundingClientRect().top;
  const targetPositionFeatures = targetSectionFeatures.getBoundingClientRect().top;
  const targetPositionHero = targetSectionHero.getBoundingClientRect().top;
  

  if (targetPositionSpecs <= window.innerHeight) {
    buttonSpecs.style.textDecoration = 'underline';
  } else {
    buttonSpecs.style.textDecoration = 'none';
  }
  if (targetPositionFeatures <= window.innerHeight) {
    buttonFeatures.style.textDecoration = 'underline';
  } else {
    buttonFeatures.style.textDecoration = 'none';
  }
  if (targetPositionHero <= window.innerHeight) {
    buttonHero.style.textDecoration = 'underline';
  } else {
    buttonHero.style.textDecoration = 'none';
  }
});


