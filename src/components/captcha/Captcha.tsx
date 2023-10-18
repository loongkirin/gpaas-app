import Image from 'next/image';
import React from 'react';
import useCaptcha from '@/hooks/useCaptcha';

const Captcha = React.forwardRef((props, ref: React.ForwardedRef<HTMLInputElement>) => {
    const { captchaData, isLoading, errorMessage, fetchCaptcha } = useCaptcha()
    return (
        <>
        {isLoading && <div>loading......</div>}
        {!isLoading && !errorMessage && (
            <div className="flex flex-row" {...props}>
                <Image alt="captcha" src={captchaData.PicPath} width={120} height={36} onClick={() => fetchCaptcha()}/>
                <input id={captchaData.CaptchaId} placeholder='enter captcha' ref={ref}  className="block rounded-md border-0 py-1.5 text-gray-700 text-sm leading-6 w-full shadow-sm ring-1 
            placeholder:text-gray-400 ring-inset ring-gray-300 px-1 mt-1 focus:ring-sky-600 appearance-none focus:ring-2 
            focus:ring-inset focus-visible:outline-0"/>
            </div>
        )}
        {errorMessage && <div>{errorMessage}</div>}
        </>
        
    );
});

export default Captcha;