// Given an array of numbers, return all the numbers that are greater than ten.
// Ex.:
//   greaterThanTen([1, 2, 3, 11, 12, 13]);
//   => [11, 12, 13]
function greaterThanTen(numbers) {
  const bigNums = []
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 10) {
      bigNums.push(numbers[i])
    }
  }

  return bigNums
}

// Given an array of strings, return all words that start with 'b' or 'B'.
// Ex.:
//   bWords(['banana', 'orange', 'apple', 'Bonobo', 'kiwi', 'pear']);
//   => ['banana', 'Bonobo]
function bWords(words) {
  let newWords = []
  for (let word of words) {
    let i = word.split('')
    if (i[0] === 'b') {
      newWords.push(word)
    }
    if (i[0] === 'B') {
      newWords.push(word)
    }
  }
  return newWords
}
// Add all the elements from additionalItems to the end of originalArray.
// Return the originalArray..
// Ex.:
//  extend([1, 2, 3], [4, 5, 6]);
//  => [1, 2, 3, 4, 5, 6]
function extend(originalArray, additionalItems) {
  for (let item of additionalItems) {
    originalArray.push(item)
  }
  return originalArray
}

// Return an array of all items with the given length.
// Ex.:
//   itemsWithLength(['a', 'bbb', 'cccc', 'dddddd', 'eee'], 3);
//   => ['bbb', 'eee']
function itemsWithLength(items, length) {
  const newArray = []
  for (let item of items) {
    let i = item.split('')
    if (length === i.length) {
      newArray.push(item)
    }
  }
  return newArray
}

// Return an array with every other element from the input array (start with index 0).
// Ex.:
//   everyOtherItem(['a', 'b', 'c', 'd', 'e']);
//   => ['a', 'c', 'e']
function everyOtherItem(items) {
  let newItems = []
  for (let i = 0; i <= items.length-1; i += 2) {
    newItems.push(items[i])
  }
  return newItems
}

// Given a list of words and a letter, return the indexes of the words that
// start with that letter. You can assume that the words and letter will always
// be lowercased.
// Ex.:
//   findWordsStartingWith(['apple', 'banana', 'kiwi', 'pear', 'bacon'], 'b');
//   => [1, 4]
function findWordsStartingWith(words, letter) {
  const indexes = []
  for (let word of words) {
    let token = word.split('')
    if (token[0] === letter) {
      indexes.push(words.indexOf(word))
    }
  }
  return indexes
}

// Return the `n` smallest values in the array in descending order (largest
// numbers first). Assume that `n` will always be less than the length of the
// array.
// Ex.:
//   smallestNItems([1, 30, 4, 21, 100000], 3);
//   => [21, 4, 1]
function smallestNItems(items, n) {
  const newItems = []
  items.sort((a,b) => {a-b})
    for (i = 0; i < n; i++) {
      newItems.push(items[i])
    }
    return newItems.reverse()
}

// Search for a value in the array and return its index. If the value appears
// more than once, return the index of the *FIRST* occurrence of the value. If
// the value doesn't exist in the array, return undefined.
// Ex.:
//   findIndex(['a', 'b', 'c', 'a', 'b', 'c'], 'c');
//   => 2
function findIndex(items, value) {
  for (let item of items) {
    if (value === item) {
      return items.indexOf(item)
    }
  }
}

// Given a start number and stop number, return a new array containing all the numbers
// between the start and stop number.
// Ex.:
//   range(1, 5);
//   => [1, 2, 3, 4, 5]
function range(start, stop) {
  const array = []

  for (let i = start; i <= stop; i++) {
    array.push(i)
  }
  return array
}

export {
  bWords,
  everyOtherItem,
  extend,
  findIndex,
  findWordsStartingWith,
  greaterThanTen,
  itemsWithLength,
  range,
  smallestNItems,
};
