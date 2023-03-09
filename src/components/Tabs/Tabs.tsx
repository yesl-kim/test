import { useCallback, useMemo, useState } from "react";
import Panel from "./Panel";
import Tab from "./Tab";
import TabList from "./TabList";
import TabPanels from "./TabPanels";
import { TabsContext } from "./TabsContext";

interface Props {
  children: React.ReactNode;
}

const Tabs = ({ children }: Props) => {
  const [activeTab, setActiveTab] = useState(0);
  const onChange = useCallback((tabKey: number) => setActiveTab(tabKey), []);

  const value = useMemo(() => ({ activeTab, onChange }), [activeTab, onChange]);

  return (
    <TabsContext.Provider value={value}>
      <div className="tabs">{children}</div>
    </TabsContext.Provider>
  );
};

Tabs.TabList = TabList;
Tabs.Tab = Tab;
Tabs.TabPanels = TabPanels;
Tabs.Panel = Panel;

export default Tabs;
