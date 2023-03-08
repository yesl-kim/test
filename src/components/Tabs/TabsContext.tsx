import React, { createContext, useContext } from 'react'

export type TabsPropType = {
  children: React.ReactNode
}

export type TabsContextType = {
  activeTab: number
  onChange: (key: number) => void
}

export const TabsContext = createContext<TabsContextType | null>(null)

export function useTabsContext() {
  const context = useContext(TabsContext)
  if (!context) {
    throw new Error(
      'Tabs components cannot be rendered outside the TabsProvider'
    )
  }
  return context
}
