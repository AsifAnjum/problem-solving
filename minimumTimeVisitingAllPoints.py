class Solution:
    @staticmethod
    #Time: O(N)
    #Space: O(1)
    def firstMethod(arr):
        time = 0;
        for i in range(1,len(arr)):
            x1,y1 = arr[i-1]
            x2,y2 = arr[i]
            
            time += max(abs(x2-x1), (y2-y1))
        
        return time
    
    @staticmethod
    #Time: O(N)
    #Space: O(1)
    def secondMethod(arr):
        res = 0;
        x1,y1 = arr.pop()
        
        while arr:
            x2,y2 = arr.pop()
            res += max(abs(y2-y1), abs(x2-x1))
            
            x1,y1 = x2, y2
        
        return res


testCases = [
  {
    "test": 1,
    "input": [
      [1, 1],
      [3, 4],
      [-1, 0],
    ],
    "expected": 7,
  },
  {
    "test": 2,
    "input": [
      [0, 0],
      [1, 1],
      [2, 2],
      [3, 3],
    ],
    "expected": 3,
  },
  {
    "test": 3,
    "input": [
      [2, 3],
      [2, 3],
      [2, 3],
    ],
    "expected": 0,
  },
  {
    "test": 4,
    "input": [[0, 0]],
    "expected": 0,
  },
  {
    "test": 5,
    "input": [
      [0, 0],
      [0, 3],
      [3, 3],
    ],
    "expected": 6,
  },
  {
    "test": 6,
    "input": [
      [0, 0],
      [100, 100],
    ],
    "expected": 100,
  },
];


for index, test_case in enumerate(testCases):
    print(f"Test Case {test_case.get('test')}:")
    print(f"Input: {test_case.get('input')}")
    print(f"First Method: {Solution.firstMethod(test_case.get('input'))}")
    print(f"Second Method: {Solution.secondMethod(test_case.get('input'))}")
    print(f"Expected: {test_case.get('expected')}")

    print('---------------------') 