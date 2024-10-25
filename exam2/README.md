### Time Complexity

The time complexity of the function `isBalanced` is O(n), where n is the length of the input string. The function scans through the input string once, and each character is processed either by pushing it onto the stack or by popping from the stack, both of which are O(1) operations.

### Space Complexity

The space complexity is O(n) in the worst case, where all the characters in the input string are opening brackets. In this case, all of them will be pushed onto the stack.
Hence, the overall complexity is:

- Time Complexity: O(n)
- Space Complexity: O(n)
