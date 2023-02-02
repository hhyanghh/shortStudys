n0 = "n0";
var v0 = "v0";
let l0 = "l0";
const c0 = "c0";
console.log(v0, n0, l0, c0);
console.log(window.v0, window.n0, window.l0, window.c0);

function fn2() {
  n2 = "n2";
  console.log(n0, n1, n2);
  var v2 = "v2";
  console.log(v0, v2);
  // console.log(v1);
  let l2 = "l2";
  console.log(l0, l2);
  // console.log(l1);
  const c2 = "c2";
  console.log(c0, c2);
  // console.log(c1);
}

function fn1() {
  n1 = "n1";
  var v1 = "v1";
  let l1 = "l1";
  const c1 = "c1";
  fn2();
}

fn1();
console.log(n2);
// console.log(v2, l2, c2);
