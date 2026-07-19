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

let save7 = document.getElementById('result')  as HTMLHeadingElement
console.log(save7);

function add(){
    let save8=+save1.value;
    console.log(save8);
    let save9=+save2.value;
    console.log(save9);
    let save10=save8 + save9;
    console.log(save10);
    let save11=save7.innerHTML='Result ' +save10;
    localStorage.setItem('saveInput1',save1.value);
    localStorage.setItem('saveInput2',save2.value);
    localStorage.setItem('saveInput3',save10.toString());
}
window.onload=function (){
    let save12=localStorage.getItem('saveInput1');
    save1.value=save12 || '';
    let save13=localStorage.getItem('saveInput2');
    save2.value=save13 || '';
    let save15=localStorage.getItem('saveInput3');
    save7.innerHTML='Result ' + save15 || '';

}
save3.addEventListener('click',add)
function sub(){
    let save8=+save1.value;
    console.log(save8);
    let save9=+save2.value;
    console.log(save9);
    let save10=save8 - save9;
    console.log(save10);
    let save11=save7.innerHTML='Result ' +save10;
    localStorage.setItem('saveInput4',save1.value);
    localStorage.setItem('saveInput5',save2.value);
    localStorage.setItem('saveInput6',save10.toString());
}
window.onload=function (){
    let save12=localStorage.getItem('saveInput4');
    save1.value=save12 || '';
    let save13=localStorage.getItem('saveInput5');
    save2.value=save13 || '';
    let save15=localStorage.getItem('saveInput6');
    save7.innerHTML='Result ' + save15 || '';

}
save4.addEventListener('click',sub)
function mul(){
    let save8=+save1.value;
    console.log(save8);
    let save9=+save2.value;
    console.log(save9);
    let save10=save8 * save9;
    console.log(save10);
    let save11=save7.innerHTML='Result ' +save10;
    localStorage.setItem('saveInput7',save1.value);
    localStorage.setItem('saveInput8',save2.value);
    localStorage.setItem('saveInput9',save10.toString());
}
window.onload=function (){
    let save12=localStorage.getItem('saveInput7');
    save1.value=save12 || '';
    let save13=localStorage.getItem('saveInput8');
    save2.value=save13 || '';
    let save15=localStorage.getItem('saveInput9');
    save7.innerHTML='Result ' + save15 || '';
}
save5.addEventListener('click',mul);
function div(){
    let save8=+save1.value;
    console.log(save8);
    let save9=+save2.value;
    console.log(save9);
    let save10=save8 / save9;
    console.log(save10);
    let save11=save7.innerHTML='Result ' +save10;
    localStorage.setItem('saveInput10',save1.value);
    localStorage.setItem('saveInput11',save2.value);
    localStorage.setItem('saveInput12',save10.toString());
}
window.onload=function (){
    let save12=localStorage.getItem('saveInput10');
    save1.value=save12 || '';
    let save13=localStorage.getItem('saveInput11');
    save2.value=save13 || '';
    let save15=localStorage.getItem('saveInput12');
    save7.innerHTML='Result ' + save15 || '';

}
save6.addEventListener('click',div)