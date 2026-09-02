function generatePassword(length, includeUppercase, includeLowercase, includeNumbers, includeSymbols) {
    
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+'; 

    let allowedChars = '';
    let password = '';    

    allowedChars += includeUppercase ? uppercaseChars : '';
    allowedChars += includeLowercase ? lowercaseChars : '';
    allowedChars += includeNumbers ? numberChars : '';
    allowedChars += includeSymbols ? symbolChars : '';

    if (allowedChars.length === 0) {
        return 'Error: No character types selected. Please select at least one character type.';
    }

    if (length < 1) {
        return 'Error: Password length must be at least 1.';
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

const passwordLength = 12;
const includeUppercase = true;
const includeLowercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLength, includeUppercase, includeLowercase, includeNumbers, includeSymbols);

console.log(`Generated Password: ${password}`);