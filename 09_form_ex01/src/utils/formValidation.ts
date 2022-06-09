import validator from "validator";

export const validateLength = (value: string) => {
    return validator.isLength(value, { min: 6, max: 40 });
};

export const validateEmail = (value: string) => {
    return validator.isEmail(value) && validateLength(value);
};

export const validatePassword = (value: string) => {
    return validateLength(value);
};

export const validatePasswordConfirmation = (
    firstPassword: string,
    secondPassword: string
) => {
    const passwordsAreValids =
        validatePassword(firstPassword) && validatePassword(secondPassword);
    return passwordsAreValids && firstPassword === secondPassword;
};
