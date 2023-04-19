const JellyLeadingStudy = function (name, joinDate) {
  const n = name;
  this.getName = function () {
    console.log(n);
  };
  this.joinDate = joinDate;
};

JellyLeadingStudy.prototype = {
  constructor: JellyLeadingStudy,
  company: "FASSTO",
  team: "FRONT",
  like() {
    console.log("곤약젤리를 좋아합니다.");
  },
};

const 현화 = new JellyLeadingStudy("현화", "2022-12");
const 하은 = new JellyLeadingStudy("하은", "2022-12");
const 희정 = new JellyLeadingStudy("희정", "2023-03");
const 보연 = new JellyLeadingStudy("보연", "2023-04");
const 재경 = new JellyLeadingStudy("재경", "2023-04");
console.log(현화.getName());
console.log(현화.team);
console.log(현화.like());
console.log(보연.like());

// prototype을 사용할 때, constructor 프로퍼티를 명시하는 것은 중요하다.
// constructor 프로퍼티는 객체를 만들 때 사용된 생성자 함수를 참조한다.
// constructor 프로퍼티를 명시하지 않으면, 객체가 상속받은 경우 생성자 함수가 제대로 참조되지 않을 수 있다.

console.log(현화 instanceof JellyLeadingStudy);
console.log(현화.constructor === JellyLeadingStudy);

// 이름은 바꿀 수 없어야한다. (closure 복습!)

for (p in 현화) {
  console.log(p);
}
for (p in 현화) {
  if (현화.hasOwnProperty(p)) {
    console.log("o", p);
  } else {
    console.log("x", p);
  }
}
console.log(Object.keys(현화));
