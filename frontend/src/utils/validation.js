export const validateEmail = (email) => email && email.includes('@');
export const validatePassword = (password) => password && password.length >= 6;
export const validateName = (name) => name && name.length >= 2;
