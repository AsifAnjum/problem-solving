
class Solution:
    @staticmethod
    #Time: O(N^2)
    def firstMethod(nums):
       res = []
        
       for i in range(len(nums)):
           count = 0;
           for j in range(len(nums)):
                if nums[i] > nums[j]:
                    count +=1
           res.append(count) 
       return res
    
    
    @staticmethod
    #Time: O(N Log N)
    #Space: O(N)
    def secondMethod(nums):
        temp = sorted(nums)
        d = {}
        
        for i,num in enumerate(temp):
            if num not in d:
                d[num] = i
            
        res = []
        
        for num in nums:
            res.append(d[num])
        
        return res


testCases = [
    {
        "test": 1,
        "input": [8, 1, 2, 2, 3],
        "expected": [4, 0, 1, 1, 3],
    },
    {
        "test": 2,
        "input": [6, 5, 4, 8],
        "expected": [2, 1, 0, 3],
    },
    {
        "test": 3,
        "input": [7, 7, 7, 7],
        "expected": [0, 0, 0, 0],
    },
    {
        "test": 4,
        "input": [5, 4, 3, 2, 1],
        "expected": [4, 3, 2, 1, 0],
    },
    {
        "test": 5,
        "input": [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
        "expected": [9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
    },
    {
        "test": 6,
        "input": [1, 1, 1, 1],
        "expected": [0, 0, 0, 0],
    },
    {
        "test": 7,
        "input": [3, 9, 5, 1, 7],
        "expected": [1, 4, 2, 0, 3],
    },
    {
        "test": 8,
        "input": [1, 2, 3, 4],
        "expected": [0, 1, 2, 3],
    },
    {
        "test": 9,
        "input": [5, 5, 6, 7],
        "expected": [0, 0, 2, 3],
    },
    {
        "test": 10,
        "input": [10, 10, 10, 10, 5],
        "expected": [1, 1, 1, 1, 0],
    },
    {
        "test": 11,
        "input": [8, 1, 6, 2],
        "expected": [3, 0, 2, 1],
    },
    {
        "test": 12,
        "input": [10, 15, 12, 5],
        "expected": [1, 3, 2, 0],
    },
    {
        "test": 13,
        "input": [1, 2, 2, 3, 1, 4],
        "expected": [0, 2, 2, 4, 0, 5],
    },
    {
        "test": 14,
        "input": [5, 5, 6, 4, 6],
        "expected": [1, 1, 3, 0, 3],
    },
    {
        "test": 15,
        "input": [1, 0, 1, 0],
        "expected": [2, 0, 2, 0],
    },
    {
        "test": 16,
        "input": [7, 3, 8, 3],
        "expected": [2, 0, 3, 0],
    },
    {
        "test": 17,
        "input": [9, 4, 6, 5],
        "expected": [3, 0, 2, 1],
    },
    {
        "test": 18,
        "input": [0, 0, 0, 0],
        "expected": [0, 0, 0, 0],
    },
    {
        "test": 19,
        "input": [3, 6, 7, 2, 4],
        "expected": [1, 3, 4, 0, 2],
    },
    {
        "test": 20,
        "input": [9, 3, 8, 2, 7],
        "expected": [4, 1, 3, 0, 2],
    },
]


for index, test_case in enumerate(testCases):
    print(f"Test Case {test_case.get('test')}:")
    print(f"Input: {test_case.get('input')}")
    print(f"First Method: {Solution.firstMethod(test_case.get('input'))}")
    print(f"Second Method: {Solution.secondMethod(test_case.get('input'))}")
    print(f"Expected: {test_case.get('expected')}")

    print('---------------------') 