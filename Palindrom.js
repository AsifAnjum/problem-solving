class Solution {

    static firstMethod(s) {
      // time: O(N)
      // space: O(N)
      const reversed = s.split('').reverse().join('');
      return s === reversed;
    }
  
    static secondMethod(s) {
      // time: O(N)
      // space: O(1)
      let left = 0;
      let right = s.length - 1;
  
      while (left < right) {
        if (s[left] !== s[right]) {
          return false;
        }
        left++;
        right--;
      }
      return true;
    }
  }
  
  const testCases = [
    {
      test: 1,
      input: "madam",
      expected: true,
    },
    {
      test: 2,
      input: "racecar",
      expected: true,
    },
    {
      test: 3,
      input: "hello",
      expected: false,
    },
    {
      test: 4,
      input: "noon",
      expected: true,
    },
    {
      test: 5,
      input: "abcd",
      expected: false,
    },
    {
      test: 6,
      input: "civic",
      expected: true,
    },
  ];
  
  testCases.forEach((testCase) => {
    console.log(`Test Case ${testCase.test}:`);
    console.log(`Input: "${testCase.input}"`);
  
    console.log(
      `First Method: ${JSON.stringify(Solution.firstMethod(testCase.input))}`
    );

    console.log(
      `Second Method: ${JSON.stringify(Solution.secondMethod(testCase.input))}`
    );
  
    console.log(`Expected: ${JSON.stringify(testCase.expected)}`);
    console.log("---------------------");
  });
  