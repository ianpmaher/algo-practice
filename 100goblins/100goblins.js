// There are 100 Goblins suffering from acid reflux, and you are a sadistic Goblin doctor with the cure. You want to torture the Goblins with a little game.
// You line up all the Goblins and give each of them the cure in turn, all 100 Goblins.
// But then you start from the beginning of the line and go over them a second time, removing the cure for every second Goblin, starting with the second Goblin.
// Then you do it a third time for every third Goblin, starting at the third Goblin:
// if the Goblin you now administer was previously cured, they are now uncured, and if the Goblin was uncured, they are now cured.
// You do it a fourth time, and go to every fourth Goblin starting with the fourth.
// The fifth time, you go to every fifth Goblin starting with the fifth ....
// After you have gone down the line of Goblins 100 times, which Goblins are cured at the end?
// Hint: set up an array of goblins first using a datatype good for setting either true or false values.
// It's certainly false that all the all goblins are cured at the beginning...
// TIPS:
// 1. You could push false into an array 100 times to get your 100 goblins
// 2. You could iterate over the goblins as many times as the length of the array
// 3. You could use the current number as the starting point in a range for the inner loop
// 4. The Range could step by some incrementing number to skip over goblins
// 5. When the iterators are finished, you could get the index value of the goblins that have been cured...

const countCuredGoblins = (num) => {
  // declare variable
  const numGoblins = num;
  let hashMap = {}
  // initialize the array of goblins
  let arrCuredGoblins = []
  for (let i=0; i<numGoblins; i++) {
    hashMap[i] = {id: i + 1, isCured: false}
  }
  // Boolean values ==> if cured, true; if not cured, false
  // trying out hash map
  // declaring a Hashmap using the JavaScript Map() constructor
  // let hashMap = new Map();
  // for (let i=0; i<numGoblins; i++) {
  //   hashMap.set(numGoblins, true)
  // }
  // for (const [key, value] of Object.entries(hashMap)) {
  //   hashMap[key] = true;
  // }
  // two loops
  // each round number determines which goblins get cured
  for (let i=1; i<=numGoblins; i++) {
    for (let j=0; j<numGoblins; j++) {
      // modulo operator - if can be divided by the iterator i
      if (hashMap[j].id % i == 0) {
        hashMap[j].isCured = !hashMap[j].isCured
      }
    }
  }
  // pushing the resulting goblins to new array
  for (let i=0; i<numGoblins; i++) {
    if (hashMap[i].isCured == true) {
      arrCuredGoblins.push(hashMap[i].id)
    }
  }
  console.log(arrCuredGoblins)
  return arrCuredGoblins
};

countCuredGoblins(100)