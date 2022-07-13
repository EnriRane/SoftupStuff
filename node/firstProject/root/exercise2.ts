function getLengthOfLastWord(name: string) {
  const stringArray = name.split(' ');
  return stringArray[stringArray.length - 1].length;
}

export { getLengthOfLastWord };
