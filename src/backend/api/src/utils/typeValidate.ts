type validateOptions = {
    type?: 'string' | 'number' | 'boolean';
    required?: boolean;
    integer?: boolean;
    min?: number;
    max?: number;
    minLength?: number;
    maxLength?: number;
    coerce?: boolean; 
};

export const validateData = (
    value: unknown,
    fieldName: string,
    options: validateOptions,
): string[] => {
    const errors: string[] = [];

    // Catch null, undefined, AND empty strings
    if (value === undefined || value === null || value === '') {
        if (options.required) errors.push(`${fieldName} is required`);
        return errors;
    }

    let checkValue = value;

    // Safely coerce strings to numbers if the flag is true
    if (options.coerce && typeof value === 'string') {
        if (options.type === 'number') {
            const parsed = Number(value);
            if (!isNaN(parsed)) checkValue = parsed;
        }
    }

    // Validate: strict type
    if (options.type && typeof checkValue !== options.type) {
        errors.push(`${fieldName} must be a ${options.type}`);
        return errors;
    }

    // Validate: numbers
    if (options.type === 'number' && typeof checkValue === 'number') {
        if (!Number.isFinite(checkValue)) {
            errors.push(`${fieldName} must be a valid number`);
        }
        if (options.integer && !Number.isInteger(checkValue)) {
            errors.push(`${fieldName} must be an integer`);
        }
        if (options.min !== undefined && checkValue < options.min) {
            errors.push(`${fieldName} must be greater than or equal to ${options.min}`);
        }
        if (options.max !== undefined && checkValue > options.max) {
            errors.push(`${fieldName} must be lesser than or equal to ${options.max}`);
        }
    }

    // Validate: strings
    if (options.type === 'string' && typeof checkValue === 'string') {
        if (options.minLength !== undefined && checkValue.length < options.minLength) {
            errors.push(`${fieldName} must be at least ${options.minLength} characters`);
        }
        if (options.maxLength !== undefined && checkValue.length > options.maxLength) {
            errors.push(`${fieldName} must be at most ${options.maxLength} characters`);
        }
    }

    return errors;
};