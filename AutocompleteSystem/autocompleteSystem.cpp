/*
This problem was asked by Twitter.

Implement an autocomplete system.
 That is, given a query string s and a set of all possible query strings,
  return all strings in the set that have s as a prefix.

For example, given the query string de and the set of strings 
[dog, deer, deal], return [deer, deal].
*/
//Help from
//https://medium.com/basecs/trying-to-understand-tries-3ec6bede0014
//https://www.geeksforgeeks.org/auto-complete-feature-using-trie/

#include <iostream>
#include <bits/stdc++.h>
#define ALPHABET_SIZE (26)
#define CHAR_TO_INDEX(c) ((int)c - (int)'a')

using namespace std;

struct TrieNode
{
    TrieNode *children[ALPHABET_SIZE];
    bool isLastLetter;
};

TrieNode *getNode()
{
    TrieNode *newTrieNode = new TrieNode();
    newTrieNode->isLastLetter = false;
    for (int i = 0; i < ALPHABET_SIZE; i++)
    {
        newTrieNode->children[i] = NULL;
    }
    return newTrieNode;
}

void insert(TrieNode *root, string Word)
{
    TrieNode *crawler = root;
    for (int letterLevel = 0; letterLevel < Word.length(); letterLevel++)
    {
        int letterPosition = CHAR_TO_INDEX(Word[letterLevel]);
        if (crawler->children[letterPosition] == NULL)
        {
            crawler->children[letterPosition] = getNode();
            crawler = crawler->children[letterPosition];
        }
        crawler->isLastLetter = true;
    }
}

bool lastNode(TrieNode *root)
{
    for (int i = 0; i < ALPHABET_SIZE; i++)
    {
        if (root->children[i] != NULL)
        {
            return false;
        }
    }
    return true;
}

void suggestions(TrieNode *root, string prefix)
{
    if (root->isLastLetter)
    {
        cout << prefix << endl;
    }

    for (int i = 0; i < ALPHABET_SIZE; i++)
    {
        if (root->children[i])
        {
            prefix.push_back(97 + i);
            suggestions(root->children[i], prefix);
            prefix.pop_back();
        }
    }
}

bool printSuggestions(TrieNode *root, string query)
{
    TrieNode *crawler = root;
    for (int letterLevel = 0; letterLevel < query.length(); letterLevel++)
    {
        int letterPosition = CHAR_TO_INDEX(query[letterLevel]);
        if (crawler->children[letterPosition] == NULL)
        {
            return false;
        }
        else
        {
            crawler = crawler->children[letterPosition];
        }
    }
    bool isLastNode = lastNode(crawler);
    bool isLastLetter = crawler->isLastLetter;
    if (isLastLetter && isLastNode)
    {
        return true;
    }
    if (!isLastNode)
    {
        cout << "*****************" << endl;
        suggestions(crawler, query);
    }
}

int main()
{
    TrieNode *root = getNode();
    insert(root, "dog");
    insert(root, "dear");
    insert(root, "deal");
    printSuggestions(root, "do");
    return 0;
}