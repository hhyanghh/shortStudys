// 0911 study 정리
// 구조분해할당 
// 구조 분해 할당 구문은 배열이나 객체의 속성을 분해해서 그 값을 변수에 담을 수 있게 하는 표현식이다.

let [x,y] = [1,2];

console.log(x);
console.log(y);

let users = ["Mike", "Tom", "jane"];
let [user1, user2, user3] = users;

console.log(user1);
console.log(user2);
console.log(user3);

// 배열 구조 분해
let str = "Mike-Tom-Jane";
let [user4, user5, user6] = str.split('-');

console.log(user4);
console.log(user5);
console.log(user6);

// 배열 구조 분해 : 기본값
// let [a,b,c] = [1,2];

let [a=3, b=4, c=5] = [1,2];
console.log(a);
console.log(b);
console.log(c);

// 일부 반환값 무시
let [user7, , user8] = ['Mike', 'Tom', 'Jane', 'Tony'];
console.log(user7);
console.log(user8);

// 바꿔치기
let bread = '냐미냐미';
let coffee = '꿀꺽꿀꺽';

[bread, coffee] = [coffee, bread];
console.log(bread);
console.log(coffee);

// 객체 구조 분해
let todayEat = {drink: "Americano", eat: "grilled bla"  };
let {drink, eat} = todayEat;

console.log(drink);
console.log(eat);

// 객체 구조 분해 : 기본값
let user10 = {name: "Tommy", age: 30, gender: "female"};
let {name, age = 20, gender = "male"} = user10;
console.log(user10);

// 할당 연산자 우측엔 모든 이터러블이 올 수 있다.
let [d,e,f] = "def";
console.log(d);

// 할당 연산자 좌측엔 모든지 올 수 잇다.
let ooffee = {};
[ooffee.music, ooffee.dessert] =  "Iced coffee".split(' ');
console.log(ooffee.music);
