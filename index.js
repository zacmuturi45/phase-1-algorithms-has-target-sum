function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i=0;i<array.length;i++) {
    for (let j=i+1;j<array.length;j++) {
      const comp = target - array[i]
      if (comp===array[j]) {
        return true;
      } 
    }
  }
    return false;
};

/* 
  Write the Big O time complexity of your function here
  0(n²)
*/

/* 
  Add your pseudocode here
  First, loop through the array to get elements. Then loop again but modify a nested loop which starts at one element
  ahead of the first loop. Get the complement of the target and first loop's elements. Then with an if statement, look
  for an element in the second loop that is equal to the complement. 
*/

/*
  Add written explanation of your solution here
  This function loops through the array twice. The second loop is one element ahead of the first one.
  This ensures that all the elements in the array can be added to each other. We then get the complement of the target
  and the elements in the first loop. If there is an element in the second loop equal to this complement, then the function returns true.
  If the array reaches the end of the loop without finding this element it returns false. 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
