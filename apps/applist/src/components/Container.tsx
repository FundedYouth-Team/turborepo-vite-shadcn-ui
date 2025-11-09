import React from 'react'

interface PageContainerProps {
  children: React.ReactNode
}

const Container: React.FC<PageContainerProps> = ({ children }) => {
  return (
    <>
      <div className="flex flex-1 justify-center px-40 py-5">
        <div className="flex max-w-[960px] flex-1 flex-col">{children}</div>
      </div>
    </>
  )
}

export default Container
