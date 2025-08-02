document.addEventListener("DOMContentLoaded", () => {
  console.log("Kandaka site loaded.");

  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav");
  const header = document.querySelector("header");

  toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  console.log("Kandaka site loaded.");

  const cursor = document.querySelector(".custom-cursor");

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  });

  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav");
  const header = document.querySelector("header");

  toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });

  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 50);
  });
});




//  Developed by Chathura Denuwan AKA 3noX
//  Developed by Chathura Denuwan AKA 3noX
//  Developed by Chathura Denuwan AKA 3noX
//  Developed by Chathura Denuwan AKA 3noX
//  Developed by Chathura Denuwan AKA 3noX
//  Developed by Chathura Denuwan AKA 3noX
//  Developed by Chathura Denuwan AKA 3noX
//  Developed by Chathura Denuwan AKA 3noX
 