import React from 'react'

import { Row, Button } from 'components'
import { ProductListItem, ProductListItemProps } from './product-list-item'

type ProductsListProps = {
  products: ProductListItemProps[]
  onRemoveProduct: (index: number) => void
}

export const ProductsList: React.FC<ProductsListProps> = ({ products, onRemoveProduct }: ProductsListProps) => {
  return (
    <ul>
      {products.map((product, index) => (
        <Row key={index} pb="10px">
          <ProductListItem {...product} />
          <Button onClick={() => onRemoveProduct(index)}>Remover</Button>
        </Row>
      ))}
    </ul>
  )
}
