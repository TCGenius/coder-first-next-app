import ProductList from '@/components/products/ProductList'
import CategoryList from '@/components/products/CategoryList'

export default function ProductsPage({params}) {

const { category } = params

  return (
    
      <ProductList productCateg={category} />
    
  )
}