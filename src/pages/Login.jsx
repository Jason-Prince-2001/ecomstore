import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/slices/authSlice';
import { useNavigate, Link } from 'react-router-dom';

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // VALIDATION (admin credentials)
    const adminEmail = "admin@gmail.com";
    const adminPassword = "admin123";

    if (email === adminEmail && password === adminPassword) {

      dispatch(
        login({
          email,
          password,
        })
      );

      setError("");
      navigate('/admin');

    } else {
      setError("❌ Invalid credentials");
    }
  };

  return (
    <div className='min-h-screen flex justify-center items-center bg-gray-100'>

      <form
        onSubmit={handleLogin}
        className='bg-white p-10 rounded-2xl shadow-lg w-[450px]'
      >

        <h1 className='text-4xl font-bold mb-8 text-center'>
          Login
        </h1>

        {/* EMAIL */}
        <input
          type='email'
          placeholder='Enter Admin Email'
          className='border p-4 rounded-xl w-full mb-4 outline-none'
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* PASSWORD */}
        <input
          type='password'
          placeholder='Enter Password'
          className='border p-4 rounded-xl w-full mb-4 outline-none'
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* ERROR MESSAGE */}
        {error && (
          <p className="text-red-500 text-sm mb-4 text-center">
            {error}
          </p>
        )}

        {/* BUTTON */}
        <button className='bg-black text-white w-full py-4 rounded-xl hover:bg-gray-800 duration-300'>
          Login
        </button>

        {/* INFO */}
        <div className='mt-5 text-center text-gray-600 text-sm'>
          <p>Email : admin@gmail.com</p>
          <p>Password : admin123</p>
        </div>

        {/* SIGNUP LINK */}
        <p className='text-center mt-5'>
          Don't have account?
          <Link to='/signup' className='text-blue-500 ml-2'>
            Signup
          </Link>
        </p>

      </form>

    </div>
  );
}

export default Login;