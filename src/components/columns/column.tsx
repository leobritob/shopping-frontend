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
  color,
  ColorProps,
  border,
  BorderProps,
} from 'styled-system'

export type ColumProps = LayoutProps & FlexboxProps & MarginProps & PaddingProps & GridProps & ColorProps & BorderProps

export const Column = styled.div<ColumProps>`
  display: flex;
  flex-direction: column;
  ${layout}
  ${flexbox}
  ${margin}
  ${padding}
  ${grid}
  ${color}
  ${border}
`
