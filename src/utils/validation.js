export const validatePassword = (pass) => {
    if (pass.length < 6) throw new Error('Password must be at least 6 characters long');
}