import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import AdminDashboard from './pages/AdminDashboard'
import AdminProducts from './pages/AdminProducts'
import AdminUsers from './pages/AdminUsers'
import AdminAnalytics from './pages/AdminAnalytics'
import AdminSettings from './pages/AdminSettings'
import AdminLogout from './pages/AdminLogout'
import ProtectedRoute from './components/ProtectedRoute'

function App() {

  return (

    <div className='flex flex-col min-h-screen'>

      {/* TOP NAVBAR */}

      <Navbar />

      {/* PAGE CONTENT */}

      <div className='flex-grow'>

        <Routes>

          {/* PUBLIC ROUTES */}

          <Route
            path='/'
            element={<Home />}
          />

          <Route
            path='/products'
            element={<Products />}
          />

          <Route
            path='/about'
            element={<About />}
          />

          <Route
            path='/contact'
            element={<Contact />}
          />

          <Route
            path='/login'
            element={<Login />}
          />

          <Route
            path='/signup'
            element={<Signup />}
          />

          <Route
            path='/cart'
            element={<Cart />}
          />

          <Route
            path='/checkout'
            element={<Checkout />}
          />

          {/* ADMIN ROUTES */}

          <Route
            path='/admin'
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path='/admin/products'
            element={
              <ProtectedRoute>
                <AdminProducts />
              </ProtectedRoute>
            }
          />

          <Route
            path='/admin/users'
            element={
              <ProtectedRoute>
                <AdminUsers />
              </ProtectedRoute>
            }
          />

          <Route
            path='/admin/analytics'
            element={
              <ProtectedRoute>
                <AdminAnalytics />
              </ProtectedRoute>
            }
          />

          <Route
            path='/admin/settings'
            element={
              <ProtectedRoute>
                <AdminSettings />
              </ProtectedRoute>
            }
          />

          <Route
            path='/admin/logout'
            element={
              <ProtectedRoute>
                <AdminLogout />
              </ProtectedRoute>
            }
          />

        </Routes>

      </div>

      {/* FOOTER */}

      <Footer />

    </div>

  )
}

export default App