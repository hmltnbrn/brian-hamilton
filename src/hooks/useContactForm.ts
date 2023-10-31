import { Reducer, useCallback, useReducer } from 'react';
import { emailRegex } from '../helpers/constants';

type FormField = {
    value: string;
    isValid: boolean;
    error: string | boolean | null;
};

type FormState = {
    name: FormField;
    email: FormField;
    subject: FormField;
    message: FormField;
};

type FormKeys = keyof FormState;

type FormActions =
    | {
          type: 'update_field';
          key: string;
          value: string;
      }
    | {
          type: 'validate_field';
          key: FormKeys;
      }
    | {
          type: 'reset';
      };

type FormReducer = {
    formState: FormState;
    updateField: (key: string, value: string) => void;
    validateField: (key: string) => void;
    resetForm: () => void;
};

const validateFormField = (key: string, value: string): string | null => {
    let error = null;
    if (!value) {
        error = 'Required field';
    } else if (key === 'email' && value) {
        if (!emailRegex.test(value)) {
            error = 'Not a valid email';
        }
    }
    return error;
};

export const useContactForm = (): FormReducer => {
    const initialForm = {
        name: { value: '', error: '', isValid: false },
        email: { value: '', error: '', isValid: false },
        subject: { value: '', error: '', isValid: false },
        message: { value: '', error: '', isValid: false },
    };

    const [formState, dispatch] = useReducer<Reducer<FormState, FormActions>>(
        (state, action) => {
            switch (action.type) {
                case 'update_field': {
                    const newFormField = {
                        value: action.value,
                        error: null,
                        isValid: !!action.value,
                    };
                    return {
                        ...state,
                        [action.key]: newFormField,
                    };
                }
                case 'validate_field': {
                    const error = validateFormField(
                        action.key,
                        state[action.key].value,
                    );
                    const newFormField = {
                        ...state[action.key],
                        error,
                        isValid: !error,
                    };
                    return {
                        ...state,
                        [action.key]: newFormField,
                    };
                }
                case 'reset': {
                    return initialForm;
                }
                default:
                    return state;
            }
        },
        initialForm,
    );

    const updateField = (key: string, value: string) => {
        dispatch({
            type: 'update_field',
            key,
            value,
        });
    };

    const validateField = useCallback(
        (key: string) => {
            const fieldKey = key as FormKeys;
            if (!formState[fieldKey].isValid) {
                dispatch({
                    type: 'validate_field',
                    key: fieldKey,
                });
            }
        },
        [formState],
    );

    const resetForm = () => {
        dispatch({
            type: 'reset',
        });
    };

    return { formState, updateField, validateField, resetForm };
};
