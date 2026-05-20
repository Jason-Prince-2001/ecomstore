
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

function ProtectedRoute({ children }) {

  const auth = useSelector(
    (state) => state.auth
  )

  
  if (!auth.isAuthenticated) {
    return <Navigate to='/login' replace />
  }

  
  return children
}

export default ProtectedRoute