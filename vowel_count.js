class Solution {

    static firstMethod(s) {
      // time: O(N)
      // space: O(1)
      const vowels = 'aeiouAEIOU'; 
      let count = 0;
      
      for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i])) {
          count++;
        }
      }
      return count;
    }
  
  
    static secondMethod(s) {
      // time: O(N)
      // space: O(1)
      const vowelSet = new Set('aeiouAEIOU');
      let count = 0;
      
      for (let i = 0; i < s.length; i++) {
        if (vowelSet.has(s[i])) {
          count++;
        }
      }
      return count;
    }
  }
  
  const testCases = [
    {
      test: 1,
      input: "hello",
      expected: 2,
    },
    {
      test: 2,
      input: "world",
      expected: 1,
    },
    {
      test: 3,
      input: "AEIOU",
      expected: 5,
    },
    {
      test: 4,
      input: "javascript",
      expected: 3,
    },
    {
      test: 5,
      input: "rhythm",
      expected: 0,
    },
    {
      test: 6,
      input: "aeiouAEIOU",
      expected: 10,
    },
  ];
  
  testCases.forEach((testCase) => {
    console.log(`Test Case ${testCase.test}:`);
    console.log(`Input: "${testCase.input}"`);
  
    // First Method
    const resultFirstMethod = Solution.firstMethod(testCase.input);
    console.log(`First Method: ${resultFirstMethod}`);
    console.log(`Time Complexity: O(N)`);
    console.log(`Space Complexity: O(1)`);
  
    // Second Method
    const resultSecondMethod = Solution.secondMethod(testCase.input);
    console.log(`Second Method: ${resultSecondMethod}`);
    console.log(`Time Complexity: O(N)`);
    console.log(`Space Complexity: O(1)`);
  
    // Expected result
    console.log(`Expected: ${testCase.expected}`);
    console.log("---------------------");
  });
  