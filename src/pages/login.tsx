import React, { useCallback } from 'react'
import { useForm } from 'react-hook-form'

import { Button, Column, Input, Title } from 'components'
import { useUserContext } from 'contexts'

export const LoginPage: React.FC = () => {
  const { register, handleSubmit } = useForm()
  const { setUser } = useUserContext()

  const onSubmit = useCallback(
    (value) => {
      console.log(value)
      setUser(value)
    },
    [setUser]
  )

  return (
    <Column bg="white">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Title>Painel de Autenticação</Title>
        <Input type="email" id="email" name="email" placeholder="E-mail" ref={register({ required: true })} />
        <Input
          type="password"
          id="password"
          name="password"
          placeholder="Senha"
          mt="10px"
          ref={register({ required: true })}
        />
        <Button type="submit" width="100%" my="10px">
          Conectar
        </Button>
      </form>
    </Column>
  )
}
