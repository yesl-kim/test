import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import AllCheckBox from './index'
import { Checkbox } from '../Checkbox'

// 데이터대로 렌더해야함
// - list 데이터 (개수, checked 여부에 맞게)
// - 모두 확인 버튼의 라벨 프로퍼티에 맞게
// - props가 주어지지 않았을 때 기본값대로 잘 렌더되는가
// 기능 테스트
// - 개별 토글링
// - 전체 확인
// - 개별 토글을 모두 껐을 때 -> 모두 확인 off
// - 개별 토글을 모두 켰을 때 -> 모두 확인 on

// TODO: 테스트가 모두 끝난 후 리셧해주는게 뭐더라
describe('AllCheckBox component', () => {
  // describe(('should render') => {
  //   test('list의 배열 리스트')
  // })
  test('주어진 props에 맞게 잘 렌더하는가', () => {
    const label = 'test'
    const data = [
      {
        id: 1,
        checked: false,
      },
      {
        id: 2,
        checked: true,
      },
      {
        id: 3,
        checked: false,
      },
    ]
    render(
      <AllCheckBox.Provider data={data}>
        <AllCheckBox.AllCheckButton label={label} />
        <AllCheckBox.List
          renderItem={({ list, onToggleItem }) =>
            list.map(({ id, checked }) => (
              <Checkbox
                key={id}
                checked={checked}
                onClick={() => onToggleItem(id)}
              />
            ))
          }
        />
      </AllCheckBox.Provider>
    )

    // allcheck button
    const allcheckButton = screen.getByText(label)
    expect(allcheckButton).toBeInTheDocument()

    // list
  })
})
