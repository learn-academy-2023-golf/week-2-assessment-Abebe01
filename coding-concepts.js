// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------1) What will this log?

const cohort = "Golf 2023"
console.log(cohort.split(" "))

// a) Your answer: Undefined or error. Because if I'm remembering correctly, the "split" command is used on arrays, or to seperate elements of an array. Also being used with built in methods like "reverse" and "join". If I'm wrong then it will either return the same string as is; or actually seperate each character in the string. 

// b) Verify and explain: Oof, Was completley wrong with this one. After referring to the syllabus for the definition of "split", I saw that i essentially mixed up "split" and "join". "Split" turns a string into an array, and since the parenthesis coupled with split contain quotation marks with a space inbetween them; both words from the string were assgined their own element, or index in the returned array. 

// --------------------2) What will this log?

const greeter = (name) => {
   `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: Error, it is an incomplete function because It is missing a "return". 
// b) Verify and explain: Almost! The output was undefined; although for the reason I suspected. I plugged in return before the 'Hello' and the return read "Hello, LEARN Student!" Every function needs a return; otherwise it is will just be passing data through with no result.

// --------------------3) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: Error or undefined. "Number" is never defined or called upon. I may be wrong in that it may just be a place holder for the numbers of the array to pass through (like a parameter) but I'f im being honest I haven't commited that to memory yet. Another thing it could be is that a conditional statement may be needed? Since the "if odd or even" situation exist; but this could just be a case of multiple ways to get to the same result. Not really sure off the top of my head. 

// b) Verify and explain: Dang, was wrong on this one too! May have overthought it. But the code runs perfect and returns the desired outcome of only the odd numbers withing the array (also returned in an array). This was due to ".filter" doing it's job of cycling through the elements of an array and returning a subsection as an array; and number infact being a place holder for the value of each element in the array! Thus because "% 2 !==0 " calls for the value of each element to not equal zero, or be "odd". The return was [ 11, 13, 15 ].

// --------------------4) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: Allllright. I want to say this one is pretty simple and try not to overthink it. "Language" is the "key" and ["JavaScript", "Ruby"] should be the value. Since the code specifies the "0" index and the value itself is an array; initally I think the return would just be "Javascript". But I think it could also be "J" depending on on what's technically counted as the first element of the array? Ultimatley I'm locking in "Javascript". FINAL ANSWER!

// b) Verify and explain: Not gonna lie, four in a row wrong would have hurt! But essentially, as explained above; the code calls on the constant which list multuple keys and values wihtin arrays and strings. But specifically calls on the first key "languages" using dot notation, and again specifys the desired index of "0". In this case, since an array is "0" indexed and the two strings are seperated by a comma. The "0" index would be "Javascript", while the "1" index would be "Ruby".

// --------------------5) What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Golf"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: Oof classes are fresh on my mind, but I haven't committed them to memory yet. But Since there is only one thing passed through the logged code; I think the output would just pass "George" through for name since it is the first value in the paranthesis? If not another thing could be that since student, cohort, and year are never defined (they may not need to be, can't remember if these are just like parameters, as in place holders) outside of the class , the code may not be able to pass the name through the constructor or class because it's definitions is self-contained? Ultimatley im saying it will only pass "George".

// b) Verify and explain: Wrong. The code returned the named "George", as well as "Golf", and "2023". George was passed through becasue name was used witht the constructor to pass through data later with a const. In this case it was "George". While the other key values remained what they where in the class since no other data or parameter was set to pass data through when logged. 
