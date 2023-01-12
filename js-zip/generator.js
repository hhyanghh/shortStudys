function* generatorSequence() {
  yield 1;
  yield 2;
  return 3;
}

let generator = generatorSequence();
console.log(generator);

let one = generator.next();
console.log(JSON.stringify(one));

let two = generator.next();
console.log(JSON.stringify(two));

let three = generator.next();
console.log(JSON.stringify(three));
