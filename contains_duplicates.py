class Solution:
    @staticmethod
    def firstMethod(arr):
    #  time and Space: O(N^2)
        for i in range(0,len(arr)):
            for j in range(i+1, len(arr)):
                if(arr[i] == arr[j]):
                    return True
        
        return False
    
    
    @staticmethod
    def secondMethod(arr):
    # time and space complexity : O(N).
        if(len(set(arr)) == len(arr)):
            return False
        
        return True   
    
    
arr1 = [1, 2, 3, 1]
arr2 = [1, 2, 3, 4]
arr3 = [1, 1, 1, 3, 3, 4, 3, 2, 4]

print('First Method')
print(Solution.firstMethod(arr1))
print(Solution.firstMethod(arr2))
print(Solution.firstMethod(arr3))

print('Second Method')
print(Solution.secondMethod(arr1))
print(Solution.secondMethod(arr2))
print(Solution.secondMethod(arr3))



