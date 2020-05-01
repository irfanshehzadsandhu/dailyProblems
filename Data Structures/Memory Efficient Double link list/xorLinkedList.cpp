/*
This problem was asked by Google.

An XOR linked list is a more memory efficient doubly linked list.
Instead of each node holding next and prev fields,
it holds a field named both, which is an XOR of the next node 
and the previous node.Implement an XOR linked list;
it has an add(element) which adds the element to the end, 
and a get(index) which returns the node at index.

*/

/*

Equations for finding address of previous and next nodes are:
npx = Address of Previous node+Address of next node
Address of previous node = Address of next node XOR Address of current npx
Address of next node = Address of previous node XOR Address of current npx
first create head pointer in a memory and assign it value to NULL

*/
/*Help from following link

https://www.youtube.com/watch?v=hMcHVfu3E8U

*/
#include <iostream>

using namespace std;
struct Node
{
  int data;
  Node *npx; //nxp mean xor of next and previous node
};

struct Node *XOR(struct Node *prev, struct Node *next)
{
  return (Node *)((uintptr_t)(prev) ^ (uintptr_t)(next));
}

void printList(Node *head)
{
  if (head != NULL)
  {
    Node *current = head;
    Node *prev;
    Node *next = NULL;
    while (current != NULL)
    {
      cout << "Value in node is :" << current->data << endl;
      prev = XOR(next, current->npx);
      next = current;
      current = prev;
    }
  }
}

int main()
{

  Node *head = NULL;
  Node *prev = NULL;

  //Start by step by step . First add two nodes
  /*Node *firstNode = new Node(); //firstNode pointer keeps the address of new Node
  firstNode->data = 10;
  firstNode->npx = XOR(head, NULL);
  prev = head;
  head = firstNode;

  Node *secondNode = new Node();
  secondNode->data = 20;
  secondNode->npx = XOR(head, NULL);
  head->npx = XOR(prev, secondNode);
  prev = head;
  head = secondNode;*/

  for (int i = 0; i < 10; i++)
  {
    Node *newNode = new Node();
    newNode->data = i + 1;
    newNode->npx = XOR(head, NULL);
    if (head != NULL)
    {
      head->npx = XOR(prev, newNode);
      prev = head;
    }
    head = newNode;
  }

  cout << "Print Numbers in a list" << endl;
  printList(head);
  return 0;
}