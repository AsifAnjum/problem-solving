class Solution:
    @staticmethod
    #Time: O(N^2)
    def firstMethod(nums,target):
        
       
       for i in range(len(nums) - 1):
            for j in range(i + 1, len(nums)):
                if nums[i] + nums[j] == target:
                    return [i,j]
       return []
    
    
    @staticmethod
    #Time: O(N)
    def secondMethod(nums,target):
        hash_map = {}
        
        for i , v in enumerate(nums):
            if target - v in hash_map:
                return [hash_map[target-v],i]
            else:
                hash_map[v] = i      

        return []



testCases = [
    {
        "test": 1,
        "input": [1, 3, 2, 4, 5, 7],
        "target": 6,
        "expected": [
            [0, 4],
            [2, 3],
        ],
    },
    {
        "test": 2,
        "input": [1, 2, 3],
        "target": 7,
        "expected": [],
    },
    {
        "test": 3,
        "input": [1, 3, 2, 4],
        "target": 5,
        "expected": [
            [0, 3],
            [1, 2],
        ],
    },
    {
        "test": 4,
        "input": [4, 5],
        "target": 9,
        "expected": [[0, 1]],
    },
    {
        "test": 5,
        "input": [1, 3, 2, 4, 5, 7],
        "target": 6,
        "expected": [
            [0, 4],
            [2, 3],
        ],
    },
    {
        "test": 6,
        "input": [-1, -2, -3, -4, -5],
        "target": -8,
        "expected": [[2, 4]],
    },
    {
        "test": 7,
        "input": [5],
        "target": 10,
        "expected": [],
    },
    {
        "test": 8,
        "input": [1, 1, 3, 4],
        "target": 5,
        "expected": [
            [0, 3],
            [1, 3],
        ],
    },
    {
        "test": 9,
        "input": [],
        "target": 5,
        "expected": [],
    },
    {
        "test": 10,
        "input": [1.5, 2.5, 3.0, 4.5],
        "target": 7.0,
        "expected": [[1, 3]],
    },
    {
        "test": 11,
        "input": [2, 2, 3, 5],
        "target": 4,
        "expected": [[0, 1]],
    },
    {
        "test": 12,
        "input": [7, 7, 7, 7],
        "target": 14,
        "expected": [
            [0, 1],
            [0, 2],
            [0, 3],
            [1, 2],
            [1, 3],
        ],
    },
    {
        "test": 13,
        "input": [0,2,4,6],
        "target": 2,
        "expected": [[0, 1]],
    },
    {
        "test": 14,
        "input": [9, 7, 5, 3, 1],
        "target": 10,
        "expected": [
            [0, 4],
            [1, 3],
        ],
    },
    {
        "test": 15,
        "input": [1, 3, 5, 7, 9],
        "target": 8,
        "expected": [
            [0, 3],
            [1, 2],
        ],
    },
    {
        "test": 16,
        "input": [4, 3, 2, 7, 1, 5],
        "target": 6,
        "expected": [
            [0, 2],
            [4, 5],
        ],
    },
    {
        "test": 17,
        "input": [1, 2, 3, 4, 5, 6],
        "target": 7,
        "expected": [
            [0, 5],
            [1, 4],
            [2, 3],
        ],
    },
    {
        "test": 18,
        "input": [-5, 3, 4, 1, 6],
        "target": 1,
        "expected": [[0, 4]],
    },
    {
        "test": 19,
        "input": [5, 5, 5, 5, 5],
        "target": 12,
        "expected": [],
    },
    {
        "test": 20,
        "input": [5, 3, 2, 7, 8],
        "target": 15,
        "expected": [[3, 4]],
    },
    {
        "test": 21,
        "input": [-3, 1, 4, -1, 2],
        "target": 0,
        "expected": [
            [0, 3],
            [1, 3],
        ],
    },
    {
        "test": 22,
        "input": [8, 8],
        "target": 16,
        "expected": [[0, 1]],
    },
]

for index, test_case in enumerate(testCases):
    print(f"Test Case {test_case.get('test')}:")
    print(f"First Method: {Solution.firstMethod(test_case.get('input'), test_case.get('target'))}")
    print(f"Second Method: {Solution.secondMethod(test_case.get('input'), test_case.get('target'))}")
    print(f"Expected: {test_case.get('expected')}")

    print('---------------------') 