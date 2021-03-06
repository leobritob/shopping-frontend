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
  position,
  PositionProps,
  background,
  BackgroundProps,
  space,
  SpaceProps,
} from 'styled-system'

export type InputProps = LayoutProps &
  FlexboxProps &
  MarginProps &
  PaddingProps &
  GridProps &
  ColorProps &
  BorderProps &
  PositionProps &
  BackgroundProps &
  SpaceProps

export const Input = styled.input<InputProps>`
  width: 100%;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #eaeaea;
  ${layout}
  ${flexbox}
  ${margin}
  ${padding}
  ${grid}
  ${color}
  ${border}
  ${position}
  ${background}
  ${space}
`
