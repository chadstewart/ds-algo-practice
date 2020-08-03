class TrieNode {
    constructor(value = null) {
        this.character = value;
        this.children = {};
        this.isCompleted = isCompleted;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode('*');
    }

    addWord(word) {

        let node = this.root;

        for (let i = 0; i < word.length; i++) {
            
            let currentLetter = word[i];

            if(node.children[currentLetter]) {
                node = node.children[currentLetter];
            } else {
                let newNode = new TrieNode(currentLetter);
                node.children[currentLetter] = newNode;
                node = newNode;
            }
        }

        node.isCompleted = true;

    }

    find(word) {

        let node = this.root;

        for (let i = 0; i < word.length; i++) {
            
            let currentLetter = word[i];

            if(node.children[currentLetter]) {
                node = node.children[currentLetter];
            } else {
                return false;
            }
        }

        return true;
    }

    remove(word) {
        let node = this.root;
        let suffixes = [];

        for ( let i = 0; i < word.length; i++) {
            let currentLetter = word[i];
            if(node.children[currentLetter]) {
                node = node.children[currentLetter];
                suffixes.unshift(node);
                if(i === word.length && Object.keys(node.children).length) {
                    throw new Error(`suffixes in trie depend on "${word}"`);
                }
            }

            for (let j = 1; j < suffixes.length; j++) {
                let parent = suffixes[j];
                let child = word[suffixes.length - j];
                delete parent.children[child];
                if (parent.isCompleted || Object.keys(parent.children).length) {
                    return `some suffixes of "${word}" removed from trie`;
                }
            }

            delete this.root.children[word[0]];
            return `removed: "${word}"; no other "${word[0]}"-words remain`; 
            
        }
    }

}