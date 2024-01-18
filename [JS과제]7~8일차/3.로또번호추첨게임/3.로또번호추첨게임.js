const todaySpan = document.querySelector("#today");
const numberDiv = document.querySelector(".number");
const drawBtn = document.querySelector("#draw");
const resetBtn = document.querySelector("#reset");

let lottoNumbers = [];

const today = new Date();
let year = today.getFullYear();
let month = today.getMonth() + 1;
let date = today.getDate();
todaySpan.textContent = `${year}년 ${month}월 ${date}일 `;

function paintNumber(number){
    const eachNumDiv = document.createElement("div");
    eachNumDiv.classList.add("eachnum");
    eachNumDiv.textContent = number;
    numberDiv.append(eachNumDiv);
}

drawBtn.addEventListener("click", function(){
    if(lottoNumbers.length === 6){
        lottoNumbers.splice(0, 6);
        numberDiv.innerHTML ="";
    }
    
    while(lottoNumbers.length < 6){
        let rn = Math.floor(Math.random() * 45) + 1;

        if(lottoNumbers.indexOf(rn) === -1){
            lottoNumbers.push(rn);
            paintNumber(rn);
        }
    }
    console.log(lottoNumbers);
})

resetBtn.addEventListener("click", function(){
    lottoNumbers.splice(0, 6);
    numberDiv.innerHTML ="";
    console.log(lottoNumbers);
})