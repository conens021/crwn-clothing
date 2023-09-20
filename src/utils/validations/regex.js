export const lowerCaseLetter = "[a-z]";
export const upperCaseLetter = "[A-Z]";
export const digitCharacter = "[0-9]"

export const lowerCaseUpperCaseDigit = (length) => `^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{${length},}$`

export const lowerCaseUpperCaseDigitSpecial = (length) =>
    `^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[0-9a-zA-Z!@#$%^&*()_+]{${length},}$`

export const userName = (min, max) => `^(?=.*[0-9])(?=.*[a-zA-Z])(?=\\S+$).{${min},${max}}$`

export const email = '^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$'

export const onlyLetters = `^[a-zA-Z]+$`

export const phoneNumber = `\\+(9[976]\\d|8[987530]\\d|6[987]\\d|5[90]\\d|42\\d|3[875]\\d|
    2[98654321]\\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|
    4[987654310]|3[9643210]|2[70]|7|1)\\d{1,14}$`

