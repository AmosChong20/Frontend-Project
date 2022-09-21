let number = 0;

const value = document.querySelector("#value");
const btn_generate = document.querySelector(".btn-generate");
const btn_submit = document.querySelector(".btn-submit");
const message = document.querySelector(".message");
const input = document.getElementsByTagName("input");

//When clicked submit button, min_value and max_value will be recorded
btn_submit.addEventListener('click', function (e) {
    const min_value = document.getElementById("min_value").value;
    const max_value = document.getElementById("max_value").value;
    if (min_value != "" && max_value != "")
        message.textContent = "Submitted!";
    
    //The code below is to empty the textbox once submitted
    /*const inputs = document.querySelectorAll("#min_value, #max_value");

    inputs.forEach(input => {
        console.log(input.value);
        input.value = "";
    }); */
})

//When btn generate is clicked, it will show the value
btn_generate.addEventListener('click', function (e) {
    if (max_value != null && min_value != null) {
        number = Number(min_value) + Math.random() * Number(max_value);
        value.textContent = Math.floor(number);
    }
})

//When the textbox is clicked, the textbox will be emptied.
Array.from(input).forEach(item => {
    item.addEventListener('click', function (e) {
        message.textContent = null;
        item.value = "";
    })
})
