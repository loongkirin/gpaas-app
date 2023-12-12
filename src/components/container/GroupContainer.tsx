import React from 'react'
import Container from './Container';

const GroupContainer = ({
  groupTitle,
  children,
  className,
}: {
  groupTitle?: string,
  children?: React.ReactNode,
  className?: string,
}) => {
  return (
    <div className=" border-red-700 rounded-lg border">
      <div className="flex justify-start text-base pl-6 -translate-y-3">
        <span className="bg-primaryBg px-2 text-gray-500">
          {groupTitle}
        </span>
      </div>
      <Container className={`-translate-y-1.5 ${className}`}>
        {children}
      </Container>
    </div>
  )
}

export default GroupContainer;