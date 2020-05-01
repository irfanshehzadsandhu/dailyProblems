/*
This problem was asked by Google.

Given two singly linked lists that intersect at some point, find the intersecting node. The lists are non-cyclical.

For example, given A = 3 -> 7 -> 8 -> 10 and B = 99 -> 1 -> 8 -> 10, return the node with value 8.

In this example, assume nodes with the same value are the exact same node objects.

Do this in O(M + N) time (where M and N are the lengths of the lists) and constant space.
*/

//Help from following link.
//https://www.youtube.com/watch?v=_7byKXAhxyM
#include <iostream>

using namespace std;

struct Node
{
    int data;
    Node *next;
};

int findLength(struct Node *head)
{
    int length = 0;
    while (head != NULL)
    {
        length++;
        head = head->next;
    }
    return length;
}

Node *findMergePoint(Node *head1, Node *head2)
{
    Node *CommonNode;
    int length1 = findLength(head1);
    int length2 = findLength(head2);
    int difference = length2 - length1; // finding absolute value pending.
    if (length1 > length2)
    {
        for (int i = 0; i < difference; i++)
        {
            head1 = head1->next;
        }
    }
    else
    {
        for (int i = 0; i < difference; i++)
        {
            head2 = head2->next;
        }
    }

    while (head1->next != head2->next)
    {
        head1 = head1->next;
        head2 = head2->next;
    }

    CommonNode = head2->next;
    return CommonNode;
}

int main()
{
    struct Node *head1 = NULL, *head2 = NULL;
    // struct Node *temp[7];
    // for (int i = 0; i < 7; i++)
    // {
    //     temp[i] = new Node();
    // }
    // temp[0]->data = 4;
    // temp[0]->next = temp[1];
    // temp[1]->data = 6;
    // temp[1]->next = temp[2];
    // temp[2]->data = 7;
    // temp[2]->next = temp[3];
    // temp[3]->data = 1;
    // temp[3]->next = NULL;
    // temp[4]->data = 9;
    // temp[4]->next = temp[5];
    // temp[5]->data = 3;
    // temp[5]->next = temp[6];
    // temp[6]->data = 5;
    // temp[6]->next = temp[2];

    // head1 = temp[0];
    // head2 = temp[4];
    // Node *commonNode = findMergePoint(head1, head2);
    struct Node *temp[6];
    for (int i = 0; i < 6; i++)
    {
        temp[i] = new Node();
    }
    temp[0]->data = 3;
    temp[0]->next = temp[1];
    temp[1]->data = 7;
    temp[1]->next = temp[2];
    temp[2]->data = 8;
    temp[2]->next = temp[3];
    temp[3]->data = 10;
    temp[3]->next = NULL;
    temp[4]->data = 99;
    temp[4]->next = temp[5];
    temp[5]->data = 1;
    temp[5]->next = temp[2];

    head1 = temp[0];
    head2 = temp[4];
    Node *commonNode = findMergePoint(head1, head2);
    cout << "Common Node is : " << commonNode->data << endl;
    return 0;
}