const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar_menu');
const navLogo = document.querySelector('#navbar_logo');

// Display menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const introMenu = document.querySelector('#intro-page');
    const typesMenu = document.querySelector('#type-page');
    const startMenu = document.querySelector('#start-page');
    let scrollPos = window.scrollY;
    // console.log(scrollPos);

    var fileName = location.href.split("/").slice(-1) + '';
    fileName = fileName.split('.').slice(0, -1).join('.');
    console.log(fileName);
    
    // adds 'highlight' class to my menu items
    if (window.innerWidth > 960 &&fileName == "introduction") {
      introMenu.classList.add('highlight');
    }
    else if (window.innerWidth > 960 &&fileName == "typesofstreamers") 
    {
      typesMenu.classList.add('highlight');
    }
    else if (window.innerWidth > 960 &&fileName == "tutorial") {
      startMenu.classList.add('highlight');
    }
    else if (window.innerWidth > 960 &&fileName == "index")
    {
      if (window.innerWidth > 960 && scrollPos < 600) {
        homeMenu.classList.add('highlight');
        introMenu.classList.remove('highlight');
        return;
      } 
       else if (window.innerWidth > 960 && scrollPos < 1400) {
        introMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        typesMenu.classList.remove('highlight');
        return;
      } 
       else if (window.innerWidth > 960 && scrollPos < 2345) {
        typesMenu.classList.add('highlight');
        introMenu.classList.remove('highlight');
        startMenu.classList.remove('highlight');
        return;
      }
      else if (window.innerWidth > 960 && scrollPos < 2945) {
        startMenu.classList.add('highlight');
        typesMenu.classList.remove('highlight');
        return;
      }
      if ((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
       elem.classList.remove('highlight');
     }
    }
    
    

    
  };
  
  window.addEventListener('scroll', highlightMenu);
  window.addEventListener('click', highlightMenu);
  
  //  Close mobile Menu when clicking on a menu item
  const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if (window.innerWidth <= 960 && menuBars) {
      menu.classList.toggle('is-active');
      menuLinks.classList.remove('active');
    }
  };
  
  menuLinks.addEventListener('click', hideMobileMenu);
  navLogo.addEventListener('click', hideMobileMenu);