let fastforward = document.getElementById("fastforward");
let fastbackward = document.getElementById("fastbackward");
let backward = document.getElementById("backward");
let forward = document.getElementById("forward");

fastforward.addEventListener('click', function () {
    let section1 = document.querySelectorAll('.section1 label');
    let section2 = document.querySelector('.section2');
    section1.forEach((label) => {
        section2.appendChild(label);
    });
});
fastbackward.addEventListener('click', function () {
    let section2 = document.querySelectorAll('.section2 label');
    let section1 = document.querySelector('.section1');
    section2.forEach((label) => {
        section1.appendChild(label);
    });
});
forward.addEventListener('click', function () {
    let section1 = document.querySelectorAll('.section1 label input:checked');
    let section2 = document.querySelector('.section2');
    section1.forEach((label) => {
        label.checked = false;
        section2.appendChild(label.parentNode);
    });
});
backward.addEventListener('click', function () {
    let section2 = document.querySelectorAll('.section2 label input:checked');
    let section1 = document.querySelector('.section1');
    section2.forEach((label) => {
        label.checked = false;
        section1.appendChild(label.parentNode);
    });
});