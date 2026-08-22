type validateOptions = {
    type?: 'string' | 'number' | 'boolean';
    required?: boolean;
    integer?: boolean;
    min?: number;
    max?: number;
    minLength?: number;
    maxLength?: number;
};

export const validateData = (
    value: unknown,
    fieldName: string,
    options: validateOptions,
): string[] => {
    const errors: string[] = [];

    // Validate: required field
    if (value === undefined || value === null) {
        if (options.required) errors.push(`${fieldName} is required`);
        return errors;
    }

    // Validate: type
    if (options.type && typeof value !== options.type) {
        errors.push(`${fieldName} must be a ${options.type}`);
        return errors;
    }

    // Validate: numbers
    if (options.type === 'number' && typeof value === 'number') {
        if (!Number.isFinite(value)) {
            errors.push(`${fieldName} must be a valid number`);
        }

        if (options.integer && !Number.isInteger(value)) {
            errors.push(`${fieldName} must be an Integer`);
        }

        if (options.min !== undefined && value < options.min) {
            errors.push(`${fieldName} must be greater than or equal to ${options.min}`);
        }

        if (options.max !== undefined && value > options.max) {
            errors.push(`${fieldName} must be lesser than or equal to ${options.max}`);
        }
    }

    // Validate: String
    if (options.type === 'string' && typeof value === 'string') {
        if (options.minLength !== undefined && value.length < options.minLength) {
            errors.push(`${fieldName} must be at least ${options.minLength} characters`);
        }

        if (options.maxLength !== undefined && value.length > options.maxLength) {
            errors.push(`${fieldName} must be at most ${options.maxLength} characters`);
        }
    }

    return errors;
};
