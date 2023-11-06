import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from "react-router-dom"
import { login, selectAuth } from "../redux/features/auth/authSlice";

const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const auth = useSelector(selectAuth)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if(auth._id){
      if(auth.role === 'freelancer'){
        navigate("/joblist")
      }
      else if(auth.role === 'client'){
        navigate("/client")
      }
    }
  }, [auth._id, auth.role, navigate])

  const handleSubmit = (e) => {
      e.preventDefault()
      dispatch(login({ email, password}))
  }

  return (
    <div class="rounded-lg h-[30rem] w-[32rem] bg-[#F6F7F7] mx-[22rem] my-[4rem]">
      <form onSubmit = {handleSubmit}>
        <div class="p-10">
          <input
            type="email"
            class="bg-[#DCE4E4] border-none text-gray-800 rounded-lg text-lg focus:ring-blue-500 w-full p-4 my-8"
            placeholder="Enter your email"
            required
            onChange = {e => setEmail(e.target.value)}
          />
          <input
            type="password"
            class="bg-[#DCE4E4] border-none text-gray-800  rounded-lg text-lg focus:ring-blue-500  w-full p-4"
            placeholder="Enter your password"
            required
            onChange = {e => setPassword(e.target.value)}
          />
          <button
            type="submit"
            class=" bg-[#B0E8E8] hover:bg-blue-300 rounded-lg w-full p-3.5 font-bold text-xl font-serif text-black-50 text-center my-8 mb-2"
          >
            {auth.loginStatus === "pending" ? "Pending": "Login"}
          </button>
          {auth.loginStatus === "rejected" ? 
          <p class = "text-[#F70D0D]">{auth.loginError.message}</p> : null}
        </div>
      </form>
      <div class="flex justify-around text-lg px-2">
        <a href="vxvd" class="text-blue-600 hover:text-blue-400">
          forget password?
        </a>
        <h1>
          Don't have an account?
          <a href="xvd" class="text-blue-600 hover:text-blue-400">
            signUp
          </a>
        </h1>
      </div>
    </div>
  );
};

export default LoginPage;