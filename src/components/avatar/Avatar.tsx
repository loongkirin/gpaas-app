import React from 'react'

const Avatar = ({
    children,
} : {
    children?: React.ReactNode,
}) => {
  return (
    <div className={`relative rounded-full overflow-hidden inline-block ring-2 ring-primaryBg`}>
        {children}
    </div>
  )
}

export default Avatar;