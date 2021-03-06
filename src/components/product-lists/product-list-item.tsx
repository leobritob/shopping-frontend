import React from 'react'

import { Column } from 'components'

export type ProductListItemProps = {
  name: string
  sizes?: { name: string }[]
  price: number
}

export const ProductListItem: React.FC<ProductListItemProps> = ({ name, sizes, price }: ProductListItemProps) => {
  return (
    <Column width="100%">
      <p>{name}</p>
      <ul>
        {sizes?.map((size, index) => (
          <li key={index}>{size.name}</li>
        ))}
      </ul>
      <p>
        <strong>R$: {price}</strong>
      </p>
    </Column>
  )
}
