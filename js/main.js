const menuIcon = document.querySelector(".nav-bar .fa-wifi"
);
const navList = document.querySelector(".nav-bar ul");

menuIcon.addEventListener("click", () => {
    navList.classList.toggle("active");
});
