//STEP 1
// function alphaSort(abc) {
//     let arrText = abc.split('')
//     let sortText = arrText.sort()
//     let stringText = sortText.toString().replace(/\,/g, '')

//     console.log(stringText)
// }
// alphaSort('webmaster')

//STEP 2
// function titleCase(phrase) {
//     let arrText = phrase.split(' ')
   
//     let arrUpper = arrText.map(word => {
//         return word.replace(word.charAt(0), word.charAt(0).toUpperCase())
//     })

//     let newString = arrUpper.toString().replace(/\,/g, ' ')

//     console.log(newString)
// }
// titleCase('the quick brown fox')

//STEP 3
// function vowelCount(phrase) {
//     let arrLetters = phrase.split('')
//     let count = 0
   
//     arrLetters.forEach(letter => {
//         v = letter.toLowerCase()
//         if (v === 'a' || v === 'e' || v === 'i' || v === 'o' || v === 'u') {
//             count += 1        
//         }
//     })

//     console.log(count)

// }
// vowelCount('The quick brown fox')

//STEP 4
// function randomID(charNum) {
//     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
//     const charLength = characters.length
//     let id = ''

//     for (let i = 0; i < charNum; i++) {
//         id += characters.charAt(Math.floor(Math.random() * charLength)) 
//     }
//     console.log(id)
// }
// randomID(12)

//STEP 5
// arrCountry = ["Australia", "Germany", "United States of America"]

// function longestName(arr) {
//     let i = 0
//     let longest
//     arr.forEach(country => {
//         if (i < country.length) {
//             i = country.length
//             longest = country
//         }
//     })
//     console.log(longest)
// }
// longestName(arrCountry)