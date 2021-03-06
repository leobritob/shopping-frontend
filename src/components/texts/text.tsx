import React, { Fragment, useState } from 'react'

type TextProps = {
  message: string
  header?: {
    title: string
  }
}

export const Text: React.FC<TextProps> = ({ message: Mensagem, header }: TextProps) => {
  const [name, setName] = useState('Ricardo')

  return (
    <Fragment>
      <p>{Mensagem}</p>
      {header?.title && <h1>{header.title}</h1>}
      <br />
      <p>Nome: {name}</p>
      <input type="text" placeholder="Digite seu nome" onChange={(e) => setName(e.target.value)} />
    </Fragment>
  )
}
