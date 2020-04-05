/*This problem was asked by Stripe.

Given an array of integers, find the first missing positive integer
in linear time and constant space.In other words, find the lowest positive integer
that does not exist in the array.The array can contain duplicates and negative numbers as well.*/


/*linear time mean its big O notation will be O(n). Function permutations are directly proportional
to input*/

//Constant space mean memory fixed memory required by a program irrespective of input

function solution(A) {
	// only positive values, sorted
	A = A.filter(x => x >= 1).sort((a, b) => a - b)
	console.log(A);
	let x = 1

	for (let i = 0; i < A.length; i++) {
		// if we find a smaller number no need to continue, cause the array is sorted and number was missing.
		if (x < A[i]) {
			return x
		}
		x = A[i] + 1
	}

	return x
}
console.log(solution([1, 2, 0]));
console.log(solution([3, 4, -1, 1]));