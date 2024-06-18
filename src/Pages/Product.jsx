import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useSearchParams } from 'react-router-dom'
import Breadcrum from '../Components/Breadcrums/Breadcrum'

const Product = () => {
  const {all_product} = useContext(ShopContext)
  const {productId} = useSearchParams();
  const product = all_product.find((e)=>e.id===Number(productId))
  return (
    <div>
      <Breadcrum product={product} />
    </div>
  )
}

export default Product
