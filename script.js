document.addEventListener("DOMContentLoaded", () => {
    const changeBtn = document.getElementById("changeBtn");
    const mainContent = document.getElementById("content");
    const contactBtn = document.getElementById("contact-btn");
    const dropdownList = document.getElementById("dropdownlst");
    const theme = document.querySelector(".theme")
    const bgChange = document.getElementById("bg-change");
    const btn = document.querySelectorAll(".btn");
    const projectBtn = document.querySelectorAll(".projects");
    const email = document.getElementById("email")
    const footer = document.querySelector(".footer");
    const img = document.querySelectorAll(".img");



    changeBtn.addEventListener("click", () => {
        dropdownList.classList.toggle("hidden");
        dropdownList.classList.add("flex", "flex-col", "justify-center", "gap-6", "font-semibold");


    });

    bgChange.addEventListener("click", () => {
        mainContent.classList.toggle("bg-[#121212]");
        mainContent.classList.toggle("text-white");
        contactBtn.classList.toggle("bg-white");
        contactBtn.classList.toggle("text-[#121212]");
        btn.forEach((btns) => {
            btns.classList.toggle("bg-white");
            btns.classList.toggle("text-[#121212]")
            btns.classList.toggle("hover:text-white")
            btns.classList.toggle("hover:bg-[#121212]");
            btns.classList.toggle("hover:border-white");
        });

        img.forEach((imgs) => {
            imgs.classList.toggle("invert")
            imgs.classList.toggle("brightness-200")
        });


        projectBtn.forEach((projects) => {
            projects.classList.toggle("bg-white");
            projects.classList.toggle("text-[#121212]");
        });

        email.classList.toggle("bg-white");
        email.classList.toggle("text-[#121212]");

        footer.classList.toggle("bg-[#121212]");



    });
});