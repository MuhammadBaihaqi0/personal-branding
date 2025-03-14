// Define the smooth scrolling function
function smoothScroll() {
    // Easing functions
    function easeOutQuad(x) {
      return 1 - (1 - x) * (1 - x);
    }
  
    function easeOutSine(x) {
      return Math.sin((x * Math.PI) / 2);
    }
  
    // Initialize Lenis with options
    const lenis = new Lenis({
      easing: easeOutQuad,
      duration: 2,
    });
  
    // Attach scroll event listener
    lenis.on("scroll", (e) => {
      // Handle scroll events here if needed
    });
  
    // Request animation frame loop
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
  
    // Start the animation frame loop
    requestAnimationFrame(raf);
  }
  
  // Initialize smooth scrolling on DOM content loaded
  document.addEventListener("DOMContentLoaded", () => {
    smoothScroll();
  });
  