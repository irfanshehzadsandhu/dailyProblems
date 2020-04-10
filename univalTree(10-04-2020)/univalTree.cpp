/*
This problem was asked by Google.

A unival tree (which stands for "universal value") is a tree where all nodes under it have the same value.

Given the root to a binary tree, count the number of unival subtrees.

For example, the following tree has 5 unival subtrees:

   0
  / \
 1   0
    / \
   1   0
  / \
 1   1

*/
//Help from following link
//https://www.youtube.com/watch?v=7HgsS8bRvjo
#include <iostream>
#include <string>

using namespace std;
struct Node
{
    int data;
    Node *left;
    Node *right;
};

Node *Insert(Node *parentNode, int data, string direction = "root")
{
    if (direction == "root")
    {
        Node *newNode = new Node();
        newNode->data = data;
        newNode->left = NULL;
        newNode->right = NULL;
        return newNode;
    }
    else if (direction == "left")
    {
        Node *newNode = new Node();
        newNode->data = data;
        newNode->left = NULL;
        newNode->right = NULL;
        parentNode->left = newNode;
        return parentNode->left;
    }
    else if (direction == "right")
    {
        Node *newNode = new Node();
        newNode->data = data;
        newNode->left = NULL;
        newNode->right = NULL;
        parentNode->right = newNode;
        return parentNode->right;
    }
}

int PreorderParse(Node *root)
{
    if (root != NULL)
    {
        cout << "Data in a node is: " << root->data << endl;
        PreorderParse(root->left);
        PreorderParse(root->right);
    }
    return 0;
}
int counter = 0;
int numberOfUnivalTree(Node *root)
{
    if (root == NULL)
    {
        counter++;
    }
    else if (root->left != NULL)
    {
        numberOfUnivalTree(root->left);
    }
    else if (root->right != NULL)
    {
        numberOfUnivalTree(root->right);
    }
    else if (root->left != NULL && root->right && root->data == root->left->data && root->right->data)
    {
        counter++;
    }
    cout << "Total Number of unival Trees are:" << counter << endl;
    return 0;
}

int main()
{
    Node *root = NULL;
    root = Insert(root, 0);

    Node *leftNode = Insert(root, 1, "left");

    Node *rightNode = Insert(root, 0, "right");

    leftNode = Insert(rightNode, 1, "left");

    leftNode = Insert(leftNode, 1, "left");

    Insert(leftNode, 1, "right");
    Insert(rightNode, 0, "right");

    cout << "Parsing Tree Now" << endl;
    PreorderParse(root);
    numberOfUnivalTree(root);
    return 0;
}