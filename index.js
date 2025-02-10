let fastforward = document.getElementById("fastforward");
let fastbackward = document.getElementById("fastbackward");
let backward = document.getElementById("backward");
let forward = document.getElementById("forward");

function updateButtons() {
    let section1Labels = document.querySelectorAll('.section1 label');
    let section2Labels = document.querySelectorAll('.section2 label');
    let section1Checked = document.querySelectorAll('.section1 label input:checked').length;
    let section2Checked = document.querySelectorAll('.section2 label input:checked').length;

    fastforward.disabled = section1Labels.length === 0;
    fastbackward.disabled = section2Labels.length === 0;
    forward.disabled = section1Checked === 0;
    backward.disabled = section2Checked === 0;
}


document.querySelector('.section1').addEventListener('change',updateButtons);
document.querySelector('.section2').addEventListener('change',updateButtons);


fastforward.addEventListener('click', function () {
    let section1 = document.querySelectorAll('.section1 label');
    let section2 = document.querySelector('.section2');
    section1.forEach((label) => {
        section2.appendChild(label);
    });
    updateButtons();
});
fastbackward.addEventListener('click', function () {
    let section2 = document.querySelectorAll('.section2 label');
    let section1 = document.querySelector('.section1');
    section2.forEach((label) => {
        section1.appendChild(label);
    });
    updateButtons();
});
forward.addEventListener('click', function () {
    let section1 = document.querySelectorAll('.section1 label input:checked');
    let section2 = document.querySelector('.section2');
    section1.forEach((label) => {
        label.checked = false;
        section2.appendChild(label.parentNode);
    });
    updateButtons();
});
backward.addEventListener('click', function () {
    let section2 = document.querySelectorAll('.section2 label input:checked');
    let section1 = document.querySelector('.section1');
    section2.forEach((label) => {
        label.checked = false;
        section1.appendChild(label.parentNode);
    });
    updateButtons();
});

updateButtons();