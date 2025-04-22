class Solution:

    @staticmethod
    def first_method(s):
        # time: O(N)
        # space: O(N)
        reversed_s = s[::-1]
        return s == reversed_s

    @staticmethod
    def second_method(s):
        # time: O(N)
        # space: O(1)
        left = 0
        right = len(s) - 1

        while left < right:
            if s[left] != s[right]:
                return False
            left += 1
            right -= 1
        return True

# Test cases
test_cases = [
    {
        'test': 1,
        'input': "madam",
        'expected': True,
    },
    {
        'test': 2,
        'input': "racecar",
        'expected': True,
    },
    {
        'test': 3,
        'input': "hello",
        'expected': False,
    },
    {
        'test': 4,
        'input': "noon",
        'expected': True,
    },
    {
        'test': 5,
        'input': "abcd",
        'expected': False,
    },
    {
        'test': 6,
        'input': "civic",
        'expected': True,
    },
]

for test_case in test_cases:
    print(f"Test Case {test_case['test']}:")
    print(f"Input: \"{test_case['input']}\"")

    print(f"First Method: {Solution.first_method(test_case['input'])}")
    print(f"Second Method: {Solution.second_method(test_case['input'])}")

    print(f"Expected: {test_case['expected']}")
    print("---------------------")
