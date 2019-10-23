"use strict";

// Complete this algo
const binarySearch = (array, target) => {
  let midPoint = Math.floor(array.length / 2);
  console.log(midPoint);
  if (
    array[midPoint] === target ||
    (array.length === 1 && array[0] === target)
  ) {
    return true;
  }

  if (array[midPoint] > target) {
    array = array.slice(0, midPoint);
    //REMEMBER TO RETURN WHEN RECURSING!!!!!!!!!!!!!!!!!!!!
    return binarySearch(array, target);
  }

  if (array[midPoint] < target && array.length !== 1) {
    array = array.slice(midPoint + 1);
    //REMEMBER TO RETURN WHEN RECURSING!!!!!!!!!!!!!!!!!!!!
    console.log(array);
    return binarySearch(array, target);
  } else {
    return false;
  }
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch;
