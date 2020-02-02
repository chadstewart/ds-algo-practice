function binarySearch(sortedArray, target) {
  let start = 0;
  let end = sortedArray.length;

  while(start < end) {
    let middle = start + Math.floor((end - start) / 2);

    if(target === sortedArray[middle]) {
      return middle;
    } else if (target < sortedArray[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }

  return -1;
}
  