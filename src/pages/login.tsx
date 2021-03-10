import React, { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'

import { Button, Column, Input, Title } from 'components'

export const LoginPage: React.FC = () => {
  const { handleSubmit } = useForm()
  const { push } = useHistory()

  const onSubmit = useCallback(
    (value) => {
      push('/home')
    },
    [push]
  )

  return (
    <Column bg="white">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Title>Painel de Autenticação</Title>
        <Input type="email" placeholder="E-mail" />
        <Input type="password" placeholder="Senha" mt="10px" />
        <Button type="submit" width="100%" my="10px">
          Conectar
        </Button>
      </form>
    </Column>
  )
}
