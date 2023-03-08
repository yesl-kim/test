import React, { cloneElement, isValidElement } from 'react'
import { TabsContext, useTabsContext } from './TabsContext'

interface Props {
  children: React.ReactElement
}

const TabList = ({ children }: Props) => {
  const { onChange } = useTabsContext()
  const tabList = React.Children.map(children, (child, index) => {
    if (isValidElement(child)) {
      return null
    }
    return cloneElement(child, {
      onClick: () => onChange(index),
    })
  })

  return <div className="tab-list">{tabList}</div>
}

export default TabList
