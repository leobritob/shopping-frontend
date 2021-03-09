import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import pretty from 'pretty'

import { Button } from 'components'
import { theme } from 'styles'

describe('<Button />', () => {
  let container: Element

  beforeAll(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
  })

  afterAll(() => {
    unmountComponentAtNode(container)
    container.remove()
  })

  it('should render button correctly', () => {
    act(() => {
      render(<Button theme={theme}>Conectar</Button>, container)
    })

    expect(container.querySelector('[data-testid="button"]')?.textContent).toBe('Conectar')
  })

  it('should render a cancel button correctly', () => {
    act(() => {
      render(<Button theme={theme}>Cancelar</Button>, container)
    })

    expect(container.querySelector('[data-testid="button"]')?.textContent).toBe('Cancelar')
  })

  it('should render the button snapshot correctly', () => {
    act(() => {
      render(<Button theme={theme}>Conectar</Button>, container)
    })

    expect(pretty(container.innerHTML)).toMatchInlineSnapshot(
      `"<button data-testid=\\"button\\" class=\\"sc-bdfBwQ lDFgM\\">Conectar</button>"`
    )
  })
})
