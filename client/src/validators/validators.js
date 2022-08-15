export const validateMinLength = (data, min) => data?.length >= min;

export const validateMaxLength = (data, max) => data?.length <= max;

export const validateRegex = (data, regex) => regex?.test(data);
