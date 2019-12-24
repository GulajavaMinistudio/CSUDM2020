let kodebaris;
console.log(kodebaris);
kodebaris = 'kode undefined jadi berisi';
console.log(kodebaris);

let kodenull = null;
console.log(kodenull);
kodenull = `Nilainya tidak menjadi null ${kodebaris}`;
console.log(kodenull);

function randomsAngka(batasB) {
  return Math.floor(Math.random() * batasB) + 1;
}

function getRandomIntInclusive(min, max) {
  const mins = Math.ceil(min);
  const maxs = Math.floor(max);
  return Math.floor(Math.random() * (maxs - mins + 1)) + mins; // The maximum is inclusive and the minimum is inclusive
}

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getRandomInt(min, max) {
  const mins = Math.ceil(min);
  const maxs = Math.floor(max);
  return Math.floor(Math.random() * (maxs - mins)) + mins; // The maximum is exclusive and the minimum is inclusive
}

function getRandomBetween(min, max) {
  return Math.floor(Math.random() * (max - min - 1)) + min;
}

console.log(getRandomIntInclusive(5, 10));
console.log(getRandomArbitrary(5, 10));
console.log(randomsAngka(10));
console.log(getRandomInt(5, 10));
console.log(getRandomBetween(5, 10));
