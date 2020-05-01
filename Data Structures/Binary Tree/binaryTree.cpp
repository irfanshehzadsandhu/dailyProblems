//help from following link
//https://www.youtube.com/watch?v=COZK7NATh4k
//https://www.youtube.com/watch?v=suj1ro8TIVY


/*This problem was asked by Google.

Given the root to a binary tree, implement serialize(root), which serializes the tree into a string, and deserialize(s), which deserializes the string back into the tree.

For example, given the following Node class

class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

The following test should pass:

node = Node('root', Node('left', Node('left.left')), Node('right'))
assert deserialize(serialize(node)).left.left.val == 'left.left'*/

#include <iostream>
#include <string>

using namespace std;
struct Node{
	string data;
	Node* left;
	Node* right;
};
// there is no node in memory so create a new node in and return its address;
Node* GetNewNode(string data){
	Node* newNode = new Node();
	newNode->data = data;
	newNode->left = NULL;
	newNode->right = NULL;
	return newNode;
}
Node* Insert(Node* root,string data){
	if(data =="root" || root == NULL){
		root = GetNewNode(data);
	}
	else if(data =="left"){
		root->left = Insert(root->left,data);
	}	
	else {
		root->right = Insert(root->right,data);
	}	
	return root;
}

int PreorderParse(Node* root){
	if(root!=NULL){
		cout<<"Data in a node is: "<<root->data<<endl;
		PreorderParse(root->left);
		PreorderParse(root->right);
	}
	return 0;
}
string serializeBinaryTree;
int serialize(Node* root){
	if(root !=NULL){
		serializeBinaryTree = serializeBinaryTree + root->data + ",";
		serialize(root->left);
		serialize(root->right);
	}
	cout<<"Serialize String is: "<<serializeBinaryTree<<endl;
	return 0;
}

int deserialize(){
	//Writing algo here 
	/*Split serializeBinaryTree string on the basis of ',' into words array
	and run for loop on an array and in each loop call insertNode funtion*/
  return 0;
}

int main()
{
   Node* root = NULL;	
   root = Insert(root,"root"); // We will set root address for parsing.
   root = Insert(root,"left");
   root = Insert(root,"left.left");
   root = Insert(root,"right");
   cout<<"Address of root:"<<root<<endl;
   cout<<"Left pointer is pointing to following address:"<<root->left<<endl;
   cout<<"Right pointer is pointing to following address:"<<root->right<<endl;
   PreorderParse(root);
	 serialize(root);
   return 0;
}