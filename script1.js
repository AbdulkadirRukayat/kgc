
//  make mobile work

// const btnNavEl = document.querySelector(".btn-mobile-nav");
// const headerEl = document.querySelector(".header");
// btnNavEl.addEventListener("click", function
// () { 
//   headerEl.classList.toggle("nav-open");
// });



//  close mobile navigation
// if(link.classList.contains('main-nav-link'))
//     headerEl.classList.toggle("nav-open");
    
    
    // ///////////////////////////////////////////////////////////
    // // STICKY NAVIGATION
    // const sectionHeroEL = document.querySelector
    // (".sectio-hero");
    // const obs = new IntersectionObserver(
    //   function (entries) {
    // const ent = entries[0];
    // console.log(ent);
    // if (ent.isIntersecting === false) {
    //   document.body.classList.add("sticky");
    //   }
    
    //   if (ent.isIntersecting === true) {
    //     document.body.classList.remove("sticky");
    //     }
    
    
    // },
    //  {
    // // In the view port
    // root:null,
    // threshold:0,
    // rootMargin:'-80px',
    // }
    // );
    // obs.observe(sectionHeroEL);
    
    
    
    
    // ///////////////////////////////////////////////////////////
    // // Fixing flexbox gap property missing in some Safari versions
    // function checkFlexGap() {
    //   var flex = document.createElement("div");
    //   flex.style.display = "flex";
    //   flex.style.flexDirection = "column";
    //   flex.style.rowGap = "1px";
    
    //   flex.appendChild(document.createElement("div"));
    //   flex.appendChild(document.createElement("div"));
    
    //   document.body.appendChild(flex);
    //   var isSupported = flex.scrollHeight === 1;
    //   flex.parentNode.removeChild(flex);
    //   console.log(isSupported);
    
    //   if (!isSupported) document.body.classList.add("no-flexbox-gap");
    // }
    // checkFlexGap();
    

    // document.addEventListener('DOMContentLoaded', () => {
    //   const navButton = document.querySelector('.icon-mobile-nav');
    //   const navList = document.querySelector('.main-nav-list');
    //   const menuIcon = document.querySelector('ion-icon[name="menu-outline"]');
    //   const closeIcon = document.querySelector('ion-icon[name="close-outline"]');
    
    //   navButton.addEventListener('click', () => {
    //     navList.classList.toggle('active');
    //     menuIcon.style.display = navList.classList.contains('active') ? 'none' : 'block';
    //     closeIcon.style.display = navList.classList.contains('active') ? 'block' : 'none';
    //   });
    // });


    
  <script>
  // Hamburger menu toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('.main-nav-list');

  navToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
  });

  const yearEl = document.querySelector(".year");
const currentyear = new Date().getFullYear();
yearEl.textContent =currentyear;
</script>