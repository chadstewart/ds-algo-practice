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

    insert(word) {
        let currentNode = this.root;

        for(let i = 0; i < word.length; i++) {
            let letter = word.charAt(i);

            if(currentNode.children[letter]) {
                currentNode = currentNode.children[letter];
            } else {
                currentNode.children[letter] = new TrieNode(letter);
                currentNode = currentNode.children[letter];
            }
        }

        currentNode.isCompleteWord = true;
    }

    findWord(word) {
        let currentNode = this.root;

        for(let i = 0; i < word.length; i++) {
            let letter = word.charAt(i);

            if (i === word.length - 1 && currentNode.isCompleteWord) {
                return `${word} is in this trie!`;
            } else if(currentNode.children[letter]) {
                currentNode = currentNode.children[letter];
            } else {
                break;
            }
        }

        return `${word} is not in this trie!`;
    }
}