const lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
const numbers = ['0','1','2','3','4','5','6','7','8','9']
const specialCharacters = ['!', '@','#','$','%','&','_','+','-','=','.', '?']

let lowerCheckbox = document.getElementById('lower-checkbox')
let upperCheckbox = document.getElementById('upper-checkbox')
let numberCheckbox = document.getElementById('number-checkbox')
let specialCheckbox = document.getElementById('special-checkbox')

const lengthSlider = document.getElementById('length-slider')
const lengthValue = document.getElementById('length-value')
const finalPassword = document.getElementById('final-password')
const refreshBtn = document.getElementById('refresh-btn')



function generatePassword() {
    const passwordLength = Number(lengthSlider.value)
    let requiredTypes = []
    let passwordCharacters = []
    let characterPool = []
    let includedTypes = []


    if (lowerCheckbox.checked) {
        requiredTypes.push('lowercase')
        let lowerChar = lowercase[Math.floor(Math.random() * lowercase.length)]
        passwordCharacters.push(lowerChar)
        includedTypes.push(...lowercase)
    }

    if (upperCheckbox.checked) {
        requiredTypes.push('uppercase')
        let upperChar = uppercase[Math.floor(Math.random() * uppercase.length)]
        passwordCharacters.push(upperChar)
        includedTypes.push(...uppercase)
    }
    
    if (numberCheckbox.checked) {
        requiredTypes.push('numbers')
        let numberChar = numbers[Math.floor(Math.random() * numbers.length)]
        passwordCharacters.push(numberChar)
        includedTypes.push(...numbers)
    }

    if (specialCheckbox.checked) {
        requiredTypes.push('specialCharacters')
        let specialChar = specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
        passwordCharacters.push(specialChar)
        includedTypes.push(...specialCharacters)
    }

    if (requiredTypes.length === 0) {
        alert('Please select at least 1 character type.')
        return
    }

    characterPool.push(...includedTypes)

    while (passwordCharacters.length < passwordLength) {
        let randomChar = characterPool[Math.floor(Math.random() * characterPool.length)]
        passwordCharacters.push(randomChar)
    }

    function shufflePassword(arr) {
        for (let i = (arr.length - 1); i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1))

            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp

            // modern swap method:
            // [arr[i], arr[j]] = [arr[j], arr[i]]

        }       
    }    

    shufflePassword(passwordCharacters)
    finalPassword.value = passwordCharacters.join('')

}




lengthSlider.addEventListener('input', function() {
    lengthValue.textContent = lengthSlider.value
    generatePassword()
})

refreshBtn.addEventListener('click', generatePassword)

// Generate password on initial load
generatePassword()
