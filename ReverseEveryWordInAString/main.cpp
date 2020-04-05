#include <iostream>

using namespace std;

int main()
{
    char sentence[500] = "I am improving my problem solving skills.";
    int stringLen = *(&sentence + 1) - sentence;
    char wordToReverse[500] = "";
    int wordLenCounter = 0;
    for (int i = 0; i < stringLen; i++) {
        if (sentence[i] == ' ' || sentence[i] == '\0') { //check space or null 
            for (int j = wordLenCounter; j >= 0; j--) {
                cout << wordToReverse[j];
                wordToReverse[j] = '\0';
            }
            wordLenCounter = 0;
        }
        else  {
            wordToReverse[wordLenCounter] = sentence[i];
            wordLenCounter++;
        }
        
        
    }
    return 0;
}