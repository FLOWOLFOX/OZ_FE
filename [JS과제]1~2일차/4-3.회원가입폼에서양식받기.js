let form = document.getElementById('form');


let emailInput = document.getElementById('email');
let nameInput = document.getElementById('name');
let pwInput = document.getElementById('pw');
let pwCheckInput = document.getElementById('pw_check');
let tel1Input = document.getElementById('tel_num1');
let tel2Input = document.getElementById('tel_num2');
let tel3Input = document.getElementById('tel_num3');

//let codeSendInput = document.getElementById('code_send');
//let codeCheckInput = document.getElementById('code_check');

let regionInput = document.getElementById('region');
let femaleInput = document.getElementById('female');
let maleInput = document.getElementById('male');


form.addEventListener('submit', function(e){
    e.preventDefault();     // 이벤트의 기본 동작을 중단
    console.log(emailInput.value);
    console.log(nameInput.value);
    console.log(pwInput.value);
    console.log(pwCheckInput.value);
    console.log(tel1Input.value);
    console.log(tel2Input.value);
    console.log(tel3Input.value);

    //console.log(codeSendInput.value);
    //console.log(codeCheckInput.value);

    console.log(regionInput.value);
    console.log(femaleInput.checked);
    console.log(maleInput.checked);
})