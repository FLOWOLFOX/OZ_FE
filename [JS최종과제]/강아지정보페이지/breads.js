const apiRandomDogs = "https://dog.ceo/api/breeds/image/random/42";
const apiAllBreads = "https://dog.ceo/api/breeds/list/all";
const reqeust1 = new XMLHttpRequest();
const reqeust2 = new XMLHttpRequest();

const header = document.getElementById("header");
const main = document.getElementById("main");
const input = document.getElementById("filter-text");
const button = document.getElementById("filter-button");
const select = document.getElementById("filter-select");
const reset = document.getElementById("reset-button");
const more = document.getElementById("more");
const tothetop = document.getElementById("tothetop");

const currentDogs = [];

function displayDogs(item){
    const dogImgDiv = document.createElement("div");
    dogImgDiv.classList.add("flex-item");
    dogImgDiv.innerHTML = `<img src=${item}>`;
    main.appendChild(dogImgDiv);
}

window.addEventListener("load", function(){
    // 강아지 사진 뿌리기
    reqeust1.open("get", apiRandomDogs);
    reqeust1.addEventListener("load", function(){
        const response = JSON.parse(reqeust1.response);
        response.message.forEach(function(item){
            currentDogs.push(item)      // 처음에 한 번만.
            displayDogs(item);
        })
    })
    reqeust1.send();

    // 셀렉트에 견종 정보 뿌리기
    reqeust2.open("get", apiAllBreads);
    reqeust2.addEventListener("load", function(){
        const response = JSON.parse(reqeust2.response);
        Object.keys(response.message).forEach(function(item){
            const option = document.createElement("option");
            option.textContent = item;
            option.value = item;
            select.appendChild(option);
        })
    })
    reqeust2.send();
})

button.addEventListener("click", function(){
    main.innerHTML = "";
    let filteredDogs = currentDogs.filter(function(item){   // 견종 정보 안에 input에 쓰여진 내용이 포함되어 있으면 필터링
        return item.indexOf(input.value) !== -1;            // 포함되어 있지 않은 것을 제외
    })

    input.value = "";

    filteredDogs.forEach(function(item){
        displayDogs(item);
    })
})

select.addEventListener("change", function(){
    main.innerHTML = "";
    let filteredDogs = currentDogs.filter(function(item){
        return item.indexOf(select.value) !== -1;
    })

    filteredDogs.forEach(function(item){
        displayDogs(item);
    })
})

reset.addEventListener("click", function(){
    main.innerHTML = "";
    reqeust1.open("get", apiRandomDogs);
    reqeust1.addEventListener("load", function(){
        const response = JSON.parse(reqeust1.response);
    })
    reqeust1.send();
})

more.addEventListener("click", function(){
    reqeust1.open("get", apiRandomDogs);
    reqeust1.addEventListener("load", function(){
        const response = JSON.parse(reqeust1.response);
        response.message.forEach(function(item){
            currentDogs.push(item);
            displayDogs(item);
        })
    })
    reqeust1.send();
})

tothetop.addEventListener("click", function(){
    // scrollTo : 주어진 위치로 스크롤을 이동한다.
    window.scrollTo({ top : 0 });
})