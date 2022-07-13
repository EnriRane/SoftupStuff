function getIndexesOfSumElements1(array: number[], target: number = 9) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}

function getIndexesOfSumElements2(
  array: number[],
  target: number = 9
): number[] {
  const map = new Map();
  for (let i = 0; i < array.length; i++) {
    let difference = target - array[i];
    if (map.has(difference)) {
      return [map.get(difference), i];
    }
    map.set(array[i], i);
  }
  return [];
}

export { getIndexesOfSumElements1, getIndexesOfSumElements2 };
