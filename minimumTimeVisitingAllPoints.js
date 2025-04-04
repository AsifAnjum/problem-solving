//leetCode: 1266

class Solution {
  static firstMethod(arr) {
    //time: O(N)
    //space: O(1)
    let time = 0;
    for (let i = 1; i < arr.length; i++) {
      let [x1, y1] = arr[i - 1];

      let [x2, y2] = arr[i];

      time += Math.max(Math.abs(x2 - x1), Math.abs(y2 - y1));
    }

    return time;
  }
  static secondMethod(points) {
    let time = 0;
    let prev = [0, 0]; // Start from origin (0,0)

    for (let i = 0; i < points.length; i++) {
      let [x1, y1] = prev;
      let [x2, y2] = points[i];

      time += Math.max(Math.abs(x2 - x1), Math.abs(y2 - y1));
      prev = points[i]; // prev val updated
    }

    return time;
  }
}

const testCases = [
  {
    test: 1,
    input: [
      [1, 1],
      [3, 4],
      [-1, 0],
    ],
    expected: 7,
  },
  {
    test: 2,
    input: [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3],
    ],
    expected: 3,
  },
  {
    test: 3,
    input: [
      [2, 3],
      [2, 3],
      [2, 3],
    ],
    expected: 0,
  },
  {
    test: 4,
    input: [[0, 0]],
    expected: 0,
  },
  {
    test: 5,
    input: [
      [0, 0],
      [0, 3],
      [3, 3],
    ],
    expected: 6,
  },
  {
    test: 6,
    input: [
      [0, 0],
      [100, 100],
    ],
    expected: 100,
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
