import Link from 'next/link';
import React from 'react'

interface MenuItemProps {
    icon?: any,
    lable: string,
    iconSize?: "md" | "lg" | "xl" | "3xl" | undefined
}

const MenuItem : React.FC<MenuItemProps> = ({
    icon: Icon, lable, iconSize: IconSize="3xl"
}) => {
  return (
    <Link href="/" className='flex justify-start items-center space-x-2'>
        <Icon className={`text-${IconSize}`}/>
        <span>{lable}</span>
    </Link>
  );
}

export default MenuItem;