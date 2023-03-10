import { createContext, useContext } from 'react'

export interface CheckItem {
  id: number
  checked: boolean
}

interface CheckContextType {
  checkedItemList: CheckItem[]
  isAllChecked: boolean
  toggleItem: (id: number) => void
  toggleAll: () => void
}

export const CheckContext = createContext<CheckContextType | null>(null)

export const useCheckContext = () => {
  const context = useContext(CheckContext)
  if (!context) {
    throw new Error(
      'AllCheckButton components cannot be rendered outside the AllCheckProvider'
    )
  }
  return context
}
