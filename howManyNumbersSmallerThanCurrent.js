// Problem: How Many Numbers Are Smaller Than the Current Number
// LeetCode: 1365

// Problem Description:
// Given an array nums, for each nums[i], count how many numbers are smaller than it.
// Return the result as an array.

class Solution {
  static firstMethod(nums) {
    //time: O(N^2)
    const result = [];
    for (let i = 0; i < nums.length; i++) {
      let count = 0;
      for (let j = 0; j < nums.length; j++) {
        if (nums[i] > nums[j]) {
          count += 1;
        }
      }
      result[i] = count;
    }
    return result;
  }

  static secondMethod(nums) {
    //time: O(N log N)
    //space: O(N)
    const sortedArr = nums.toSorted((a, b) => a - b);
    const obj = {};

    for (let i = 0; i < sortedArr.length; i++) {
      if (!obj.hasOwnProperty(sortedArr[i])) {
        obj[sortedArr[i]] = i;
      }
    }

    const result = [];

    for (const num of nums) {
      result.push(obj[num]);
    }
    return result;
  }
}

const testCases = [
  {
    test: 1,
    input: [8, 1, 2, 2, 3],
    expected: [4, 0, 1, 1, 3],
  },
  {
    test: 2,
    input: [6, 5, 4, 8],
    expected: [2, 1, 0, 3],
  },
  {
    test: 3,
    input: [7, 7, 7, 7],
    expected: [0, 0, 0, 0],
  },
  {
    test: 4,
    input: [5, 4, 3, 2, 1],
    expected: [4, 3, 2, 1, 0],
  },
  {
    test: 5,
    input: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    expected: [9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
  },
  {
    test: 6,
    input: [1, 1, 1, 1],
    expected: [0, 0, 0, 0],
  },
  {
    test: 7,
    input: [3, 9, 5, 1, 7],
    expected: [1, 4, 2, 0, 3],
  },
  {
    test: 8,
    input: [1, 2, 3, 4],
    expected: [0, 1, 2, 3],
  },
  {
    test: 9,
    input: [5, 5, 6, 7],
    expected: [0, 0, 2, 3],
  },
  {
    test: 10,
    input: [10, 10, 10, 10, 5],
    expected: [1, 1, 1, 1, 0],
  },
  {
    test: 11,
    input: [8, 1, 6, 2],
    expected: [3, 0, 2, 1],
  },
  {
    test: 12,
    input: [10, 15, 12, 5],
    expected: [1, 3, 2, 0],
  },
  {
    test: 13,
    input: [1, 2, 2, 3, 1, 4],
    expected: [0, 2, 2, 4, 0, 5],
  },
  {
    test: 14,
    input: [5, 5, 6, 4, 6],
    expected: [1, 1, 3, 0, 3],
  },
  {
    test: 15,
    input: [1, 0, 1, 0],
    expected: [2, 0, 2, 0],
  },
  {
    test: 16,
    input: [7, 3, 8, 3],
    expected: [2, 0, 3, 0],
  },
  {
    test: 17,
    input: [9, 4, 6, 5],
    expected: [3, 0, 2, 1],
  },
  {
    test: 18,
    input: [0, 0, 0, 0],
    expected: [0, 0, 0, 0],
  },
  {
    test: 19,
    input: [3, 6, 7, 2, 4],
    expected: [1, 3, 4, 0, 2],
  },
  {
    test: 20,
    input: [9, 3, 8, 2, 7],
    expected: [4, 1, 3, 0, 2],
  },
];

testCases.forEach((testCase) => {
  console.log(`Test Case ${testCase.test}:`);

  console.log(`Input: ${JSON.stringify(testCase.input)}`);

  console.log(
    `First Method: ${JSON.stringify(Solution.firstMethod(testCase.input))}`
  );

  console.log(
    `Second Method: ${JSON.stringify(Solution.secondMethod(testCase.input))}`
  );

  console.log(`Expected: ${JSON.stringify(testCase.expected)}`);
  console.log("---------------------");
});
