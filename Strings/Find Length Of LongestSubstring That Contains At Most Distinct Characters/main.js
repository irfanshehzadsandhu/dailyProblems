/*
This problem was asked by Amazon.

Given an integer k and a string s,
find the length of the longest substring that contains at most k 
distinct characters.

For example,
given s = "abcba" and k = 2, 
the longest substring with k distinct characters is "bcb".
*/

function longestSubString(s, k) {
    var startingPoint = 0, EndPoint = 0;
    var hash = {};
    var ch = s[0];
    hash[ch] = 1;
    for (var i = 1; i < s.length; i++) {
        if (Object.keys(hash).length > k) {
            delete hash[s[startingPoint]];
            ++startingPoint;
        }
        else {
            ++EndPoint;
        }
        if (hash[s[i]] == undefined) {
            hash[s[i]] = 1;
        }
        else {
            var temp = hash[s[i]];
            hash[s[i]] = ++temp;

        }
    }
    console.log(hash);
    console.log(s.substring(startingPoint, EndPoint + 1));
}
longestSubString("abcba", 2);
longestSubString("afffgggg", 2);
