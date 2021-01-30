import React from 'react'

export type ProductListItemProps = {
  name: string
  sizes?: { name: string }
  price: number
}

export const ProductListItem: React.FC<ProductListItemProps> = ({
  name,
  sizes,
  price,
}: ProductListItemProps) => {
  return (
    <div>
      <p>{name}</p>
      {sizes?.name && (
        <ul>
          <li>{sizes.name}</li>
        </ul>
      )}
      <p>
        <strong>R$: {price}</strong>
      </p>
    </div>
  )
}
