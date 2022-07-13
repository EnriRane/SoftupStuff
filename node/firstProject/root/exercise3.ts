function dec2bin(dec: number) {
  return (dec >>> 0).toString(2);
}

function findHammingDistance(nr1: number, nr2: number) {
  let nr1InBinary = dec2bin(nr1);
  let nr2InBinary = dec2bin(nr2);
  let count = 0;

  const quantityOfZeros = Math.abs(nr2InBinary.length - nr1InBinary.length);
  let zeros = '';
  for (let i = 0; i < quantityOfZeros; i++) {
    zeros = zeros + '0';
  }
  if (nr1InBinary.length < nr2InBinary.length) {
    nr1InBinary = zeros + nr1InBinary;
  } else if (nr1InBinary > nr2InBinary) {
    nr2InBinary = zeros + nr2InBinary;
  }

  for (let i = nr1InBinary.length; i >= 0; i--) {
    if (nr1InBinary[i] !== nr2InBinary[i]) {
      count++;
    }
  }
  return count;
}

export { findHammingDistance };
