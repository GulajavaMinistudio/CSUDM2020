function bandingSama(nilaiA, nilaiB) {
  if (nilaiA === nilaiB) {
    return true;
  }
  return false;
}

function tidakBanding(nilaiA, nilaiB) {
  if (nilaiA !== nilaiB) {
    return true;
  }
  return false;
}

function bandingLebihBesar(nilaiA, nilaiB) {
  if (nilaiA > nilaiB) {
    return true;
  }
  return false;
}

console.log(bandingSama('10', 10));
console.log(bandingSama(10, 10));
console.log(bandingSama(10, 20));
console.log(bandingLebihBesar(5, 10));
console.log(bandingLebihBesar(15, 10));

// contoh komparasi ==
console.log('0' == 0);
console.log('b' === 'd');
console.log('true' == true);
console.log(0 == '');
console.log(undefined === null);

// contoh komparasi tidak sama
console.log(tidakBanding(10, '10'));
console.log(tidakBanding('5', '5'));
