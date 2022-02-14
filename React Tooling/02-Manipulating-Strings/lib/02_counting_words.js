function occurrences(text, word) {
  let count = 0;
  text.split(' ').forEach((element) => {
    count += element.toLowerCase() === word.toLowerCase() ? 1 : 0;
  });
  return count;
}

module.exports = occurrences;
console.log(occurrences("a fat cat sat on a mat and ate a fat rat", "at"));
console.log(occurrences("", "hello"));
console.log(occurrences("a fat cat sat on a mat and ate a fat rat", "cat"));
