# Strongest Password Generator

## Overview
The **Strongest Password Generator** is a simple yet powerful tool for generating secure passwords. It allows you to customize the number of passwords, their length, and the inclusion of uppercase letters, numbers, and special characters. This makes it ideal for creating passwords that meet various security requirements.

## Installation
To install the Strongest Password Generator, use the following npm command:

```bash
npm install strongest-password-generator
```

## Usage
Here is a basic example of how to use the Strongest Password Generator in your project:

### Importing the Module
First, import the module into your project:

```javascript
const generatePassword = require('strongest-password-generator');
```

### Generating Passwords
Use the `generatePassword` function to generate passwords. The function takes the following parameters:

- `count` (Number): The number of passwords to generate.
- `length` (Number): The length of each password.
- `includeUppercase` (Boolean): Whether to include uppercase letters.
- `includeNumbers` (Boolean): Whether to include numbers.
- `includeSpecialChars` (Boolean): Whether to include special characters.

#### Example:
```javascript
const count = 5; // Number of passwords to generate
const length = 12; // Length of each password
const includeUppercase = true; // Include uppercase letters
const includeNumbers = true; // Include numbers
const includeSpecialChars = true; // Include special characters

const passwords = generatePassword(count, length, includeUppercase, includeNumbers, includeSpecialChars);

console.log(passwords);
```

This will generate an array of passwords, each 12 characters long, including uppercase letters, numbers, and special characters.

## Credits and Contributing
This project was created by Achhaya Pathak. You can find out more about this project and contribute to it on [GitHub](https://github.com/achhayapathak/strongest-password-generator).



## License
This project is licensed under the [MIT](https://choosealicense.com/licenses/mit/) License.


