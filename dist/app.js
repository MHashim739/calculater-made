let save1 = document.getElementById('num1');
console.log(save1);
let save2 = document.getElementById('num2');
console.log(save2);
let save3 = document.getElementById('add');
console.log(save3);
let save4 = document.getElementById('sub');
console.log(save4);
let save5 = document.getElementById('mul');
console.log(save5);
let save6 = document.getElementById('div');
console.log(save6);
let save7 = document.getElementById('result');
console.log(save7);
function add() {
    let save8 = +save1.value;
    let save9 = +save2.value;
    let save10 = save8 + save9;
    let save11 = save7.innerHTML = save10.toString();
    return save11;
}
save7.addEventListener('click', add);
export {};
//# sourceMappingURL=app.js.map