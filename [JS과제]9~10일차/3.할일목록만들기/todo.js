// 요소 선택 및 배열 선언
const todoList = document.getElementById("todo-list");
const todoForm = document.getElementById("todo-form");
let todoArr = [];   // 로컬 스토리지와 연계할 배열

// 로컬 저장소에 저장하기
function saveTodos(){
    const todoString = JSON.stringify(todoArr);
    localStorage.setItem("myTodos", todoString);
}
// 로컬 저장소에서 가져오기
function loadTodos(){
    const myTodos = localStorage.getItem("myTodos");
    if(myTodos !== null){
        todoArr = JSON.parse(myTodos);
        displayTodos();
    }
}
loadTodos();
// 할일 삭제하기
function handelTodoDelBtnClick(clickedId){
    todoArr = todoArr.filter(function(aTodo){           // 클릭된 할일이 아닌, 다른 할일들만 true값을 줘서 필터링, todoArr에 덮어쓰기
        return aTodo.todoId !== clickedId;
    })
    displayTodos();
    saveTodos();
}
// 할일 수정하기 (어떤 할일을 클릭 시, 해당 할일의 id를 받아서 class 수정)
function handleTodoItemClick(clickedId){
    todoArr = todoArr.map(function(aTodo){              // 맵에서 완성된 todoArr의 조작 결과를 todoArr에 덮어쓰기
        if(aTodo.todoId === clickedId){                 // 클릭한 할일의 id가 map에서 나오면
            return {
                ...aTodo, todoDone : !aTodo.todoDone    // 기존의 할일 내용에 todoDone을 반전시켜서 추가 (!는 true를 false로, false를 true로 바꾸는 연산자)
            }
        }else{                                          // 할일의 id가 일치하지 않는 경우
            return aTodo;                               // 기존 상태 반환
        }
    })
    displayTodos();
    saveTodos();
}
// 할일 보여주기
function displayTodos(){
    todoList.innerHTML = "";                // 중복되니 지우고 출력
    todoArr.forEach(function(aTodo){
        const todoItem = document.createElement("li");
        const todoDelBtn = document.createElement("span");
        todoDelBtn.textContent = "x";
        todoItem.textContent = aTodo.todoText;
        todoItem.title = "클릭하면 완료됨";
        if(aTodo.todoDone){
            todoItem.classList.add("done");
        }else{
            todoItem.classList.add("yet");
        }
        todoDelBtn.title = "클릭하면 삭제됨";

        todoItem.addEventListener("click", function(){      // 할일 클릭 시
            handleTodoItemClick(aTodo.todoId);
        })

        todoDelBtn.addEventListener("click", function(){    // x 클릭 시
            handelTodoDelBtnClick(aTodo.todoId);
        })

        todoItem.appendChild(todoDelBtn);
        todoList.appendChild(todoItem);
    })
}
// 할일 추가하기
todoForm.addEventListener("submit", function(e){
    e.preventDefault();
    const toBeAdded = {
        todoText : todoForm.todo.value,     // 할일의 내용
        todoId : new Date().getTime(),      // 할일의 식별값(추가된 시간을 정수 형태로)
        todoDone : false                    // 할일의 종료 여부(초기값은 하지 않은 상태로)
    }
    todoForm.todo.value = "";               // 클릭 시, 입력한 내용 지우기
    todoArr.push(toBeAdded);
    displayTodos();
    saveTodos();
})