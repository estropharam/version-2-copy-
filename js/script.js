

 const menu = document.querySelector(".menu");
 const menuMain = menu.querySelector(".menu-main");
 const goBack = menu.querySelector(".go-back");
 const menuTrigger = document.querySelector(".mobile-menu-trigger");
 const closeMenu = menu.querySelector(".mobile-menu-close");
 let subMenu;
 menuMain.addEventListener("click", (e) =>{
 	if(!menu.classList.contains("active")){
 		return;
 	}
   if(e.target.closest(".menu-item-has-children")){
   	 const hasChildren = e.target.closest(".menu-item-has-children");
      showSubMenu(hasChildren);
   }
 });
 goBack.addEventListener("click",() =>{
 	 hideSubMenu();
 })
 menuTrigger.addEventListener("click",() =>{
 	 toggleMenu();
 })
 closeMenu.addEventListener("click",() =>{
 	 toggleMenu();
 })
 document.querySelector(".menu-overlay").addEventListener("click",() =>{
 	toggleMenu();
 })
 function toggleMenu(){
 	menu.classList.toggle("active");
 	document.querySelector(".menu-overlay").classList.toggle("active");
 }
 function showSubMenu(hasChildren){
    subMenu = hasChildren.querySelector(".sub-menu");
    subMenu.classList.add("active");
    subMenu.style.animation = "slideLeft 0.5s ease forwards";
    const menuTitle = hasChildren.querySelector("i").parentNode.childNodes[0].textContent;
    menu.querySelector(".current-menu-title").innerHTML=menuTitle;
    menu.querySelector(".mobile-menu-head").classList.add("active");
 }

 function  hideSubMenu(){  
    subMenu.style.animation = "slideRight 0.5s ease forwards";
    setTimeout(() =>{
       subMenu.classList.remove("active");	
    },300); 
    menu.querySelector(".current-menu-title").innerHTML="";
    menu.querySelector(".mobile-menu-head").classList.remove("active");
 }
 
 window.onresize = function(){
 	if(this.innerWidth >991){
 		if(menu.classList.contains("active")){
 			toggleMenu();
 		}

 	}
 }
// -------------------------------------------------------------change image 


const links = document.querySelectorAll(".ban-image");
        const mainImage = document.getElementById("main-image");

        links.forEach(function(link) {
            link.addEventListener("click", function(event) {
                // Prevent the default action of the link
                event.preventDefault();

                // Get the new image URL from the data attribute
                const newImageSrc = link.getAttribute("data-image");

                // Update the src attribute of the main image
                mainImage.src = newImageSrc;
            });
        });




        document.addEventListener("DOMContentLoaded", () => {
         const options = {
         threshold: 0.1,
         };
      
         const observer = new IntersectionObserver((entries) => {
         entries.forEach((entry) => {
            if (entry.isIntersecting) {
               entry.target.classList.add('showS');
            } else {
               entry.target.classList.remove('showS');
            }
         });
         }, options);
      
         const sect = document.querySelectorAll('h1')
         sect.forEach((h1) => {
         observer.observe(h1);
         });
         });
      
     

         document.addEventListener("DOMContentLoaded", () => {
            const options = {
            threshold: 0.1,
            };
         
            const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
               if (entry.isIntersecting) {
                  entry.target.classList.add('showS');
               } else {
                  entry.target.classList.remove('showS');
               }
            });
            }, options);
         
            const sect = document.querySelectorAll('h1')
            sect.forEach((h1) => {
            observer.observe(h1);
            });
            });


            // ===================================================spinner


            const spinnerWrapperEl = document.querySelector('.spinner-wrapper');

            window.addEventListener('load', () => {
               spinnerWrapperEl.style.transition = 'opacity 0.5s ease'; // Add transition for smooth fade-out
               spinnerWrapperEl.style.opacity = '0'; // Fade out the spinner
            
               // Remove the spinner from the DOM after the fade-out transition completes
               setTimeout(() => {
                  spinnerWrapperEl.style.display = 'none';
               }, 500); // 500ms matches the duration of the CSS transition
            });
            









            // document.addEventListener("DOMContentLoaded", () => {
            //    const options = {
            //    threshold: 0.1,
            //    };
            
            //    const observer = new IntersectionObserver((entries) => {
            //    entries.forEach((entry) => {
            //       if (entry.isIntersecting) {
            //          entry.target.classList.add('show');
            //       } else {
            //          entry.target.classList.remove('show');
            //       }
            //    });
            //    }, options);
            
            //    const sect = document.querySelectorAll('p')
            //    sect.forEach((p) => {
            //    observer.observe(p);
            //    });
            //    });
   
        















// // Select all elements with the class "tip"
// const tips = document.querySelectorAll(".tip");

// // Check if there are at least two elements
// if (tips.length > 1) {
//     // Select the second element
//     const secondTip = tips[1];

//     // Attach a click event listener to the second element
//     secondTip.addEventListener("click", function(event) {
//         // Prevent the default action of the link
//         event.preventDefault();
        
//         // Change the image source
//         document.getElementById("ban-image").src = "img/medicine/Estropam-Plus.JPG";
        
//         // Display the alert message
//         alert("hello");
//     });
// }
