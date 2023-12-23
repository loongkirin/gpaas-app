import { UIElement } from '@/models/UIElement';
import React, { useCallback, useRef, useState } from 'react';
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';
import Input from '../inputs/Input';
import Button from '../buttons/Button';

interface FormProps {
  id: string,
  row_item_number?: number
  items: UIElement[],
}

const Form = ({ id, items }: FormProps) => {
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
    console.log("form data:", data);
    try {

    } catch {

    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <form key={id} className='space-y-3' onSubmit={handleSubmit(onSubmit)}>
        {items.map((item, index) => (
          <Input key={item.api_name} id={item.api_name} type={item.type} label={item.lable} placeholder={item.placeholder} disabled={item.readonly} errors={errors} register={register} />
        ))}
        <Button type='submit'>Submit</Button>
      </form>
    </>
  );
}

export default Form;