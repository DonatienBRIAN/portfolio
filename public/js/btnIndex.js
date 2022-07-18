(function () {
    [...document.querySelectorAll(".bouton")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    [...document.querySelectorAll(".btn-port")].forEach(button => {
        button.addEventListener("click", function() {
            document.getElementById(button.dataset.id).classList.remove("port-inactive");
            document.getElementById(button.dataset.id).classList.add("port-active");
            document.getElementById("portfolio-gallerie").classList.remove("port-active");
            document.getElementById("portfolio-gallerie").classList.add("port-inactive");
        })
    });
    [...document.querySelectorAll(".btn-retour")].forEach(button => {
        button.addEventListener("click", function() {
            document.getElementById(button.dataset.id).classList.remove("port-active");
            document.getElementById(button.dataset.id).classList.add("port-inactive");
            document.getElementById("portfolio-gallerie").classList.remove("port-inactive");
            document.getElementById("portfolio-gallerie").classList.add("port-active");
        })
    });
})();
