let togg = document.querySelector(".toggle"),
    x = document.querySelector(".navbar");

togg.addEventListener("click", function () {
    if (x.style.display === "none") {
        x.style.display = "flex";
    } else {
        x.style.display = "none";
    }
});