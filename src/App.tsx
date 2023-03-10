import styled from 'styled-components'
import AllCheckBox from './components/AllCheckButton'
import { Checkbox } from './components/Checkbox'
import { Greeting } from './components/index'
import Tabs from './components/Tabs/Tabs'

const CHECK_DATA = [
  {
    id: 1,
    checked: false,
  },
  {
    id: 2,
    checked: false,
  },
  {
    id: 3,
    checked: false,
  },
]

function App() {
  return (
    <Container>
      {/* <Tabs>
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
      </Tabs> */}
      <AllCheckBox.Provider data={CHECK_DATA}>
        <AllCheckBox.AllCheckButton label="어디 되나 보자" />
        <AllCheckBox.List>
          {({ list, onToggleItem }) => {
            console.log('list: ', list)
            console.log('toggleItem: ', onToggleItem)
            return list.map(({ checked, id }) => (
              <Checkbox
                checked={checked}
                key={id}
                onClick={() => onToggleItem(id)}
              />
            ))
          }}
        </AllCheckBox.List>
      </AllCheckBox.Provider>
    </Container>
  )
}

const Container = styled.div`
  width: 500px;
  margin: 0 auto;
`

export default App
