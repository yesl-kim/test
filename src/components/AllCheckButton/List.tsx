import React, { useCallback } from 'react'
import { CheckItem, useCheckContext } from './CheckContext'

interface Props {
  renderItem: (data: {
    list: CheckItem[]
    onToggleItem: (id: number) => void
  }) => React.ReactNode
}

// TODO: render props 알아보기
export const List = ({ renderItem }: Props) => {
  const { checkedItemList, toggleItem } = useCheckContext()

  return (
    <div>{renderItem({ list: checkedItemList, onToggleItem: toggleItem })}</div>
  )
}
