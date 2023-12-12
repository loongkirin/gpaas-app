import React from 'react'

const Container = ({
  children,
  className,
}: {
  children?: React.ReactNode,
  className?: string,
}) => {
  return (
    <div className={`mx-auto w-full h-full border-green-500 rounded border shadow ${className}`}>
      {children}
    </div>
  )
}

export default Container;