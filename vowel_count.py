class Solution:

    @staticmethod
    def firstMethod(s):
        # time: O(N)
        # space: O(1)
        vowels = 'aeiouAEIOU'  # string of vowels
        count = 0

        for char in s:
            if char in vowels:
                count += 1
        return count

    @staticmethod
    def secondMethod(s):
        # time: O(N)
        # space: O(1)
        vowelSet = set('aeiouAEIOU')  # set of vowels for fast lookup
        count = 0

        for char in s:
            if char in vowelSet:
                count += 1
        return count



testCases = [
    {
        "test": 1,
        "input": "hello",
        "expected": 2,
    },
    {
        "test": 2,
        "input": "world",
        "expected": 1,
    },
    {
        "test": 3,
        "input": "AEIOU",
        "expected": 5,
    },
    {
        "test": 4,
        "input": "javascript",
        "expected": 3,
    },
    {
        "test": 5,
        "input": "rhythm",
        "expected": 0,
    },
    {
        "test": 6,
        "input": "aeiouAEIOU",
        "expected": 10,
    },
]


for testCase in testCases:
    print(f"Test Case {testCase['test']}:")
    print(f"Input: \"{testCase['input']}\"")


    resultFirstMethod = Solution.firstMethod(testCase['input'])
    print(f"First Method: {resultFirstMethod}")
    print("Time Complexity: O(N)")
    print("Space Complexity: O(1)")


    resultSecondMethod = Solution.secondMethod(testCase['input'])
    print(f"Second Method: {resultSecondMethod}")
    print("Time Complexity: O(N)")
    print("Space Complexity: O(1)")


    print(f"Expected: {testCase['expected']}")
    print("---------------------")
