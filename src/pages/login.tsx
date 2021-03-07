import React from 'react'

import { Button, Column, Input, Title } from 'components'

export const LoginPage: React.FC = () => {
  return (
    <Column as="form" bg="white">
      <Title>Painel de Autenticação</Title>
      <Input type="email" placeholder="E-mail" />
      <Input type="password" placeholder="Senha" mt="10px" />
      <Button type="submit" width="100%" my="10px">
        Conectar
      </Button>
    </Column>
  )
}
