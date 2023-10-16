import clsx from 'clsx';
import React from 'react'

interface ButtonProps {
    type?: "button" | "submit" | "reset" | undefined,
    fullWidth?: boolean
    children?: React.ReactNode,
    secondary?: boolean,
    danger?: boolean,
    disabled?: boolean,
    onClick?: ()=> void,
}

const Button : React.FC<ButtonProps> = ({type = "button", fullWidth, children, secondary, danger, disabled, onClick}) => {
  return (
    <button type={type} disabled={disabled} onClick={onClick} className={clsx(`flex justify-center text-sm font-semibold rounded-md px-3 py-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`, 
        fullWidth && `w-full`,
        disabled && `cursor-not-allowed opacity-50`,
        secondary ? `text-gray-700` : `text-white`,
        danger && `bg-rose-500 hover:bg-rose-600 focus-visible:outline-rose-600 `,
        !secondary && !danger && `bg-sky-500 hover:bg-sky-600 focus-visible:outline-sky-600`
        )}>
        {children}
    </button>
  );
}

export default Button;