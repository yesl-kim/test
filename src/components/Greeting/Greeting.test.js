import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import Greeting from './Greeting'

describe('Greeting component', () => {
  test('should render', () => {
    render(<Greeting />)

    const text = screen.getByText('hello world', { exact: false })
    const button = screen.getByText('change')
    expect(text).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })

  test('should render "hello world" text before clicking button', () => {
    render(<Greeting />)

    const text = screen.queryByText('hello world!')
    const changedText = screen.queryByText('changed!')
    expect(text).toBeInTheDocument()
    expect(changedText).not.toBeInTheDocument()
  })

  test('should change text to "changed!" after clicking button', () => {
    // arrange: render component
    render(<Greeting />)

    // act: click button
    const button = screen.getByRole('button')
    fireEvent.click(button)

    // assert
    const text = screen.queryByText('hello world!')
    const changedText = screen.queryByText('changed!')
    expect(text).not.toBeInTheDocument()
    expect(changedText).toBeInTheDocument()
  })
})
