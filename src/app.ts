let save1 = document.getElementById('num1')! as HTMLInputElement;
console.log(save1);

let save2 = document.getElementById('num2')! as HTMLInputElement;
console.log(save2);

let save3 = document.getElementById('add')! as HTMLButtonElement;
console.log(save3);

let save4 = document.getElementById('sub')! as HTMLButtonElement;
console.log(save4);

let save5 = document.getElementById('mul')! as HTMLButtonElement;
console.log(save5);

let save6 = document.getElementById('div')! as HTMLButtonElement;
console.log(save6);

let save7 = document.getElementById('result') as HTMLHeadingElement
console.log(save7);

let clearButton = document.getElementById('clear')! as HTMLButtonElement;
console.log(clearButton);

function add() {
    if (save1.value == '' || save2.value == '') {
        let valueSave = 'fill the input';
        let valueSave1 = save7.innerHTML = valueSave;
        save7.style.color = 'red';
        return
    } else if (save1.value && save2.value) {
        save7.style.color = 'white';
    }
    let save8 = +save1.value;
    console.log(save8);
    let save9 = +save2.value;
    console.log(save9);
    let save10 = save8 + save9;
    console.log(save10);
    let save11 = save7.innerHTML = 'Result ' + save10;
    localStorage.setItem('saveInput1', save1.value);
    localStorage.setItem('saveInput2', save2.value);
    localStorage.setItem('saveInput3', save10.toString());
}
save3.addEventListener('click', function () {
    add();
});
function sub() {
    if (save1.value == '' || save2.value == '') {
        let valueSave = 'fill the input';
        let valueSave1 = save7.innerHTML = valueSave;
        save7.style.color = 'red';
        return
    } else if (save1.value && save2.value) {
        save7.style.color = 'white';
    }
    let save8 = +save1.value;
    console.log(save8);
    let save9 = +save2.value;
    console.log(save9);
    let save10 = save8 - save9;
    console.log(save10);
    let save11 = save7.innerHTML = 'Result ' + save10;
    localStorage.setItem('saveInput1', save1.value);
    localStorage.setItem('saveInput2', save2.value);
    localStorage.setItem('saveInput3', save10.toString());
}
save4.addEventListener('click', function () {
    sub();
})
function mul() {
    if (save1.value == '' || save2.value == '') {
        let valueSave = 'fill the input';
        let valueSave1 = save7.innerHTML = valueSave;
        save7.style.color = 'red';
        return
    } else if (save1.value && save2.value) {
        save7.style.color = 'white';
    }
    let save8 = +save1.value;
    console.log(save8);
    let save9 = +save2.value;
    console.log(save9);
    let save10 = save8 * save9;
    console.log(save10);
    let save11 = save7.innerHTML = 'Result ' + save10;
    localStorage.setItem('saveInput1', save1.value);
    localStorage.setItem('saveInput2', save2.value);
    localStorage.setItem('saveInput3', save10.toString());
}
save5.addEventListener('click', function () {
    mul();
})
function div() {
    if (save1.value == '' || save2.value == '') {
        let valueSave = 'fill the input';
        let valueSave1 = save7.innerHTML = valueSave;
        save7.style.color = 'red';
        return
    } else if (save1.value && save2.value) {
        save7.style.color = 'white';
    }
    let save8 = +save1.value;
    console.log(save8);
    let save9 = +save2.value;
    console.log(save9);
    let save10 = save8 / save9;
    console.log(save10);
        save7.innerHTML = 'Result ' + save10;
     if(save9 ===0){
        save7.innerHTML='Result ' + 'you check the value';
        return
    }
    localStorage.setItem('saveInput1', save1.value);
    localStorage.setItem('saveInput2', save2.value);
    localStorage.setItem('saveInput3', save10.toString());
}
save6.addEventListener('click', function () {
    div();
})
window.onload = function () {
    let save12 = localStorage.getItem('saveInput1');
    save1.value = save12 || '';
    let save13 = localStorage.getItem('saveInput2');
    save2.value = save13 || '';
    let save15 = localStorage.getItem('saveInput3');
    if (save15) {
        save7.innerHTML = 'Result ' + save15;
    } else {
        save7.innerHTML = 'Result ' + '';
    }

}
function clearAll() {
    save1.value = '';
    save2.value = '';
    save7.innerHTML = 'Result';
    localStorage.removeItem('saveInput1')
    localStorage.removeItem('saveInput2')
    localStorage.removeItem('saveInput3')

}
clearButton.addEventListener('click', clearAll)
