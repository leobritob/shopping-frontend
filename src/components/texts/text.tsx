import styled from 'styled-components'
import { typography, TypographyProps } from 'styled-system'

export type TextProps = TypographyProps

export const Text = styled.p.attrs({ 'data-testid': 'text' })<TextProps>`
  color: #000;
  font-size: 14px;
  ${typography}
`
