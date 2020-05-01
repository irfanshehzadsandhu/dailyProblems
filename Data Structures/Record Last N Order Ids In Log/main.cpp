/*
This problem was asked by Twitter.

You run an e-commerce website and want to record the last N order ids in a log. Implement a data structure to accomplish this, with the following API:

record(order_id): adds the order_id to the log
get_last(i): gets the ith last element from the log. i is guaranteed to be smaller than or equal to N.
You should be as efficient with time and space as possible.
*/

//https://massivealgorithms.blogspot.com/2019/01/last-n-order-ids-implementation.html

#include <iostream>
using namespace std;

//int front = -1;
//int rear = -1;
int currentPosition = -1;
int sizeOfBuffer = 5;
int circularBuffer[5];

void enqueue(int orderId)
{
    // if ((rear + 1) % sizeOfBuffer == front)
    // {
    //     cout << "buffer overflow." << endl;
    // }
    //As we are saving logs in buffer , so buffer will replace the old values with new one.
    // if (front == -1 && rear == -1)
    // {
    //     front = (front + 1) % sizeOfBuffer;
    //     rear = (rear + 1) % sizeOfBuffer;
    //     circularBuffer[rear] = orderId;
    // }
    // else
    // {
    //     rear = (rear + 1) % sizeOfBuffer;
    //     circularBuffer[rear] = orderId;
    // }
    if (currentPosition == -1)
    {
        currentPosition = 0;
    }
    else
    {
        currentPosition = (currentPosition + 1) % sizeOfBuffer;
    }
    circularBuffer[currentPosition] = orderId;
}
//Also we don't need dequeue in case of logs
// void dequeue()
// {
//     if ((front + 1) % sizeOfBuffer == rear)
//     {
//         cout << "Buffer is empty." << endl;
//     }
//     else
//     {
//         front = (front + 1) % sizeOfBuffer;
//     }
// }

void getLast(int i)
{
    cout << "ith orderId is: " << circularBuffer[(currentPosition - i + sizeOfBuffer) % sizeOfBuffer] << endl;
}

int main()
{
    enqueue(2);
    enqueue(3);
    enqueue(4);
    enqueue(5);
    enqueue(6);
    enqueue(7);
    // for (int i = 0; i < sizeOfBuffer; i++)
    // {
    //     cout << "Value at index: " << i << "is " << circularBuffer[i] << endl;
    // }
    // dequeue();
    // cout << "Front is at: " << front << endl;
    // dequeue();
    // cout << "Front is at: " << front << endl;
    // dequeue();
    // cout << "Front is at: " << front << endl;
    // dequeue();
    // cout << "Front is at: " << front << endl;
    // dequeue();
    // cout << "Front is at: " << front << endl;
    getLast(1);
    return 0;
}