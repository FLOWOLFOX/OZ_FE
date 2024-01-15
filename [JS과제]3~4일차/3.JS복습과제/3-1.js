let score = prompt("중간고사 점수를 입력하세요");
let grade;

if(score >= 90){
    grade = "A";
}else if(score >= 80){
    grade = "B";
}else if(score >= 70){
    grade = "C";
}else if(score >= 60){
    grade = "D";
}
else{
    grade = "F";
}

const resultElement = document.getElementById("result");
resultElement.textContent = `나의 중간고사 점수는 ${score}점, 학점은 ${grade}!!!`;