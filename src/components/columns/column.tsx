import styled from 'styled-components'
import {
  layout,
  flexbox,
  margin,
  padding,
  grid,
  LayoutProps,
  MarginProps,
  PaddingProps,
  GridProps,
  FlexboxProps,
} from 'styled-system'

export type ColumProps = LayoutProps & FlexboxProps & MarginProps & PaddingProps & GridProps

export const Column = styled.div<ColumProps>`
  display: flex;
  flex-direction: column;
  ${layout}
  ${flexbox}
  ${margin}
  ${padding}
  ${grid}
`
