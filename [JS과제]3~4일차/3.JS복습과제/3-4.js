let btnDiv = document.getElementById("btnDiv");
let numInput = document.getElementById("number");
let randNum = Math.floor(Math.random() * (100 - 1 + 1)) + 1;

const p = document.getElementById("p");
const reBtn = document.createElement("button");
reBtn.textContent = "다시하기";
reBtn.style.width = "150px";
reBtn.style.height = "50px";
reBtn.style.fontSize = "24px";
reBtn.style.color = "blue";
reBtn.style.backgroundColor = "darkgray";
reBtn.style.border = "3px solid blue";
reBtn.style.cursor = "pointer";

reBtn.addEventListener('mouseover', function(event){
    event.target.style.width = "170px";
    event.target.style.height = "60px";
    event.target.style.fontSize = "30px";
    event.target.style.color = "white";
}, false);

reBtn.addEventListener('mouseout', function(event){
    event.target.style.width = "150px";
    event.target.style.height = "50px";
    event.target.style.fontSize = "24px";
    event.target.style.color = "blue";
}, false);

reBtn.addEventListener('click', function(event){
    location.reload();
}, false);

console.log(randNum);


function numCheck(){
    if(numInput.value > randNum){
        p.textContent = "힌트 : 숫자가 커요! 줄여볼까요?";
    }else if(numInput.value < randNum){
        p.textContent = "힌트 : 숫자가 작아요! 높여볼까요?";
    }else{
        alert("정답입니다!");
        p.textContent = "";
        btnDiv.appendChild(reBtn);
    }
    console.log(numInput.value);
}