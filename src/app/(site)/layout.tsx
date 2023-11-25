'use client'
import React, { useState } from 'react';
import { useThemeContext } from '@/context/ThemeContext';

const layout = ({
    children
} : {
    children: React.ReactNode
}) => {
  const {themeColor, setThemeColor, themeMode, setThemeMode} = useThemeContext();

  return (
    <>
      <div className={['bg-primaryBg flex flex-row w-full h-full gap-2',
      themeColor && `theme-${themeColor}`,
      themeMode && `theme-${themeMode}`,]
      .filter(Boolean).join(' ')}>
        <div className='basis-1/2 border-red-500 border-2'>
          <button  onClick={() => {
            setThemeColor("rose");
            setThemeMode("light")
          }}>Apply</button>
        </div>
        <div className='border-2 basis-1/2'>{children}</div>
      </div>
    </>
  )
};

export default layout;