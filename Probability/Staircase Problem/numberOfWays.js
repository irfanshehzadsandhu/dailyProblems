/*
This problem was asked by Amazon.

There exists a staircase with N steps,
and you can climb up either 1 or 2 steps at a time.
Given N, write a function that returns the number of
unique ways you can climb the staircase. The order of the steps matters.

For example, if N is 4, then there are 5 unique ways:

    1, 1, 1, 1
    2, 1, 1
    1, 2, 1
    1, 1, 2
    2, 2

What if, instead of being able to climb 1 or 2 steps at a time,
you could climb any number from a set of positive integers X?
For example, if X = {1, 3, 5}, you could climb 1, 3, or 5 steps at a time.
*/

function numberOfWays(numberOfStairs, steps) {
    let totalNumberOfWays = 0;
    if (numberOfStairs == 0 || numberOfStairs == 1) {
        totalNumberOfWays = 1;
    }
    else {
        totalNumberOfWays = (numberOfStairs - steps[1]) + (numberOfStairs - steps[0])
    }
    if (numberOfStairs > steps[1]) {
        numberOfWays((numberOfStairs - steps[1]), steps) + numberOfWays((numberOfStairs - steps[0]), steps);
    }
    return totalNumberOfWays;
}
console.log(numberOfWays(0, [1, 2]));
console.log(numberOfWays(1, [1, 2]));
console.log(numberOfWays(2, [1, 2]));
console.log(numberOfWays(3, [1, 2]));
console.log(numberOfWays(4, [1, 2]));
console.log(numberOfWays(5, [1, 2]));