// YOUR CODE HERE
const red_btn = document.querySelector('#btn1');
const text_1 = document.querySelector('#output1');

red_btn.addEventListener("click", () => {
    text_1.style.color = "red";

});

const txt_btn = document.querySelector('#btn2');
const text_2 = document.querySelector('#output2');

txt_btn.addEventListener("click", () => {
    text_2.append("Hello World");
});

const rmv_btn = document.querySelector('#btn3');
const text_3 = document.querySelector('#output3');

rmv_btn.addEventListener ("click", () => {
    text_3.firstElementChild.classList.remove("small-text");
});

const dbl_btn = document.querySelector('#btn4');
const text_4 = document.querySelector('#output4');

dbl_btn.addEventListener("click", () => {
    text_4.style.color = "red";
});

const get_btn = document.querySelector('#btn5');
const msg = document.querySelector('#message')

get_btn.addEventListener('click',  () => {
    console.log(msg.value)
})