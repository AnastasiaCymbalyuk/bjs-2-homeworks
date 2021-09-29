function compareArrays(arr1, arr2) {
  let result = arr1.length === arr2.length && arr1.every((element, index) => element === arr2[index]);
  return result;
};

function advancedFilter(arr) {
  let resultArr = arr.filter((index) => index > 0 && index % 3 === 0).map((index) => index * 10);
  return resultArr;
};