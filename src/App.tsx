import React from 'react'

import { Button } from 'components/buttons'
import { ProductsList } from 'components/product-lists'

const App: React.FC = () => {
  return (
    <div>
      <ProductsList
        title="Carrinho de Compra"
        products={[
          { name: 'Camiseta', sizes: { name: 'P' }, price: 0 },
          { name: 'Calca Jeans', price: 10 },
          { name: 'Oculos', price: 99 },
        ]}
      />
      <Button>Finalizar Compra</Button>
    </div>
  )
}

export default App
