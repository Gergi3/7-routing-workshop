import { validateMinLength, validateMaxLength } from './validators';

export const validateComment = (data) => {
    const {username, comment} = data;
    const invalidFields = {};
    if (!validateMinLength(username, 3)) {
        invalidFields.username = 'Username length should be at least 3 characters long';
    }

    return invalidFields;
}

