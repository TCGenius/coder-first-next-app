import ProductList from '@/components/products/ProductList'
import CategoryList from '@/components/products/CategoryList'

export default function ProductsPage({params}) {

const { category } = params

  return (
    <div className='container h-full m-auto text-center'>
      <CategoryList categ={category}/>
      <ProductList productCateg={category} />
    </div>
  )
}