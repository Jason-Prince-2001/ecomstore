import Sidebar from '../components/Sidebar'
import { useNavigate } from 'react-router-dom'

function AdminLogout() {

  const navigate = useNavigate()

  const handleLogout = () => {

    localStorage.removeItem('token')

    navigate('/login')
  }

  return (

    <div className='flex bg-gray-100 min-h-screen'>

      <Sidebar />

      <div className='ml-[250px] w-full flex justify-center items-center'>

        <div className='bg-white p-10 rounded-2xl shadow-lg text-center'>

          <h1 className='text-4xl font-bold mb-6'>
            Are you sure want to logout?
          </h1>

          <button
            onClick={handleLogout}
            className='bg-red-500 text-white px-10 py-3 rounded-xl text-xl hover:bg-red-600 duration-300'
          >
            Logout
          </button>

        </div>

      </div>

    </div>

  )
}

export default AdminLogout