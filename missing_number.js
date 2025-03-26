//leet code: 448
class Solution {
  static firstMethod(nums) {
    //time & space: O(N)
    if (nums.length < 0) return [];
    const newSet = new Set(nums);
    const tempArr = [];
    for (let i = 1; i <= nums.length; i++) {
      if (!newSet.has(i)) {
        tempArr.push(i);
      }
    }
    return tempArr;
  }

  static secondMethod(nums) {
    //time & space: O(N)

    const seen = new Set();
    const tempArr = [];
    for (let num of nums) {
      seen.add(num);
    }
    for (let i = 1; i <= nums.length; i++) {
      if (!seen.has(i)) {
        tempArr.push(i);
      }
    }
    return tempArr;
  }

  static thirdMethod(nums) {
    //time: O(N^2)
    //space: O(N)
    const tempArr = [];
    for (let i = 1; i <= nums.length; i++) {
      if (!nums.includes(i)) {
        tempArr.push(i);
      }
    }
    return tempArr;
  }
}
const testCases = [
  [4, 3, 2, 7, 8, 2, 3, 1],
  [1, 1],
  [3, 1, 3, 5, 5],
  [],
  [1, 2, 3, 4, 5],
];

testCases.forEach((testCase, index) => {
  console.log(`Test Case ${index + 1}:`);
  console.log(
    `First Method: ${JSON.stringify(Solution.firstMethod(testCase))}`
  );
  console.log(
    `Second Method: ${JSON.stringify(Solution.secondMethod(testCase))}`
  );
  console.log(
    `Third Method: ${JSON.stringify(Solution.thirdMethod(testCase))}`
  );
  console.log("---------------------");
});
