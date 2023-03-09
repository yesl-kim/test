import React from "react";
import { useTabsContext } from "./TabsContext";

interface Props {
  children: React.ReactNode;
}

const TabPanels = ({ children }: Props) => {
  const { activeTab } = useTabsContext();

  const panel = React.Children.map(children, (child, index) => {
    if (!React.isValidElement(child)) {
      return null;
    }
    return activeTab === index ? child : null;
  });

  return <div>{panel}</div>;
};

export default TabPanels;
