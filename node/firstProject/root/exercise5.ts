function reverseBits(numberInBits: string) {
  let reversedNumber = '';
  for (let i = numberInBits.length; i > 0; i--) {
    reversedNumber = reversedNumber + numberInBits.charAt(i);
  }
  return reversedNumber;
}

export { reverseBits };
