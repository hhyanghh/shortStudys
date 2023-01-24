class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}

const students = [
  new Student("A", 29, false, 45),
  new Student("B", 28, true, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 19, true, 88),
];

const numbers = [1, 2, 3, 4, 5, 6, 7];
const fruits = ["딸기", "사과", "바나나", "배", "딸기", "메론"];

const result = students.find((student) => student.score === 90);
console.log(result);

const enrolledStudent = students.filter((student) => student.enrolled);
console.log(enrolledStudent);

const scoreArr = students.map((student) => student.score);
console.log(scoreArr);

const isLessthan50score = students.some((student) => student.score < 50);
console.log(isLessthan50score);

const averageSocre = students.reduce((prev, curr) => {
  return prev + curr.score / students.length;
}, 0);
console.log(averageSocre);

const ascendingOrderScore = students
  .map((student) => student.score)
  .sort((a, b) => a - b);

console.log(ascendingOrderScore);

console.log([11, 2, 22, 1].sort((a, b) => a - b));

console.log(["dream", "coding"].flatMap((text) => text.split("")));

const evenNumber = numbers.filter((num) => num % 2 === 0);
console.log(evenNumber);

// 학생들의 점수가 80점 이상인 학생들만
const lessThan80Score = students.filter((student) => student.score >= 80);
console.log(lessThan80Score);

console.clear();
const reduceResult = numbers.reduce((acc, cur, idx, src) => {
  console.log("acc: ", acc, "cur :", cur, "idx :", idx);

  return acc + cur;
}, 0);
console.log(reduceResult);
console.clear();

const reduceRepeat = fruits.reduce((acc, cur) => {
  if (acc.includes(cur) === false) {
    acc.push(cur);
  }
  return acc;
}, []);
console.log(reduceRepeat);
