import React from 'react';

interface UIItemProps {
  icon: any,
  lable: string,
}

const UIItem = ({
  icon: Icon, lable
}: UIItemProps) => {

  return (
    <div className='flex flex-row items-center border border-gray-400 rounded-md p-2 w-[130px]'>
      <Icon className='fill-red-400 border-gray-400 border rounded-md text-2xl' />
      <span className='ml-2 text-gray-400 text-base'>{lable}</span>
    </div>
  );
}

export default UIItem;