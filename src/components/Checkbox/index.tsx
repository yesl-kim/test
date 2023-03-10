import React from 'react'
import styled from 'styled-components'

interface Props {
  checked: boolean
  children?: React.ReactNode
}

export const Checkbox = styled.div<Props>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ checked }) => (checked ? '#D9DEE2' : '#F8A21F')};
`
