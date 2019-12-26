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

    insert(string) {
        let currentNode = this.root;

        for(let i = 0; i < string.length; i++) {
            if(currentNode.children[string[i]]) {
                if(i === string.length - 1) {
                    if(currentNode.isCompleteWord) {
                        return `${string} already exists in this trie!`;
                    } else {
                        currentNode.isCompleteWord = true;
                    }
                }
                    
                currentNode = currentNode.children[string[i]];
            } else {
                currentNode.children[string[i]] = new TrieNode(string[i]);
                currentNode = currentNode.children[string[i]];

                if(i === string.length - 1) {
                    currentNode.isCompleteWord = true;
                }
            }
        }

        return `${string} was successfully added to trie!`;
    }

    search(string) {
        let currentNode = this.root;

        for(let i = 0; i < string.length; i++){
            if(currentNode.children[string[i]]) {
                if(i === string.length - 1 && currentNode.isCompleteWord) {
                    return `${string} is within this trie!`;
                } else if(i !== string.length - 1) {
                    currentNode = currentNode.children[string[i]];
                }
            }

            return `${string} does not exist in this trie!`;
        }
    }
}