'use client'
import React from 'react';

const layout = ({
    children
} : {
    children: React.ReactNode
}) => {
  return (
    <>
      <div className={['bg-primaryBg flex flex-row w-full h-full gap-2']
      .filter(Boolean).join(' ')}>
        <div className='basis-1/2 border-red-500 border-2'>
          <button  onClick={() => {
            // setThemeColor("green");
            // setThemeMode("light")
          }}>Apply</button>
        </div>
        <div className='border-2 basis-1/2'>{children}</div>
      </div>
    </>
  )
};

export default layout;