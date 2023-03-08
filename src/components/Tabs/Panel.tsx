import React from 'react'

interface Props {
  children: React.ReactElement
}

const Panel = ({ children }: Props) => {
  return <div>{children}</div>
}

export default Panel
