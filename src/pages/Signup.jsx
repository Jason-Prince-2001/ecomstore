import { useState } from "react";

import {
  useNavigate,
  Link
} from "react-router-dom";

import { useDispatch } from "react-redux";

import { addUser } from "../redux/slices/usersSlice";

function Signup() {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const handleSignup = () => {

    // VALIDATION

    if (!name || !email || !password) {

      setError("All fields are required");

      return;

    }

    if (password.length < 6) {

      setError(
        "Password must be at least 6 characters"
      )

      return;

    }

    // USER OBJECT

    const user = {

      id: Date.now(),

      name,

      email,

      password,

      role: 'Customer',

      status: 'Active'

    }


    dispatch(addUser(user))

    

    const existingUsers = JSON.parse(
      localStorage.getItem('users')
    ) || []

    existingUsers.push(user)

    localStorage.setItem(
      'users',
      JSON.stringify(existingUsers)
    )

    // CURRENT LOGIN USER

    localStorage.setItem(
      'user',
      JSON.stringify(user)
    )

    setError("")

    navigate('/login')
  }

  return (

    <div className='min-h-screen flex justify-center items-center bg-gray-100'>

      <div className='bg-white p-10 rounded-2xl shadow-lg w-[450px]'>

        <h1 className='text-4xl font-bold mb-6 text-center'>
          Signup
        </h1>

        {/* NAME */}

        <input
          type='text'
          placeholder='Enter Full Name'
          className='border p-4 rounded-xl w-full mb-4 outline-none'
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        {/* EMAIL */}

        <input
          type='email'
          placeholder='Enter Email'
          className='border p-4 rounded-xl w-full mb-4 outline-none'
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        {/* PASSWORD */}

        <input
          type='password'
          placeholder='Enter Password'
          className='border p-4 rounded-xl w-full mb-4 outline-none'
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        {/* ERROR */}

        {error && (

          <p className='text-red-500 text-sm mb-3 text-center'>

            {error}

          </p>

        )}

        {/* BUTTON */}

        <button
          onClick={handleSignup}
          className='bg-black text-white w-full py-4 rounded-xl hover:bg-gray-800 transition'
        >

          Create Account

        </button>

        {/* LOGIN */}

        <p className='text-center mt-5'>

          Already have account?

          <Link
            to='/login'
            className='text-blue-500 ml-2'
          >

            Login

          </Link>

        </p>

      </div>

    </div>

  )
}

export default Signup