import ProductList from '@/components/products/ProductList'

export default function ProductsPage({params}) {

const { category } = params

  return (
    
      <ProductList productCateg={category} />
    
  )
}