'use client';

import Button from '@/components/buttons/Button';
import Input from '@/components/inputs/Input';
import { useRouter } from 'next/navigation';
import React, { useRef, useState } from 'react';
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';
import { signIn } from 'next-auth/react';
import Captcha from '@/components/captcha/Captcha';
import Container from '@/components/container/Container';
import AuthForm from '@/app/(site)/components/AuthForm';

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const captchaRef = useRef<HTMLInputElement>(null);
  const {
    register,
    handleSubmit,
    formState: {
      errors,
    }
  } = useForm<FieldValues>({
    defaultValues: {
      user_name: '',
      mobile: '',
      password: ''
    }
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);
    const captcha = captchaRef.current?.value;
    const captcha_id = captchaRef.current?.id;
    try {
      const res = await signIn("credentials", { ...data, captcha, captcha_id, redirect: false });
      if (res?.error == null) {
        console.log("login success")
        router.push("/account/setting")
      } else {
        console.log("Error occured while logging")
      }
    } catch {
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Container className=' items-center justify-center '>
        {/* <LoadeSpinner/> */}
        <form className='space-y-6 py-8 px-10 mx-auto border-gray-400 shadow max-w-md rounded-lg' onSubmit={handleSubmit(onSubmit)}>
          <Input id="mobile" label='Mobile' required={true} register={register} errors={errors} placeholder='Mobile' disabled={isLoading} />
          <Input id="password" type="password" label='Password' required={true} register={register} errors={errors} placeholder='Password' disabled={isLoading} />
          <Captcha ref={captchaRef} />
          <div>
            <Button disabled={isLoading} fullWidth type="submit">
              Login
            </Button>
          </div>
        </form>
      </Container>
      {/* <AuthForm /> */}
    </>
  );
}

export default LoginForm;