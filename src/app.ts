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
    localStorage.setItem('saveInput1',save8.toString());
    localStorage.setItem('saveInput2',save9.toString());
    localStorage.setItem('saveInput3',save10.toString());
    localStorage.setItem('saveInput4',save11)
   let save12=  localStorage.getItem('saveInput1');
    let save13= localStorage.getItem('saveInput2');
    let save14= localStorage.getItem('saveInput3');
    let save15= localStorage.getItem('saveInput4');

    
    // return save11;
}
save7.addEventListener('click',add)