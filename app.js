/*
A string S consisting of N characters is considered to be properly nested if any of the following
conditions is true:
 S is empty;
 S has the form "(U)" or "[U]" or "{U}" where U is a properly nested string;
 S has the form "VW" where V and W are properly nested strings.
For example, the string "{[()()]}" is properly nested but "([)()]" is not.
Write a function:
class Solution { public int solution(String S); }
that, given a string S consisting of N characters, returns 1 if S is properly nested and 0 otherwise.
For example, given S = "{[()()]}", the function should return 1 and given S = "([)()]", the function should
return 0, as explained above.
Write an efficient algorithm for the following assumptions:
 N is an integer within the range [0..200,000];
 string S consists only of the following characters: "(", "{", "[", "]", "}" and/or ")".
*/
function solutions(S) {
    S = S.split("");
    // check length of String if length is not even then return 0
    if (S.length % 2 != 0 || S.length > 200000) {
        return 0;
    }

    var stack = [];
    for (let i = 0; i < S.length; i++) {
        var c = S[i];
        // if in string found opening {, (, [ then push to stack
        if (c == '{' || c == '(' || c == '[') { 
            stack.push(c);
        }
        // if in string found opening }, ), ] then pop from stack 
        else if (c == '}' || c == ')' || c == ']') {
            var t = stack.pop() + c;
            // if in stack it dont match with (), {} or, [] then return 0 
            if (t != '{}' && t != '()' && t != '[]') {
                return 0;
            }
        } else {
            return 0;
        }
    }
    // Successful
    return 1;
}

console.log(solutions("[{}]"));