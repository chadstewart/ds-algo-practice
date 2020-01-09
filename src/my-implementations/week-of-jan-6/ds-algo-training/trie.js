class TrieNode {
    constructor(value) {
        this.value = value;
        this.children = {};
        this.isCompleteWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode('*');
    }

    insertWord(word) {
        if(typeof word !== 'string') {
            return `${word} is not a word!`;
        }
        
        let currentNode = this.root;
        let wordExists = true;

        for(let i = 0; i < word.length; i++) {
            if(!currentNode.children[word[i]]) {
                currentNode.children[word[i]] = new TrieNode(word[i]);
                wordExists = false;
            }

            currentNode = currentNode.children[word[i]];
        }

        if(wordExists) {
            return `${word} already exists in this trie!`;
        }

        currentNode.isCompletedWord = true;
        return `${word} has been successfully inserted into trie!`;
    }

    searchWord(word) {
        let currentNode = this.root;

        for(let i = 0; i < word.length; i++) {
            if(!currentNode.children[word[i]]) {
                return `${word} is not in this trie!`;
            }

            currentNode = currentNode.children[word[i]];
        }

        return `${word} exists in trie!`;
    }
}