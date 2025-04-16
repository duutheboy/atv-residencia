// groupWordsByLength.js

function groupWordsByLength(words) {
  const result = {};
  
  for (const word of words) {
    const length = word.length;
    
    if (!result[length]) {
      result[length] = [];
    }
    
    result[length].push(word);
  }
  
  return result;
}

const words = ["apple", "banana", "pear", "kiwi", "grape"];
console.log(groupWordsByLength(words));
