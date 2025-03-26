//leetCode: 217
class Solution {
  static firstMethod(arr) {
    // time : O(N^2)
    // space: O(1)
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] == arr[j]) {
          return true;
        }
      }
    }
    return false;
  }

  static secondMethod(arr) {
    // time and space complexity : O(N).
    const n = new Set(arr);
    if (n.size == arr.length) {
      return false;
    }
    return true;
  }

  static thirdMethod(arr) {
    // time: O(N^2)
    // space: O(N)
    const tempArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] in tempArr) {
        return true;
      } else {
        tempArr.push(arr[i]);
      }
    }
    return false;
  }
}

const arr1 = [1, 2, 3, 1];
const arr2 = [1, 2, 3, 4];
const arr3 = [1, 1, 1, 3, 3, 4, 3, 2, 4];

console.log("First Method");
console.log(Solution.firstMethod(arr1));
console.log(Solution.firstMethod(arr2));
console.log(Solution.firstMethod(arr3));

console.log("Second Method");

console.log(Solution.secondMethod(arr1));
console.log(Solution.secondMethod(arr2));
console.log(Solution.secondMethod(arr3));

console.log("Third Method");
console.log(Solution.thirdMethod(arr1));
console.log(Solution.thirdMethod(arr2));
console.log(Solution.thirdMethod(arr3));
