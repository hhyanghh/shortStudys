// 인수 전달에는 갯수제한이 없다.
function showName(name) {
	console.log(name);
}

showName('Mike', 'Tom'); //"Mike"
showName(); // undefined

function showCoffee(coffee) {
	console.log(arguments.length);
	console.log(arguments[0]);
	console.log(arguments[1]);
};

showCoffee('iced americano', 'iced latte');

// 나머지 매개변수 (Rest parameners)
function showDessert(...dessert) {
	console.log(dessert);
}

showDessert();
showDessert('cake');
showDessert('cake', 'cookie');

// 전달받은 모든 수를 더해야 한다.
function add(...numbers) {
	let result = 0;
	numbers.forEach((num) => (result += num));
	console.log(result);
}

add(1,2,3);
add(1,2,3,4,5,6,7,8,9,10);

// numbers는 배열이다.
// lengths가 있기 때문에 forEach, for문 등의 배열메서드를 사용할 수 있다.

// map 사용해보기
function add2(...numbers) {
	let result = 0;
	numbers.map((num) => {result += num});
	console.log(result);
}

add2(2,4,6);
add2(1,2,3,4,5,6,7,8,9,10);

// reduce 사용해보기
function add3(...numbers) {
	let result = numbers.reduce((prev, cur) => prev + cur);

	console.log(result);
}

add3(1,3,6);

// user 객체를 만들어주는 생성자 함수 만들어보기
function User(name, age, ...skills) {
	this.name = name;
	this.age = age;
	this.skills = skills;
}

const user1 = new User("Mike", 30, "html", "CSS");
const user2 = new User("Jane", 20, "React", "JS");
const user3 = new User("Tommy", 19, "English");

console.log("user1", user1);
console.log("user2", user2);
console.log("user3", user3);

// Spread syntax : 배열
let arr1 = [1,2,3];
let arr2 = [4,5,6];

let result = [...arr1, ...arr2];
console.log(result);

let result2 = [0, ...arr1, ...arr2, 7,8,9];
console.log(result2);

// Spread syntax : 객체
let menu = {coffee: 'iced americano'};
let todayEat = {...menu, eat:"삼겹살"};

console.log(todayEat);

// arr3을 [4,5,6,1,2,3]; 으로
arr3 = [...arr2, ...arr1];
console.log(arr3);

let me = {name: "HyunHwa"};
let age = {age: 30};
let fe = ["JS", "React", "HTML", "CSS"];
let lang = ["Korean", "English"];

profile = {
	...me,
	...age,
	skills: [
		...fe,
		...lang
	],
};

console.log(profile);