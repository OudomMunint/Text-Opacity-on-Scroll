function showIt() {
    const toBeShown = document.querySelectorAll(".booger"); // consider adding :not(.scrolled) to selector to reduce the number of iterations if you don't want to support scrolling up
  
    // consider taking this outside of the loop and resetting it on window resize to optimize the loop
    const halfScreen = window.innerHeight / 5;
  
    toBeShown.forEach((item, i) => {
      const scrolled = window.scrollY + window.innerHeight; // - (item.offsetHeight/2);
  
      if (item.offsetTop - window.scrollY < halfScreen) {
        item.classList.add("scrolled");
      } else {
        item.classList.remove("scrolled");
      }
    });
  }
  
  window.addEventListener("scroll", showIt);
  