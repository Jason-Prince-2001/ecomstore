import { useState, useEffect } from 'react'

import Sidebar from '../components/Sidebar'

function AdminSettings() {

  const [darkMode, setDarkMode] = useState(false)

  const [storeName, setStoreName] = useState(
    localStorage.getItem('storeName') || 'My Ecommerce Store'
  )

  const [email, setEmail] = useState(
    localStorage.getItem('adminEmail') || 'admin@gmail.com'
  )

  const [phone, setPhone] = useState(
    localStorage.getItem('adminPhone') || '+91 9876543210'
  )

  const [currency, setCurrency] = useState(
    localStorage.getItem('currency') || 'INR'
  )

  const [message, setMessage] = useState('')

  // LOAD DARK MODE

  useEffect(() => {

    const savedDarkMode =
      localStorage.getItem('darkMode')

    if (savedDarkMode === 'true') {

      setDarkMode(true)

    }

  }, [])

  // SAVE SETTINGS

  const handleSave = () => {

    localStorage.setItem(
      'storeName',
      storeName
    )

    localStorage.setItem(
      'adminEmail',
      email
    )

    localStorage.setItem(
      'adminPhone',
      phone
    )

    localStorage.setItem(
      'currency',
      currency
    )

    localStorage.setItem(
      'darkMode',
      darkMode
    )

    setMessage(
      'Settings Saved Successfully ✅'
    )

    setTimeout(() => {

      setMessage('')

    }, 3000)
  }

  return (

    <div className={`

      flex min-h-screen duration-300

      ${darkMode
        ? 'bg-black text-white'
        : 'bg-gray-100 text-black'}

    `}>

      <Sidebar />

      <div className='ml-[250px] w-full p-10'>

        <h1 className='text-5xl font-bold mb-10'>
          Admin Settings
        </h1>

        <div className={`

          rounded-2xl shadow-lg p-10 max-w-4xl duration-300

          ${darkMode
            ? 'bg-gray-900'
            : 'bg-white'}

        `}>

          {/* STORE NAME */}

          <div className='mb-6'>

            <label className='block text-lg font-semibold mb-2'>

              Store Name

            </label>

            <input
              type='text'
              value={storeName}
              onChange={(e) =>
                setStoreName(e.target.value)
              }
              className={`

                w-full border p-4 rounded-xl outline-none

                ${darkMode
                  ? 'bg-gray-800 text-white border-gray-700'
                  : 'bg-white text-black'}

              `}
            />

          </div>

          {/* EMAIL */}

          <div className='mb-6'>

            <label className='block text-lg font-semibold mb-2'>

              Admin Email

            </label>

            <input
              type='email'
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              className={`

                w-full border p-4 rounded-xl outline-none

                ${darkMode
                  ? 'bg-gray-800 text-white border-gray-700'
                  : 'bg-white text-black'}

              `}
            />

          </div>

          {/* PHONE */}

          <div className='mb-6'>

            <label className='block text-lg font-semibold mb-2'>

              Phone Number

            </label>

            <input
              type='text'
              value={phone}
              onChange={(e) =>
                setPhone(e.target.value)
              }
              className={`

                w-full border p-4 rounded-xl outline-none

                ${darkMode
                  ? 'bg-gray-800 text-white border-gray-700'
                  : 'bg-white text-black'}

              `}
            />

          </div>

          {/* CURRENCY */}

          <div className='mb-6'>

            <label className='block text-lg font-semibold mb-2'>

              Currency

            </label>

            <select
              value={currency}
              onChange={(e) =>
                setCurrency(e.target.value)
              }
              className={`

                w-full border p-4 rounded-xl outline-none

                ${darkMode
                  ? 'bg-gray-800 text-white border-gray-700'
                  : 'bg-white text-black'}

              `}
            >

              <option value='INR'>
                INR ₹
              </option>

              <option value='USD'>
                USD $
              </option>

              <option value='EUR'>
                EUR €
              </option>

            </select>

          </div>

          {/* DARK MODE */}

          <div className='flex items-center justify-between mb-8'>

            <div>

              <h2 className='text-lg font-semibold'>
                Dark Mode
              </h2>

              <p className='text-sm text-gray-500'>
                Enable dark theme
              </p>

            </div>

            <button
              onClick={() =>
                setDarkMode(!darkMode)
              }
              className={`

                w-20 h-10 rounded-full relative duration-300

                ${darkMode
                  ? 'bg-green-500'
                  : 'bg-gray-400'}

              `}
            >

              <div className={`

                w-8 h-8 bg-white rounded-full absolute top-1 duration-300

                ${darkMode
                  ? 'left-11'
                  : 'left-1'}

              `} />

            </button>

          </div>

          {/* SAVE BUTTON */}

          <button
            onClick={handleSave}
            className='bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition'
          >

            Save Settings

          </button>

          {/* SUCCESS MESSAGE */}

          {message && (

            <p className='text-green-500 mt-5 font-semibold'>

              {message}

            </p>

          )}

        </div>

      </div>

    </div>
  )
}

export default AdminSettings