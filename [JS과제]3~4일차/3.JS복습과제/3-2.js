
const star1 = document.getElementById("star1");
const star2 = document.getElementById("star2");
const star3 = document.getElementById("star3");

// 1번 별
for(i = 1; i <= 5; i++){
    for(j = 1; j <= i; j++){
        const span = document.createElement("span");
        span.textContent = "*";
        star1.appendChild(span);
    }
    const p = document.createElement("p");
    p.textContent = "";
    star1.appendChild(p);
}

// 2번 별
for(i = 1; i <= 5; i++){
    for(j = 1; j <= i; j++){
        const span = document.createElement("span");
        span.textContent = "*";
        star2.appendChild(span);
    }
    const p = document.createElement("p");
    p.textContent = "";
    star2.appendChild(p);
}
for(i = 5; i >= 1; i--){
    for(j = 1; j <= i; j++){
        const span = document.createElement("span");
        span.textContent = "*";
        star2.appendChild(span);
    }
    const p = document.createElement("p");
    p.textContent = "";
    star2.appendChild(p);
}
// 3번 별
// 1 3 5 7 9
for(i = 1; i < 10; i++){
    if(i % 2 == 1){
        for(j = 1; j <= (9-i)/2; j++){
            const span = document.createElement("span");
            span.textContent = "\u00a0";    // 공백
            star3.appendChild(span);
        }
        for(j = i; j >= 1; j--){
            const span = document.createElement("span");
            span.textContent = "*";
            star3.appendChild(span);
        }
        const p = document.createElement("p");
        p.textContent = "";
        star3.appendChild(p);

        if(i == 9){
            for(x = 9; x >= 1; x--){
                if(x % 2 == 1 && x != 9){
                    for(y = 1; y <= (9-x)/2; y++){
                        const span = document.createElement("span");
                        span.textContent = "\u00a0";    // 공백
                        star3.appendChild(span);
                    }
                    for(y = x; y >= 1; y--){
                        const span = document.createElement("span");
                        span.textContent = "*";
                        star3.appendChild(span);
                    }
                }
                const p = document.createElement("p");
                p.textContent = "";
                star3.appendChild(p);
            }
        }
    }
}