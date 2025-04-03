import { useState, useCallback } from 'react';

interface FormConfig<T> {
  initialValues: T;
  onSubmit: (values: T) => Promise<void>;
  validate?: (values: T) => Partial<Record<keyof T, string>>;
}

interface FormState<T> {
  values: T;
  errors: Partial<Record<keyof T, string>>;
  isSubmitting: boolean;
  touched: Partial<Record<keyof T, boolean>>;
}

export function useForm<T extends Record<string, any>>({
  initialValues,
  onSubmit,
  validate
}: FormConfig<T>) {
  const [state, setState] = useState<FormState<T>>({
    values: initialValues,
    errors: {},
    isSubmitting: false,
    touched: {}
  });

  const setFieldValue = useCallback((field: keyof T, value: any) => {
    setState(prev => ({
      ...prev,
      values: {
        ...prev.values,
        [field]: value
      },
      touched: {
        ...prev.touched,
        [field]: true
      }
    }));
  }, []);

  const setFieldTouched = useCallback((field: keyof T) => {
    setState(prev => ({
      ...prev,
      touched: {
        ...prev.touched,
        [field]: true
      }
    }));
  }, []);

  const validateForm = useCallback(() => {
    if (!validate) return {};
    const errors = validate(state.values);
    setState(prev => ({ ...prev, errors }));
    return errors;
  }, [validate, state.values]);

  const handleSubmit = useCallback(async (e?: React.FormEvent) => {
    if (e) {
      e.preventDefault();
    }

    setState(prev => ({ ...prev, isSubmitting: true }));
    
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      try {
        await onSubmit(state.values);
      } catch (error) {
        console.error('Form submission error:', error);
      }
    }
    
    setState(prev => ({ ...prev, isSubmitting: false }));
  }, [onSubmit, state.values, validateForm]);

  const resetForm = useCallback(() => {
    setState({
      values: initialValues,
      errors: {},
      isSubmitting: false,
      touched: {}
    });
  }, [initialValues]);

  return {
    values: state.values,
    errors: state.errors,
    touched: state.touched,
    isSubmitting: state.isSubmitting,
    setFieldValue,
    setFieldTouched,
    handleSubmit,
    resetForm,
    validateForm
  };
} 