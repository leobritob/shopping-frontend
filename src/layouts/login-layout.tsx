import React from 'react'

import { Row, Column } from 'components'

export const LoginLayout: React.FC = ({ children }) => {
  return (
    <Row width="100%" height="100vh">
      <Column width="400px" height="100vh" p="20px">
        {children}
      </Column>
      <Column
        flex={1}
        height="100vh"
        p="20px"
        backgroundImage="url('admin-background.jpeg')"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="repeat-x"
      >
        <p>Shopping - {new Date().getFullYear()}</p>
      </Column>
    </Row>
  )
}
