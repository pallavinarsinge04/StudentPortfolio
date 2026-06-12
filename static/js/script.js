document.addEventListener("DOMContentLoaded", function () {

    const toggleBtn = document.getElementById("theme-toggle");

    toggleBtn.addEventListener("click", function () {

        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {

            toggleBtn.innerHTML = "☀️";
            localStorage.setItem("theme", "light");

        } else {

            toggleBtn.innerHTML = "🌙";
            localStorage.setItem("theme", "dark");

        }

    });

    if (localStorage.getItem("theme") === "light") {

        document.body.classList.add("light-mode");
        toggleBtn.innerHTML = "☀️";

    }

});