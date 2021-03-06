import React, { useCallback } from 'react'
import { useHistory } from 'react-router'

import { Column, Row, Text, Nav } from 'components'
import { StorageHelper } from 'helpers'
import { useUserContext } from 'contexts'

export const Sidebar: React.FC = () => {
  const history = useHistory()
  const { setUser } = useUserContext()

  const handleExit = useCallback(() => {
    StorageHelper.deleteItem('user')
    history.push('/')
    setUser(undefined)
  }, [history, setUser])

  return (
    <Column
      width={{ _: '300px' }}
      height="100vh"
      backgroundColor="primary"
      position="fixed"
      top="0"
      left="0"
      alignItems="flex-start"
      justifyContent="flex-start"
      borderTopRightRadius="30px"
      borderBottomRightRadius="30px"
    >
      <Column width="100%" padding="30px 0 5px 0" justifyContent="space-between">
        <Text fontSize="24px" color="#fff" padding="10px 0">
          SHOPPING
        </Text>

        <Row width="100%" padding="10px">
          <Text color="#fff" fontSize="12px">
            Meu Perfil
          </Text>
          <Column width="15px" />
          <Text cursor="pointer" color="#fff" fontSize="12px" onClick={handleExit}>
            Sair
          </Text>
        </Row>

        <Column borderBottom="1px solid rgba(255,255,255,0.05)" width="90%" margin="10px 0" />
      </Column>

      <Text lineHeight="25px" letterSpacing="2px" color="rgba(255,255,255,0.5)" padding="10px 20px">
        MENU
      </Text>
      <Nav
        links={[
          { label: 'Dashboard' },
          { label: 'Relatórios' },
          { label: 'Produtos' },
          { label: 'Fornecedores' },
          { label: 'Colaboradores' },
        ]}
      />
    </Column>
  )
}
