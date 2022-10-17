function showIt() {
  const toBeShown = document.querySelectorAll(".booger"); // consider adding :not(.scrolled) to selector to reduce the number of iterations if you don't want to support scrolling up

  // consider taking this outside of the loop and resetting it on window resize to optimize the loop
  const halfScreen = window.innerHeight / 3;

  toBeShown.forEach((item, i) => {
    const scrolled = window.scrollY + window.innerHeight; // - (item.offsetHeight/2);
    const unscrolled = window.scrollY + window.innerHeight;

    if (item.offsetTop - window.scrollY < halfScreen) {
      item.classList.add("scrolled");
    } else {
      item.classList.remove("scrolled");
    }
  });
}

window.addEventListener("scroll", showIt);

let allSections = document.querySelectorAll('h1')

const options = {
  threshold: 1,
  rootMargin: '-20% 100px -20% 100px'
}

const observer = new IntersectionObserver(function
  (entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log('ENTRY', entry.target)
      entry.target.style.opacity = '1'
      entry.target.style.transition= 'opacity 0.1s ease-in-out'
    } else {
      entry.target.style.opacity = '0.2'
    }
  })
}, options)

allSections.forEach(section => {
  observer.observe(section)
})
