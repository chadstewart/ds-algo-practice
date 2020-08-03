class TrieNode {
    constructor(value) {
        this.value = value;
        this.characters = {};
        this.isCompleteWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode('*');
    }

    insert(word) {
        let currentNode = this.root;

        for(let i = 0; i < word.length; i++) {
            if(currentNode.characters[word[i]]) {
                currentNode = currentNode.characters[word[i]];
            } else {
                currentNode.characters[word[i]] = new TrieNode(word[i]);
                currentNode = currentNode.characters[word[i]];

                if(i === word.length - 1) {
                    currentNode.isCompleteWord = true;
                }
            }
        }

        return `${word} has been inserted into the trie!`;
    }

    search(word) {
        let currentNode = this.root;

        for(let i = 0; i < word.length; i++) {
            if(currentNode.characters[word[i]]) {
                currentNode = currentNode.characters[word[i]];

                if(i === word.length - 1 && currentNode.isCompleteWord) {
                    return `${word} is currently in the trie!`;
                }

            } else {
                return `${word} is not in the trie!`;
            }
        }
    }
}