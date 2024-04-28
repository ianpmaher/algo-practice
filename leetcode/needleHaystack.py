"""
38 find needle in haystack
28 Find first occurrence in a string
Given two strings, needle and haystack, return the first index of the needle in the haystack. If the needle is not in the haystack, return -1.
Example 1:
Input: needle = "ll", haystack = "hello"
Output: 2
Example 2:
Input: needle = "bba", haystack = "dog cat fish"
Output: -1
"""

class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        # length of substrings -- can optimize so don't iterate through substrings shorter than actual needle
        for i in range(len(haystack) - len(needle) + 1):
            # check if any substring of haystack is equal to needle:
            if haystack[i : i+len(needle)] == needle:
                # if yes, return the first index of substring
                return i
        # if exit loop without finding substring (aka doesn't exist), return -1
        return -1