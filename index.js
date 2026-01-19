const lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
const numbers = ['0','1','2','3','4','5','6','7','8','9']
const specialCharacters = ['!', '@','#','$','%','&','_','+','-','=','.', '?']

const lowerCheckbox = document.getElementById('lower-checkbox')
const upperCheckbox = document.getElementById('upper-checkbox')
const numberCheckbox = document.getElementById('number-checkbox')
const specialCheckbox = document.getElementById('special-checkbox')
const checkBoxes = [lowerCheckbox, upperCheckbox, numberCheckbox, specialCheckbox]

const lengthSlider = document.getElementById('length-slider')
const lengthValue = document.getElementById('length-value')
const finalPassword = document.getElementById('final-password')
const refreshBtn = document.getElementById('refresh-btn')


function getSecureRandomNumber(max) {
    const array = new Uint32Array(1);
    crypto.getRandomValues(array)
    return array[0] % max
}

function generatePassword() {
    const passwordLength = Number(lengthSlider.value)
    let requiredTypes = []
    let passwordCharacters = []
    let characterPool = []
    let includedTypes = []


    if (lowerCheckbox.checked) {
        requiredTypes.push('lowercase')
        let lowerChar = lowercase[getSecureRandomNumber(lowercase.length)]
        passwordCharacters.push(lowerChar)
        includedTypes.push(...lowercase)
    }

    if (upperCheckbox.checked) {
        requiredTypes.push('uppercase')
        let upperChar = uppercase[getSecureRandomNumber(uppercase.length)]
        passwordCharacters.push(upperChar)
        includedTypes.push(...uppercase)
    }
    
    if (numberCheckbox.checked) {
        requiredTypes.push('numbers')
        let numberChar = numbers[getSecureRandomNumber(numbers.length)]
        passwordCharacters.push(numberChar)
        includedTypes.push(...numbers)
    }

    if (specialCheckbox.checked) {
        requiredTypes.push('specialCharacters')
        let specialChar = specialCharacters[getSecureRandomNumber(specialCharacters.length)]
        passwordCharacters.push(specialChar)
        includedTypes.push(...specialCharacters)
    }

    if (requiredTypes.length === 0) {
        alert('Please select at least 1 character type.')
        return
    }

    characterPool.push(...includedTypes)

    while (passwordCharacters.length < passwordLength) {
        let randomChar = characterPool[getSecureRandomNumber(characterPool.length)]
        passwordCharacters.push(randomChar)
    }   

    shufflePassword(passwordCharacters)
    finalPassword.value = passwordCharacters.join('')

}

function shufflePassword(arr) {
        for (let i = (arr.length - 1); i > 0; i--) {
            let j = getSecureRandomNumber(i + 1)

            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp

            // modern swap method:
            // [arr[i], arr[j]] = [arr[j], arr[i]]

        }       
    } 


lengthSlider.addEventListener('input', function() {
    lengthValue.textContent = lengthSlider.value
    generatePassword()
})

refreshBtn.addEventListener('click', generatePassword)

finalPassword.addEventListener('click', function() {
    navigator.clipboard.writeText(finalPassword.value)
    alert('Password copied to clipboard!')
})

checkBoxes.forEach(checkbox => {
    checkbox.addEventListener('change', generatePassword);
});

// Generate password on initial load
generatePassword()
