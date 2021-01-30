import styled from 'styled-components'
import {
  color,
  ColorProps,
  layout,
  LayoutProps,
  shadow,
  ShadowProps,
  padding,
  PaddingProps,
} from 'styled-system'

type ButtonProps = ColorProps & LayoutProps & ShadowProps & PaddingProps

export const Button = styled.button<ButtonProps>`
  background-color: #900;
  border: none;
  color: #fff;
  cursor: pointer;
  padding: 10px 20px;
  font-size: 14px;
  ${color}
  ${layout}
  ${shadow}
  ${padding}
`
