import ProductList from '@/components/products/ProductList'

export async function generateStaticParams() {
  return[
    {category: 'all'},
    {category: 'aires'},
    {category: 'heladeras'},
    {category: 'cocina'},
    {category: 'microondas'}
  ]
}

export default function ProductsPage({params}) {

const { category } = params

  return (
    
      <ProductList productCateg={category} />
    
  )
}