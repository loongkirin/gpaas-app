import React, { useCallback, useRef, useState } from 'react';
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';

interface FormProps {
  id: string,
  label?: string,
  type?: string,
  placeholder?: string,
  required?: boolean,
  disabled?: boolean,
}

const Form = (props: FormProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: {
      errors,
    }
  } = useForm<FieldValues>({
    defaultValues: {
    }
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);
    try {

    } catch {

    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>

      </form>
    </>
  );
}

export default Form;