
// getScroll = () => {
//    doc = document;
//    ele = doc.documentElement;
//    y_axis = ele.scrollTop;
//    position.innerHTML = " Y-axis : " + y_axis;

//    if (y_axis > 100) {
//       document.getElementById('sidenav').style.backgroundColor = '#333';
//    } else {
//       document.getElementById('sidenav').style.backgroundColor = '#fff';
//    }
// }

window.addEventListener("scroll", (event) => {
   let scrollY = this.scrollY;
   console.log(scrollY);

   let sidenav = document.getElementById("sidenav")
   let position = document.getElementById("position")
   if (scrollY >= 641) {
      sidenav.classList.remove("activesecond");
      sidenav.classList.add("active");
      position.innerHTML = scrollY;
   } else if (scrollY <= 640) {
      sidenav.classList.add("activesecond");
      sidenav.classList.remove("active");
   }
});