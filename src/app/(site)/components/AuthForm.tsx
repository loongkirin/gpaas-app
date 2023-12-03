'use client';

import Button from '@/components/buttons/Button';
import Input from '@/components/inputs/Input';
import { useRouter } from 'next/navigation';
import React, { useCallback, useRef, useState } from 'react'
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';
import { signIn } from 'next-auth/react';
import Captcha from '@/components/captcha/Captcha';
import axios from '@/lib/axios';
import toast from 'react-hot-toast';

type Variant = 'LOGIN' | 'REGISTER';

const AuthForm = () => {
    const[isLoading, setIsLoading] = useState(false);
    const[variant, setVariant] = useState<Variant>("LOGIN");
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

      const toggleVariant = useCallback(() => {
        if(variant === "LOGIN") {
            setVariant("REGISTER");
        } else {
            setVariant("LOGIN");
        }
      },[variant]);

      const onSubmit : SubmitHandler<FieldValues> = async (data) => {
        setIsLoading(true);
        const captcha = captchaRef.current?.value;
        const captcha_id = captchaRef.current?.id;
        try {
            switch(variant) {
                case "LOGIN":
                  const c = { ...data, captcha, captcha_id, redirect: false }
                  // console.log(c);
                  // axios.post("/auth/login", { ...c })
                  const res = await signIn("credentials", { ...data, captcha, captcha_id, redirect: false });
                  // console.log("auth form:", res);
                  if (res?.error == null) {
                    console.log("login success")
                    router.push("/account/setting")
                  } else {
                      console.log("Error occured while logging")
                  }
                    // router.push("/");
                  break;
                case "REGISTER":
                  // toast.error("toast error test");
                  const user = { ...data };
                  const tenant = {
                    tenant_id: "1",
                    tenant_name: "LongYan Software CO.,LTD",
                  }
                  const userData = { user, tenant }
                  const re = await axios.post("/auth/register", userData);
                  console.log(re);
                  break;
            }
        } catch {

        } finally {
            setIsLoading(false);
        }
      };

  return (
    <div className='mt-4 mx-auto w-full max-w-md'>
        <div className='rounded-lg shadow py-8 px-10'>
            <form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
                {variant === "REGISTER" &&<Input id="user_name" label='Name' required={true} register={register} errors={errors} placeholder='Name' disabled={isLoading}/> }
                <Input id="mobile" label='Mobile' required={true} register={register} errors={errors} placeholder='Mobile' disabled={isLoading}/>
                <Input id="password" type="password" label='Password' required={true} register={register} errors={errors} placeholder='Password' disabled={isLoading}/>
                <Captcha ref={captchaRef}/>
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