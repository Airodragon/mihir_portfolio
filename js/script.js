let changing_text = document.querySelector(".changing-text")
let arr = ["I am a web developer","I am a web designer", "I am a python developer"]
let i = 0
setInterval(() => {
    changing_text.innerHTML = arr[i]
    changing_text.classList.add("changing-text-animation")
    i++
    if (i == arr.length) {
        i = 0
    }
},800);

let download_link = document.querySelector(".resume-download");
download_link.addEventListener('click', (e) => {
    window.open("./assets/doc/mihir_resume.pdf");
})

function download() {
    window.open("./assets/doc/mihir_resume.pdf");
}