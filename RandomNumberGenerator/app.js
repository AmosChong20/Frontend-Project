let number = 0;
let max_value = null;
let min_value = null;

const value = document.querySelector("#value");
const btn_generate = document.querySelector(".btn-generate");
const btn_submit = document.querySelector(".btn-submit");
const message = document.querySelector(".message");
const minBox = document.querySelector("#min_value");
const maxBox = document.querySelector("#max_value");

btn_submit.addEventListener('click', function (e) {
    min_value = document.getElementById("min_value").value;
    max_value = document.getElementById("max_value").value;
    if (min_value != "" && max_value != "")
        message.textContent = "Submitted!";
})

minBox.addEventListener('click', function (e) {
    message.textContent = null;
})

maxBox.addEventListener('click', function (e) {
    message.textContent = null;
})

btn_generate.addEventListener('click', function (e) {
    if (max_value != null && min_value != null) {
        number = Number(min_value) + Math.random() * Number(max_value);
        value.textContent = Math.floor(number);
    }
})