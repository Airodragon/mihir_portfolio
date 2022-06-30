var cursor = document.querySelector("#cursor");
window.addEventListener("mousemove", function (e) {
    cursor.style.left = e.pageX + "px",
        cursor.style.top = e.pageY + "px";
});