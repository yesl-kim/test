import styled from "styled-components";
import { Greeting } from "./components/index";
import Tabs from "./components/Tabs/Tabs";

function App() {
  return (
    <Container>
      <Tabs>
        <Tabs.TabList>
          <Tabs.Tab>tab 1</Tabs.Tab>
          <Tabs.Tab>tab 2</Tabs.Tab>
          <Tabs.Tab>tab 3</Tabs.Tab>
        </Tabs.TabList>
        <Tabs.TabPanels>
          <Tabs.Panel>panel 1</Tabs.Panel>
          <Tabs.Panel>panel 2</Tabs.Panel>
          <Tabs.Panel>panel 3</Tabs.Panel>
        </Tabs.TabPanels>
      </Tabs>
    </Container>
  );
}

const Container = styled.div`
  width: 500px;
  margin: 0 auto;
`;

export default App;
