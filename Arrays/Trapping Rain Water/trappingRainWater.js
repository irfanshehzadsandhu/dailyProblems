// This problem was asked by Facebook.

// You are given an array of non-negative integers that represents a two-dimensional elevation map

// where each element is unit-width wall and the integer is the height.

// Suppose it will rain and all spots between two walls get filled up.

// Compute how many units of water remain trapped on the map in O(N) time and O(1) space.

// For example, given the input [2, 1, 2], we can hold 1 unit of water in the middle.

// Given the input [3, 0, 1, 3, 0, 5], we can hold 3 units in the first index, 2 in the second,

// and 3 in the fourth index (we cannot hold 5 since it would run off to the left),

// so we can trap 8 units of water.


//Help https://medium.com/@harycane/trapping-rain-water-8a1817b82d98

public class Solution {
    public int trap(int[] height) {
         int maxSeenSoFar = 0;//helper variable to formulate max height to the right array
         int[] maxSeenRight = new int[height.length];//array that contains max height seen to the right                                         of tower i
         int maxSeenLeft = 0;//optimized to have a variable that contains max height of a tower traversing from the left.
        int rainWater = 0;//variable to store total units of rain water.
        
         for (int i = height.length - 1; i >= 0; i--) {//**traversing from Right to Left
             if (height[i] > maxSeenSoFar) {//if curr height is greater than maxSeenSoFar
               maxSeenSoFar = height[i];//then update maxSeenSoFar with curr height
               maxSeenRight[i] = maxSeenSoFar;//and enter that maxSeenSoFar in maxSeenRight array
           } else {//otherwise update maxSeenSoFar into maxSeenRight                             array
               maxSeenRight[i] = maxSeenSoFar;
           }
         }


        
         for (int i = 0; i < height.length; i++) { //**traversing from Left to Right
              rainWater = rainWater + Integer.max((Integer.min(maxSeenLeft, maxSeenRight[i]) - height[i]), 0);//0 to take care of case where there is no taller tower to its left & right
             
              if (height[i] > maxSeenLeft) {//if curr height > maxSeenLeft
                  maxSeenLeft = height[i];//update maxSeenLeft with curr height.
              }
              
          }
          return rainWater;//return total units of rain water.
        //Big O T O(n) (actually n + n but equals n) S O(n)
    }
}