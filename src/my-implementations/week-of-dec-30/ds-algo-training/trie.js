class TrieNode {
    constructor(value, isCompletedWord = false) {
        this.value = value;
        this.children = {};
        this.isCompletedWord = isCompletedWord;
    }
}

class Trie {
    constructor() {
        this.root = new TreeNode('*');
    }

    insert(word) {
        let currentNode = this.root;

        for(let i = 0; i < word.length; i++) {
            if(currentNode.children[word[i]]) {
                currentNode = currentNode.children[word[i]];

                if(i === word.length - 1) {
                    return `${word} already exists in this trie!`;
                }
            } else {
                currentNode.children[word[i]] = new TreeNode(word[i]);
                currentNode = currentNode.children[word[i]];

                if(i === word.length - 1) {
                    currentNode.isCompletedWord = true;
                }
            }
        }

        return `${word} was successfully inserted into this trie!`;
    }

    search(word) {
        let currentNode = this.root;

        for(let i = 0; i < word.length; i++) {
            if(currentNode.children[word[i]]) {
                currentNode = currentNode.children[word[i]];

                if(i === word.length - 1 && currentNode.isCompletedWord) {
                    return `${word} exists in this trie!`;
                }
            } else {
                return `${word} does not exist in this trie!`;
            }
        }
        
        return `${word} does not exist in this trie!`;
    }
}