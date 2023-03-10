import React, { useCallback, useMemo, useState } from 'react'
import { CheckContext, CheckItem } from './CheckContext'

interface Props {
  children: React.ReactNode
  data: CheckItem[]
}

export const AllCheckProvider = ({ children, data }: Props) => {
  const [checkedItemList, setCheckedItemList] = useState<CheckItem[]>(data)

  const isAllChecked = useMemo(
    () =>
      checkedItemList.reduce(
        (allChecked, { checked }) => allChecked && checked,
        true
      ),
    [checkedItemList]
  )

  const toggleItem = useCallback((id: number) => {
    setCheckedItemList((prev) =>
      prev.map((item) =>
        id === item.id ? { ...item, checked: !item.checked } : item
      )
    )
  }, [])

  const toggleAll = useCallback(() => {
    setCheckedItemList((prev) =>
      prev.map((item) => ({ ...item, checked: !isAllChecked }))
    )
  }, [])

  const value = useMemo(
    () => ({
      checkedItemList,
      isAllChecked,
      toggleItem,
      toggleAll,
    }),
    [checkedItemList, isAllChecked, toggleItem, toggleAll]
  )

  return (
    <CheckContext.Provider value={value}>
      <div>{children}</div>
    </CheckContext.Provider>
  )
}
