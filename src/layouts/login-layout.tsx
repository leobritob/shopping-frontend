import React from 'react'

import { Row, Column, Text } from 'components'

export const LoginLayout: React.FC = ({ children }) => {
  return (
    <Row width="100%" height="100vh">
      <Column width={{ _: '100%', sm: '400px' }} height="100vh" p="0 40px">
        <Column flex={1}>{children}</Column>
        <Column height="50px">
          <Text fontSize="smaller">Shopping - {new Date().getFullYear()}</Text>
        </Column>
      </Column>
      <Column
        flex={1}
        display={{ _: 'none', sm: 'block' }}
        height="100vh"
        p="20px"
        backgroundImage="url('admin-background.jpeg')"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="repeat-x"
      ></Column>
    </Row>
  )
}
