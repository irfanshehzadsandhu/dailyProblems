#include <iostream>

using namespace std;

int sumOfArrayElements(int array[10]) {
    int size = sizeof(array) / sizeof(array[0]);
    int sum = 0;
    for (int i = 0; i < size; i++) {
        sum += array[i];
    }
    return sum;
}

int main()
{
	//int integers[6] = {1,2,3,4};
    //Formula for countung total numbr is n*(n+1)/2
    //SubArrays will be
    //[1]
    //[1,2]
    //[1,2,3]
    //[1,2,3,4]
    //[2]
    //[2,3]
    //[2,3,4]
    //[3]
    //[3,4]
    //[4]
    int integers[6] = { 1, 2, -5, 4, -3, 2 };
    int arrayWithHighestSum[10];
    int highestSum = 0;
    for (int i = 0; i < 6; i++)
    {
        int numberOfTimes = i;
        while (numberOfTimes <= 6) {
            int subArray[];
            int counter = 0;
            for (int k = i; k < numberOfTimes; k++) {
                //cout << integers[k];
                counter++;
                subArray[counter] = integers[k];
            }
            //cout << endl;
            int sum = sumOfArrayElements(subArray);
            if (sum > highestSum) {
                highestSum = sum;
                //arrayWithHighestSum = subArray;
            }
            numberOfTimes++;

        }
    }
    //cout << "SubArray with highest value: " << arrayWithHighestSum;
    cout << "Highest Sum is : " << highestSum;
	return 0;
}