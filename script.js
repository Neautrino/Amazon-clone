const images = document.querySelectorAll("header ul li img");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
console.log(images)
let n = 0;

function changeSlide() {
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = 'none'
    }
    images[n].style.display = 'block'
}
changeSlide();

setInterval(() => {
    n++;
    n = n % images.length;
    changeSlide();
}, 5000);


prev.addEventListener('click', () => {
    if (n > 0) {
        n--;
    } else {
        n = images.length - 1;
    }
    changeSlide();
})
next.addEventListener('click', () => {
    if (n < images.length - 1) {
        n++;
    } else {
        n = 0;
    }
    changeSlide();
})

const products = document.querySelectorAll('.products');

for (const item of products) {
    item.addEventListener('wheel', (e) => {
        e.preventDefault();
        item.scrollLeft += e.deltaY
    })
}

document.querySelector(".back-top").addEventListener('click', () => {
    document.documentElement.scrollTop = 0;
})