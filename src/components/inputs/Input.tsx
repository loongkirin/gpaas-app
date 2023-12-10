'use client';

import React from 'react';
import clsx from 'clsx';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

interface InputProps {
  id: string,
  label?: string,
  type?: string,
  placeholder?: string,
  required?: boolean,
  disabled?: boolean,
  register?: UseFormRegister<FieldValues>,
  errors: FieldErrors,
}

const Input: React.FC<InputProps> = ({ id, label, type, placeholder, required, disabled, register, errors }) => {
  return (
    <div>
      {label && <label htmlFor={id} className='block text-gray-700 text-sm font-semibold leading-6'>{label}</label>}
      <input id={id} type={type} placeholder={placeholder} autoComplete={id} disabled={disabled} {...register && register(id, { required })}
        className={clsx(`block rounded-md border-0 py-1.5 text-gray-700 text-sm leading-6 w-full shadow-sm ring-1 
            placeholder:text-gray-400 ring-inset ring-gray-300 px-1 mt-1 focus:ring-sky-600 appearance-none focus:ring-2 
            focus:ring-inset focus-visible:outline-0`,
          errors[id] && `focus:ring-rose-600`,
          disabled && `focus:cursor-default opactiy-50`)} />
    </div>
  );
}

export default Input;