// Destructuring assignment
// object
{
	const students = {
		name: 'Anna',
		level: 1,
	};

	const {name, level} = students;
	console.log(name, level);

	const {name: studentName, level: studetnLevel} = students;
	console.log(studentName);
}

// Array
{
	const animals = ['puppy', 'cat'];
	const [first, second] = animals;
	console.log(first, second);
}

// 기존
{
	const animals = ['puppy', 'cat']; 

	const first = animals[0];
	console.log(first);
}

// Spread syntax ...
// ⭐️ 기존의 object의 값을 바꾸면 모든 값이 바뀐다.

// array copy
{
	const obj1 = {key: 'key1'};
	const obj2 = {key: 'key2'};
	const array = [obj1, obj2];

	const arrayCopy = [...array];
	console.log(array, arrayCopy);

	const arrayCopy2 = [...array, {key: 'key3'}];
	console.log(arrayCopy2);

	// object copy
	const obj3 = {...obj1};
	console.log(obj3);
}

// array concatenation
{
	const drink = ['americano', 'lattee'];
	const food = ['sandwich', 'cake'];

	const starbucks = [...drink, ...food];
	console.log(starbucks);
}

// object merge
// ⭐️ key가 같은 object를 병합시키면 제일 마지막 값이 덮어진다.
{
	const dog1 = {dog: '꼬북'};
	const dog2 = {dog: '니모'};

	const dog = {...dog1, ...dog2};
	console.log(dog);
}

// Default parameters
{
	function printMessage(message = 'default message') {
		console.log(message);
	};

	printMessage(); // default message
	printMessage('hello'); //hello
}

// Ternary Operator
{
	const isCat = true;
	const component = isCat ? 'cat' : 'puppy';
	console.log(component);
}

// Template Literals
console.log(`오늘 날씨는 ${23}도 입니다. 날씨가 좋쥬?`);

// Optional Chaning
{
	const person1 = {
		name: 'Ellie',
		job: {
			title: 'S/W Engineer',
			manager: {
				name: 'Tommy',
			},
		},
	};
	const person2 = {
		name: 'Bob',
	}

	function printManager(person) {
		console.log(person.job.manager.name);
	}

	printManager(person1);
	// printManager(person2);

	function printManager2(person) {
		console.log(person.job?.manager?.name);
	}
	printManager2(person1);
	printManager2(person2);
}

// Nullish coalescing operator
{
	const name = 'Ellie';
	const userName = name || 'Guest';
	console.log(userName);
	// 앞이 false일때만 뒤의 구문이 실행된다.
	// name이 false가 아니니까 Ellie 가 출력됨

	const num = 0;
	const message = num || 'Noop!';
	console.log(message);
	// num을 0으로 선언했지만, 0은 false값으로 간주하기때문에 Noop이 출력됨.
}

{
	const name = ' ';
	const userName = name ?? 'Guest';
	console.log(userName); // ' '

	const num = 0;
	const message = num ?? 'Noop!';
	console.log(message);
}