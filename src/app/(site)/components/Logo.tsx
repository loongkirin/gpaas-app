import Image from 'next/image';
import React from 'react'

const Logo = ({
    width = 48,
    height = 48,
} : {
    width?: number,
    height?: number,
}) => {
  return (
    <>
      <Image src="/images/logo.jpg" alt='Logo' className='mx-auto w-auto rounded-full' height={height} width={width}/>
    </>
  );
}

export default Logo;