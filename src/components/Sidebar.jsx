import { Link, useLocation } from 'react-router-dom'

function Sidebar() {

  const location = useLocation()

  const menuItems = [
    {
      name: 'Dashboard',
      path: '/admin'
    },
    {
      name: 'Products',
      path: '/admin/products'
    },
    {
      name: 'Users',
      path: '/admin/users'
    },
    {
      name: 'Analytics',
      path: '/admin/analytics'
    },
    {
      name: 'Settings',
      path: '/admin/settings'
    },
    {
      name: 'Logout',
      path: '/admin/logout'
    }
  ]

  return (

    <div className='w-[250px] h-screen bg-black text-white fixed p-6 shadow-2xl'>

      <h1 className='text-4xl font-bold mb-12 text-center border-b border-gray-700 pb-5'>
        Admin Panel
      </h1>

      <div className='flex flex-col gap-4'>

        {menuItems.map((item) => (

          <Link
            key={item.path}
            to={item.path}
            className={`
              px-5 py-4 rounded-xl text-lg font-semibold
              transition-all duration-300
              hover:bg-white hover:text-black
              ${location.pathname === item.path
                ? 'bg-white text-black'
                : 'bg-gray-900 text-white'}
            `}
          >

            {item.name}

          </Link>

        ))}

      </div>

    </div>

  )
}

export default Sidebar