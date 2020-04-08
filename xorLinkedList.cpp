/*This problem was asked by Google.

An XOR linked list is a more memory efficient doubly linked list.
Instead of each node holding next and prev fields,
it holds a field named both, which is an XOR of the next node 
and the previous node.Implement an XOR linked list;
it has an add(element) which adds the element to the end, 
and a get(index) which returns the node at index.*/

//https://www.youtube.com/watch?v=hMcHVfu3E8U
#include <iostream>

using namespace std;
struct Node
{
  int data;
  Node *npx;
};

/* returns XORed value of the node addresses */
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
  /*
Equations for finding address of previous and next nodes are:
npx = Address of Previous node+Address of next node
Address of previous node = Address of next node XOR Address of current npx
Address of next node = Address of previous node XOR Address of current npx
first create head pointer in a memory and assign it value to NULL
*/
  /*
  int b = 10;
  int *p = &b;
  cout << "kllllk" << p << endl;
  cout << "kllllk" << &b << endl;*/

  Node *head = NULL;
  //cout << "Head own address before start of a program: " << &head << endl;
  Node *firstNode = new Node(); //firstNode pointer keeps the address of new Node
  firstNode->data = 10;
  firstNode->npx = XOR(head, NULL);
  head = firstNode;
  //cout << "value in head before second node: " << head << endl;
  //Add second node in list
  Node *secondNode = new Node(); // secondNode pointer holds the address of new Node. Always keep this in mind.
  secondNode->data = 20;
  secondNode->npx = XOR(firstNode, NULL);
  head->npx = XOR(head, secondNode);
  head = secondNode;
  //cout << "value in head is: " << head << endl;
  //cout << "Head own address is: " << &head << endl;
  //cout << "Address of second node is: " << secondNode << endl;
  //Add third node
  Node *thirdNode = new Node();
  thirdNode->data = 30;
  thirdNode->npx = XOR(secondNode, NULL);
  head->npx = XOR(head, thirdNode);
  head = thirdNode;
  printList(head);
  return 0;
}