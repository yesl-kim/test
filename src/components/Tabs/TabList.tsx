import React, { cloneElement, isValidElement } from "react";
import styled from "styled-components";
import { TabsContext, useTabsContext } from "./TabsContext";

interface Props {
  children: React.ReactNode;
}

const TabList = ({ children }: Props) => {
  const { onChange } = useTabsContext();
  const tabList = React.Children.map(children, (child, index) => {
    if (!isValidElement(child)) {
      return null;
    }
    return cloneElement(child, {
      onClick: () => onChange(index),
    });
  });

  return <List>{tabList}</List>;
};

const List = styled.div`
  display: flex;
  justify-content: space-around;
`;

export default TabList;
