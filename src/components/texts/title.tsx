import styled from 'styled-components'

export const Title = styled.h1`
  color: #069;
  text-transform: uppercase;
  font-size: 24px;
  position: relative;

  &::before {
    content: ' ';
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 2px;
    background: #f90;
    border-radius: 10px;
  }
`
