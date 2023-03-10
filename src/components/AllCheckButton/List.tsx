import React, { useCallback } from 'react'
import { CheckItem, useCheckContext } from './CheckContext'

interface Props {
  children: (data: {
    list: CheckItem[]
    onToggleItem: (id: number) => void
  }) => React.ReactNode
}

// TODO: render props 알아보기
export const List = ({ children }: Props) => {
  const { checkedItemList, toggleItem } = useCheckContext()

  return (
    <div>{children({ list: checkedItemList, onToggleItem: toggleItem })}</div>
  )
}
