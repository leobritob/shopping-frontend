import React from 'react'

import { Button, Column, Input, Title } from 'components'

export const LoginPage: React.FC = () => {
  return (
    <Column bg="white">
      <form>
        <Title>Painel de Autenticação</Title>
        <Input type="email" placeholder="E-mail" />
        <Input type="password" placeholder="Senha" mt="10px" />
        <Button type="submit" my="10px">
          Conectar
        </Button>
      </form>
    </Column>
  )
}
