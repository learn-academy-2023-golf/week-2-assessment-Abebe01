// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// If you get stuck, leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// Pseudo code:

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

describe('divideByThree', () => {
    it('takes an object as an argument and decides if the number inside it is evenly divisible by three or not.', () => {
      const object1 = { number: 15 }
      // Expected output: "15 is divisible by three"
      const object2 = { number: 0 }
      // Expected output: "0 is divisible by three"
      const object3 = { number: -7 }
      // Expected output: "-7 is not divisible by three"
      expect(divideByThree(object1.number)).toEqual("15 is divisible by three")
      expect(divideByThree(object2.number)).toEqual("0 is divisible by three")
      expect(divideByThree(object3.number)).toEqual("-7 is not divisible by three")
    })
  })
// ReferenceError: divideByThree is not defined

// b) Create the function that makes the test pass.

// Pseudo code: 
// input: object
// output: object with it's potential to be divided by 3.

// const divideByThree = (object1, object2, object3) => {
//     if (object1 % 3 === 0) {
//     return ["15 is divisible by three"]
//     } else if (object2 % 3 === 0) {
//         return ["0 is divisible by three"]
// } else if (object3 % 3 !== 0) {
//     return "-7 is not divisible by three"
// }
// }

const divideByThree = (num) => {
if (num % 3 === 0) {
    return `${num} is divisible by three`
} else {
    return `${num} is not divisible by three`
}
}


    
//     (num => {
//         return num % 3 === 0
//     })
// }


// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

describe('allCaps', () => {
    it('takes in an array of words and returns an array with all the words capitalized.', () => {
    const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
    // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
    const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
    // Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]
      expect(allCaps(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
      expect(allCaps(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
    })
  })
//   ReferenceError: allCaps is not defined



// b) Create the function that makes the test pass.

const allCaps = (arr) => {
    return arr.map((value) => {
        return value[0].toUpperCase() + value.substring(1)
    })
  }
// Pseudo code: 
// create a function that takes in an array of words and returns array with all the words capitalized
// declare a function that takes in an array
// return the array output from the map action
// with each value access the first index and capitalize the letter then concatenate the remainder of the word
// logging the function and pass in the array
// output : an array with the first letter of each word capitalized.


// //  PASS  ./code-challenges.test.js
//   divideByThree
//   ✓ takes an object as an argument and decides if the number inside it is evenly divisible by three or not. (2 ms)
// allCaps
//   ✓ takes in an array of words and returns an array with all the words capitalized. (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total
// Snapshots:   0 total
// Time:        0.363 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 1.19s.