import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../redux/slices/authSlice'
import {
  FaShoppingCart,
  FaUserCircle,
  FaTachometerAlt,
  FaSignOutAlt,
  FaBars,
  FaTimes
} from 'react-icons/fa'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const cartItems = useSelector((state) => state.cart.cartItems)
  const auth = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <>
      {/* NAVBAR */}
      <nav className='fixed top-0 left-0 w-full bg-black text-white z-50 shadow-lg'>

        {/* Main Navbar */}
        <div className='max-w-7xl mx-auto flex justify-between items-center px-6 h-20'>

          {/* Logo */}
          <h1 className='text-2xl font-bold tracking-wide'>
            SHELBY'S E-COM
          </h1>

          {/* Hamburger Icon */}
          <div
            className='md:hidden text-2xl cursor-pointer'
            onClick={toggleMenu}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>

          {/* Desktop Menu */}
          <div className='hidden md:flex items-center gap-8'>

            <Link
              className='hover:text-cyan-400 duration-300'
              to='/'
            >
              Home
            </Link>

            <Link
              className='hover:text-cyan-400 duration-300'
              to='/products'
            >
              Products
            </Link>

            <Link
              className='hover:text-cyan-400 duration-300'
              to='/about'
            >
              About
            </Link>

            <Link
              className='hover:text-cyan-400 duration-300'
              to='/contact'
            >
              Contact
            </Link>

            {/* Cart */}
            <Link
              to='/cart'
              className='flex items-center gap-1 hover:text-cyan-400 duration-300'
            >
              <FaShoppingCart />
              <span>({cartItems.length})</span>
            </Link>

            {/* Auth */}
            {!auth.isAuthenticated ? (
              <Link
                to='/login'
                className='hover:text-cyan-400 duration-300'
              >
                Login
              </Link>
            ) : (
              <>
                <Link
                  to='/admin'
                  className='flex items-center gap-1 hover:text-cyan-400 duration-300'
                >
                  <FaTachometerAlt />
                  Dashboard
                </Link>

                <div className='flex items-center gap-2'>
                  <FaUserCircle size={20} />
                  <span>Profile</span>
                </div>

                <button
                  onClick={() => dispatch(logout())}
                  className='flex items-center gap-1 text-red-400 hover:text-red-500 duration-300'
                >
                  <FaSignOutAlt />
                  Logout
                </button>
              </>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className='md:hidden flex flex-col gap-5 px-6 pb-6 bg-black'>

            <Link onClick={toggleMenu} to='/'>
              Home
            </Link>

            <Link onClick={toggleMenu} to='/products'>
              Products
            </Link>

            <Link onClick={toggleMenu} to='/about'>
              About
            </Link>

            <Link onClick={toggleMenu} to='/contact'>
              Contact
            </Link>

            {/* Cart */}
            <Link
              onClick={toggleMenu}
              to='/cart'
              className='flex items-center gap-1'
            >
              <FaShoppingCart />
              <span>({cartItems.length})</span>
            </Link>

            {!auth.isAuthenticated ? (
              <Link onClick={toggleMenu} to='/login'>
                Login
              </Link>
            ) : (
              <>
                <Link
                  onClick={toggleMenu}
                  to='/admin'
                  className='flex items-center gap-1'
                >
                  <FaTachometerAlt />
                  Dashboard
                </Link>

                <div className='flex items-center gap-2'>
                  <FaUserCircle size={20} />
                  <span>Profile</span>
                </div>

                <button
                  onClick={() => {
                    dispatch(logout())
                    setMenuOpen(false)
                  }}
                  className='flex items-center gap-1 text-red-400'
                >
                  <FaSignOutAlt />
                  Logout
                </button>
              </>
            )}
          </div>
        )}
      </nav>

      {/* Space below navbar */}
      <div className='h-20'></div>
    </>
  )
}

export default Navbar