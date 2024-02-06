"use strict";
// 제네릭 클래스 (큐 방식으로 동작하는 클래스)
// 큐 : 선형 자료구조, FIFO (first-in-first-out)
class GenericQueue {
    constructor() {
        this.items = [];
    }
    // enqueue 메서드 (큐를 메서드에 추가)
    enqueue(item) {
        this.items.push(item);
    }
    // dequeue 메서드 (큐의 맨 처음 데이터를 꺼낸다)
    dequeue() {
        return this.items.shift();
    }
    // peek 메서드 (큐의 맨 처음 데이터를 확인)
    peek() {
        return this.items[0];
    }
    // size 메서드 (현재 큐의 사이즈 변환)
    size() {
        return this.items.length;
    }
}
const stringQ = new GenericQueue();
stringQ.enqueue("Hello");
console.log(stringQ.peek());
stringQ.dequeue();
stringQ.enqueue("TypeScript");
console.log(stringQ.size());
console.log(stringQ.peek());
