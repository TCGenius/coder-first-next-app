import AdminCard from '@/components/admin/adminCard'
import { settings, tag, box } from '@/styles/icons'
import { Tooltip, Link } from '@nextui-org/react'
export default function AdminPage() {

  const adminOptions = [
    {
      name: 'Categorías',
      url: '/admin/categories',
      icon: tag,
      description: 'Configure sus categorías'
    }, {
      name: 'Productos',
      url: '/admin/products/edit/all',
      icon: box,
      description: 'Cree, modifique y elimine productos'
    }, {
      name: 'Configuración',
      url: '/admin/settings',
      icon: settings,
      description: 'Realice configuraciones generales'
    }
    //Con esto configuro las opciones que tienen. Aún no es posible realizar ninguna modificación, pero se continuará en un futuro,
  ]
  return(
    <div className='container px-4 py-48 h-full min-h-screen m-auto flex flex-wrap gap-8 items-center justify-center'>
      {adminOptions.map( option => (
        <Tooltip key={option.name} content={option.description} showArrow>
          <Link href={option.url} color='foreground'>
            <AdminCard optionIcon={option.icon} optionLabel={option.name}/>
          </Link>
        </Tooltip>
      ))}
    </div>
  )
}