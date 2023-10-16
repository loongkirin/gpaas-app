'use client';

import Button from '@/components/buttons/Button';
import Input from '@/components/inputs/Input';
import { useRouter } from 'next/navigation';
import React, { useCallback, useState } from 'react'
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';

type Variant = 'LOGIN' | 'REGISTER';

const AuthForm = () => {
    const[isLoading, setIsLoading] = useState(false);
    const[variant, setVariant] = useState<Variant>("LOGIN");
    const router = useRouter();
    const {
        register, 
        handleSubmit,
        formState: {
          errors,
        }
      } = useForm<FieldValues>({
        defaultValues: {
          name: '',
          mobile: '',
          password: ''
        }
      });

      const toggleVariant = useCallback(() => {
        if(variant === "LOGIN") {
            setVariant("REGISTER");
        } else {
            setVariant("LOGIN");
        }
      },[variant]);

      const onSubmit : SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);
        try {
            switch(variant) {
                case "LOGIN":
                    router.push("/home");
                    break;
                case "REGISTER":
                    break;
            }
        } catch {

        } finally {
            setIsLoading(false);
        }
      };

  return (
    <div className='mt-4 mx-auto w-full max-w-md'>
        <div className='bg-white rounded-lg shadow py-8 px-10'>
            <form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
                {variant === "REGISTER" &&<Input id="name" label='Name' required={true} register={register} errors={errors} placeholder='Name' disabled={isLoading}/> }
                <Input id="mobile" label='Mobile' required={true} register={register} errors={errors} placeholder='Mobile' disabled={isLoading}/>
                <Input id="password" type="password" label='Password' required={true} register={register} errors={errors} placeholder='Password' disabled={isLoading}/>
                <div>
                    <Button disabled={isLoading} fullWidth type="submit">
                        {variant === "LOGIN" ? "Login" : "Register"}
                    </Button>
                </div>
            </form>
            <div className='flex justify-center text-sm font-semibold text-gray-600 gap-2 mt-6 px-2'>
                <div>{variant === "LOGIN" ? "New to GPaaS?" : "Already have an account?"}</div>
                <div className='cursor-pointer underline' onClick={toggleVariant}>{variant === "LOGIN" ? "Create an account" : "Login"}</div>
            </div>
        </div>    
    </div>
  );
}

export default AuthForm;