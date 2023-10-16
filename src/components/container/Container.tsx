import React from 'react'

const Container = ({
    children,
    className,
} : {
    children?: React.ReactNode,
    className: string,
}) => {
  return (
    <div className= {`mx-auto w-full h-full rounded border shadow ${className}`}>
        {children}
    </div>
  )
}

export default Container;