class TrieNode {
    constructor(value, isCompleteWord = false) {
        this.value = value;
        this.children = {};
        this.isCompleteWord = isCompleteWord;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode('*');
    }

    addWord(word) {
        let currentNode = this.root;

        for(let i = 0; i < word.length; i++) {

            let letter = word[i];

            if(currentNode.children[letter]) {
                currentNode = currentNode.children[letter];
            } else {
                let newNode = new TrieNode(letter);
                currentNode.children[letter] = newNode;
                currentNode = newNode;
            }
        }

        currentNode.isCompleteWord = true;
    }

    findWord(word) {
        let currentNode = this.root;

        for(let i = 0; i < word.length; i++) {

            let letter = word[i];

            if(currentNode.children[letter]) {
                currentNode = currentNode.children[letter];
            } else {
                return false;                
            }
        }

        return currentNode.isCompleteWord === true;
    }
}