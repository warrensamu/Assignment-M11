//STEP 1
// let userName = prompt('What is your name?')
// let userNameLength = userName.trim().length
// alert(`Hi ${userName.trim()}! Your name is ${userNameLength} charaters long.`)

//STEP 2
// let userName = prompt('What is your name?')
// let userNameLength = userName.trim().length
// let userNumber = prompt(`Please choose a value between 1 and ${userNameLength}`)
// let userLetter = userName.trim().charAt(userNumber -1)
// alert(`${userLetter}`)

//STEP 3
// let nameFirst = prompt('What is your first name?')
// let nameLast = prompt('What is your last name?')
// let fullName = new String(nameFirst.concat(nameLast))
// alert(`Your name is: ${fullName}`)

//STEP 4
// let text = 'The quick brown fox jumps over the lazy dog'
// alert(text.indexOf('fox'))

//STEP 5
// let text = 'The quick brown fox jumps over the lazy dog'
// alert(text.lastIndexOf('fox'))

//STEP 6
// let text = 'The quick brown fox jumps over the lazy dog'
// let fullName = prompt('Please enter your full name:')
// alert(text.replace('the lazy dog', `${fullName.trim()}`))

//STEP 7
// let text = 'The quick brown fox jumps over the lazy dog'
// let word = prompt(`Please type a word from, "${text}"`)
// alert(text.search(word))

//STEP 8
// let old_string = 'The quick brown fox jumps over the lazy dog'
// let new_string = old_string.slice(31, 43)
// alert(new_string.toUpperCase())

//STEP 9
// let text = ' THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          '
// alert(text.trim().toLocaleLowerCase())

//STEP 10
// let text = 'the quick brown fox jumps over the lazy dog'
// let firstLetter = text.charAt(0).toUpperCase()
// let newText = text.replace(text.charAt(0), firstLetter)
// alert(newText)