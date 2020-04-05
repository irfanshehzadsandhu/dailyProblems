#include <iostream>

using namespace std;

int main()
{
	int randomNumbers[10] = { 4,1,3,6,2,5,0,7,9,8 };
	int maxValue = randomNumbers[1];
	for (int i = 0; i < 10; i++) {
		if (randomNumbers[i] > maxValue) {
			maxValue = randomNumbers[i];
		}
	}
	cout << "Maximum Value is: " << maxValue;
	return 0;
}