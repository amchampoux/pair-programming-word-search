const searchHorizontal = function(letters, word) {
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    console.log(l);
    if (l.includes(word)) return true;
  }
  return false;
};

const transpose = function(matrix) {
  let newArray = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (!Array.isArray(newArray[j])) {
        newArray[j] = [];
      }
      newArray[j][i] = matrix[i][j];
    }
  }
  return newArray;
};


const wordSearch = (letters, word) => {
  // special case to support lowercase word (extra)
  word = word.toUpperCase();
  // first do a horizontal search, return true if word found
  let answer = searchHorizontal(letters, word);
  // If no word found, transpose and look for the word
  if (!answer) {
    let vertical = transpose(letters);
    answer = searchHorizontal(vertical, word);
  }
  return answer;
};

module.exports = wordSearch;