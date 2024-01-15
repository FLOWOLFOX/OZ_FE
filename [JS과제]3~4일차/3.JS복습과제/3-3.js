const array = [];
let num = 100;
let i = 0;


while(num <= 500){
    if(num % 4 == 0){
        array[i] = num;
        if(i % 5 == 0 && i != 0){
            document.write("<br>");
        }
        document.write(array[i] + " ");
        i++;
    }
    num++;
}