class Solution:
    @staticmethod
    #Time & Space: O(N)
    def firstMethod(nums):
        set_nums = set(nums)
        missing_nums = []
        for i in range(1,len(nums)+1):
           if i not in set_nums:
               missing_nums.append(i)
        
        return missing_nums
    
    


testCases = [
  [4, 3, 2, 7, 8, 2, 3, 1],
  [1, 1],
  [3, 1, 3, 5, 5],
  [],
  [1, 2, 3, 4, 5],
];

for index, test_case in enumerate(testCases):
    print(f"Test Case {index + 1}:")
    print(f"First Method: {Solution.firstMethod(test_case)}")
    print('---------------------') 