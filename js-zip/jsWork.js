var a = 1;
function outer() {
  function inner() {
    console.log(a); // 1-1
    var a = 3;
  }
  inner();
  console.log(a); // 1-2
}
outer();
console.log(a);
