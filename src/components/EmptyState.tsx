import React from 'react'

const EmptyState = ({
    children,
} : {
    children? : React.ReactNode,
}) => {
  return (
    <div className='flex justify-center items-center bg-gray-100 px-6 py-8 h-full rounded-md'>
        <div className='flex flex-col text-2xl text-gray-600 font-semibold mt-2'>
            {children}
        </div>
    </div>
  )
}

export default EmptyState;