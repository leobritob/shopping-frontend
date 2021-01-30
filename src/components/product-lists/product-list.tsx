import React from 'react'

import { ProductListItem, ProductListItemProps } from './product-list-item'

type ProductsListProps = {
  title: string
  products: ProductListItemProps[]
}

export const ProductsList: React.FC<ProductsListProps> = ({
  title,
  products,
}: ProductsListProps) => {
  return (
    <ul>
      {title && <h2>{title}</h2>}
      {products.map((product, index) => (
        <ProductListItem key={index} {...product} />
      ))}
    </ul>
  )
}
