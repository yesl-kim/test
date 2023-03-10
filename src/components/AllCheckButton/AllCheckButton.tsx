import React from 'react'
import styled from 'styled-components'
import { Checkbox } from '../Checkbox'
import { useCheckContext } from './CheckContext'

interface Props {
  label?: string
}

export const AllCheckButton = ({
  label = '모두 확인 및 동의합니다.',
}: Props) => {
  const { isAllChecked, toggleAll } = useCheckContext()
  return (
    <Container onClick={toggleAll}>
      <Checkbox checked={isAllChecked} />
      <Label>{label}</Label>
    </Container>
  )
}

const Container = styled.button`
  display: flex;
  gap: 10px;
  padding: 17px 20px;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0px 0px 15px #868e9629;
`

const Label = styled.span`
  color: #495057;
`
