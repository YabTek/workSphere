import React, {useState} from "react";
import {useSelector, useDispatch} from 'react-redux'
import { forgetPassword, selectAuth } from "../redux/features/auth/authSlice";

const ForgetPasswordPage = () => {
  const [email, setEmail] = useState("")
  const auth = useSelector(selectAuth)
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
      e.preventDefault()
      dispatch(forgetPassword({email}))
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
    <div className="max-w-md w-full p-8 bg-[#F6F7F7] shadow-md rounded-lg ">
      <h2 className="text-2xl font-semibold text-center mb-4">Forget Password</h2>
      <p className="text-gray-600 text-center mb-8">Enter your email to reset your password.</p>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:border-blue-400"
          />
        </div>
          <button
            type="submit"
            className="w-full bg-[#46A9A9] text-lg text-white p-3 rounded-md hover:bg-blue-400"
          >
            {auth.forgetPasswordStatus === "pending" ? "Pending" : "Reset Password"}
            
          </button>
        {auth.forgetPasswordStatus === "success" ? 
          <p class = "text-[#55FF05] italic">Password reset link has been send to your email</p> : null
            }
        {auth.forgetPasswordStatus === "rejected" ? 
          <p class = "text-[#F70D0D] italic">{auth.forgetPasswordError.message}</p> : null
            }
      </form>
    </div>
  </div>
);
};

export default ForgetPasswordPage;




