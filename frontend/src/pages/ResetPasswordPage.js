import React, { useState, useEffect } from "react";
import { useNavigate,useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword, selectAuth } from "../redux/features/auth/authSlice"; 

const ResetPasswordPage = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(""); 
  const {token} = useParams()
  const auth = useSelector(selectAuth)

  console.log(token)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() =>{
    if(auth.resetPasswordStatus === "success"){
        navigate("/login")
    }
  })

  const handleResetPassword = (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
    } else {
      dispatch(resetPassword({ resetToken: token, newPassword }))
    }
  };

  return (
    <div class="min-h-screen flex items-center justify-center">
    <div class="max-w-md w-full p-8 bg-[#F6F7F7] shadow-md rounded-lg ">
        <form class onSubmit={handleResetPassword}>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" htmlFor="newPassword">
              New Password
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="newPassword"
              type="password"
              placeholder="New Password"
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          {error && <p class="text-red-500 italic">{error}</p>}
          {auth.resetPasswordStatus === "success" ? 
          <p class = "text-[#55FF05]">Password has been successfully reset</p> : null
            }
        {auth.resetPasswordStatus === "rejected" ? 
          <p class = "text-[#F70D0D] italic">{auth.resetPasswordError.message}</p> : null
            }
          <div class="flex items-center justify-between">
            <button
              class="bg-[#46A9A9] hover:bg-blue-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              {auth.resetPasswordStatus === "pending"? "pending" : "Change Password" }
            </button>
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
