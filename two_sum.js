//leet code: 1

class Solution {
  static firstMethod(nums, t) {
    //time: O(N^2)
    for (let i = 0; i < nums.length - 1; i++) {
      let tempNumber = nums[i];
      for (let j = i + 1; j < nums.length; j++) {
        if (tempNumber + nums[j] == t) {
          return [i, j];
        }
      }
    }
    return [];
  }

  static secondMethod(nums, t) {
    //time: O(N)
    const hashMap = new Map();

    for (let i = 0; i < nums.length; i++) {
      if (hashMap.has(t - nums[i])) {
        return [hashMap.get(t - nums[i]), i];
      } else {
        hashMap.set(nums[i], i);
      }
    }
    return [];
  }
}

const testCases = [
  {
    test: 1,
    input: [1, 3, 2, 4, 5, 7],
    target: 6,
    expected: [
      [0, 4],
      [2, 3],
    ],
  },
  {
    test: 2,
    input: [1, 2, 3],
    target: 7,
    expected: [],
  },
  {
    test: 3,
    input: [1, 3, 2, 4],
    target: 5,
    expected: [
      [0, 3],
      [1, 2],
    ],
  },
  {
    test: 4,
    input: [4, 5],
    target: 9,
    expected: [[0, 1]],
  },
  {
    test: 5,
    input: [1, 3, 2, 4, 5, 7],
    target: 6,
    expected: [
      [0, 4],
      [2, 3],
    ],
  },
  {
    test: 6,
    input: [-1, -2, -3, -4, -5],
    target: -8,
    expected: [[2, 4]],
  },
  {
    test: 7,
    input: [5],
    target: 10,
    expected: [],
  },
  {
    test: 8,
    input: [1, 1, 3, 4],
    target: 5,
    expected: [
      [0, 3],
      [1, 3],
    ],
  },
  {
    test: 9,
    input: [],
    target: 5,
    expected: [],
  },
  {
    test: 10,
    input: [1.5, 2.5, 3.0, 4.5],
    target: 7.0,
    expected: [[1, 3]],
  },
  {
    test: 11,
    input: [2, 2, 3, 5],
    target: 4,
    expected: [[0, 1]],
  },
  {
    test: 12,
    input: [7, 7, 7, 7],
    target: 14,
    expected: [
      [0, 1],
      [0, 2],
      [0, 3],
      [1, 2],
      [1, 3],
    ],
  },
  {
    test: 13,
    input: Array(10 ** 6).fill(1),
    target: 2,
    expected: [[0, 1]],
  },
  {
    test: 14,
    input: [9, 7, 5, 3, 1],
    target: 10,
    expected: [
      [0, 4],
      [1, 3],
    ],
  },
  {
    test: 15,
    input: [1, 3, 5, 7, 9],
    target: 8,
    expected: [
      [0, 3],
      [1, 2],
    ],
  },
  {
    test: 16,
    input: [4, 3, 2, 7, 1, 5],
    target: 6,
    expected: [
      [0, 2],
      [4, 5],
    ],
  },
  {
    test: 17,
    input: [1, 2, 3, 4, 5, 6],
    target: 7,
    expected: [
      [0, 5],
      [1, 4],
      [2, 3],
    ],
  },
  {
    test: 18,
    input: [-5, 3, 4, 1, 6],
    target: 1,
    expected: [[0, 4]],
  },
  {
    test: 19,
    input: [5, 5, 5, 5, 5],
    target: 12,
    expected: [],
  },
  {
    test: 20,
    input: [5, 3, 2, 7, 8],
    target: 15,
    expected: [[3, 4]],
  },
  {
    test: 21,
    input: [-3, 1, 4, -1, 2],
    target: 0,
    expected: [
      [0, 3],
      [1, 3],
    ],
  },
  {
    test: 22,
    input: [8, 8],
    target: 16,
    expected: [[0, 1]],
  },
];

testCases.forEach((testCase) => {
  const firstMethodResult = Solution.firstMethod(
    testCase.input,
    testCase.target
  );
  const secondMethodResult = Solution.secondMethod(
    testCase.input,
    testCase.target
  );

  console.log(`Test Case ${testCase.test}:`);

  console.log(`First Method: ${JSON.stringify(firstMethodResult)}`);

  console.log(`Second Method: ${JSON.stringify(secondMethodResult)}`);

  console.log(`Expected: ${JSON.stringify(testCase.expected)}`);
  console.log("---------------------");
});
