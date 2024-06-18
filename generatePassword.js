function generatePassword(count, length, includeUppercase, includeNumbers, includeSpecialChars) {

    if (!length || typeof length === "string"){
     return new Error ("Please provide password length")     
    }

    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()_-+=<>?/{}[]';

    let validChars = lowercaseChars;
    let passwords = [];

    if (includeUppercase) validChars += uppercaseChars;
    if (includeNumbers) validChars += numberChars;
    if (includeSpecialChars) validChars += specialChars;

    for (let i = 0; i < count; i++) {
      let password = '';

      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * validChars.length);
        password += validChars[randomIndex];
      }

      passwords.push(password);
    }

    return passwords;
  }

module.exports = generatePassword
