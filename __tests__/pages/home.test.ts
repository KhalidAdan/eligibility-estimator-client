/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '../../pages/index'
import React from 'react'
import * as nextRouter from 'next/router'

describe('index page', () => {
  let useRouter
  // mocking useRouter, as we'll eventually need it for sedning the correct requests
  beforeAll(() => {
    useRouter = jest.spyOn(nextRouter, 'useRouter')
    useRouter.mockImplementation(() => ({
      route: '/',
      pathname: '/',
      query: '',
      asPath: '',
    }))
  })

  it('should render the home page', async () => {
    render(React.createElement(Home))
    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()
  })
})
