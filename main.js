const navSlide = () => {
    const reb = document.querySelector(".reb");
    const navLists = document.querySelector("nav");
  
    reb.addEventListener("click", () => {
      // Toggle nav list and reb class
      navLists.classList.toggle("nav-active");
      reb.classList.toggle("toggle-reb");
    });
  };
  
  navSlide();