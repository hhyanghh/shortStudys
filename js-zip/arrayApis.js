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
