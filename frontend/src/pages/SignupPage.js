import React, {useState, useEffect} from "react";
import {useDispatch,useSelector} from "react-redux"
import {useNavigate, useParams} from "react-router-dom"
import { register, selectAuth } from "../redux/features/auth/authSlice";

const SignupPage = () => {
  const [name, setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const {role} = useParams()

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const auth = useSelector(selectAuth)
  console.log(auth)

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
      dispatch(register({
        name, email, password,role
      }))
  }
  

  return (
   
    <div class="rounded-lg h-[30rem] w-[32rem] bg-[#F6F7F7] mx-[22rem] my-[4rem]">
      <form onSubmit = {handleSubmit}>
        <div class="p-10">
          <input
            type="text"
            class="bg-[#DCE4E4] border-none text-gray-800 rounded-lg text-lg focus:ring-blue-500 w-full p-4 my-4"
            placeholder="Name"
            required
            onChange={e => setName(e.target.value)}
          />
          <input
            type="email"
            class="bg-[#DCE4E4] border-none text-gray-800  rounded-lg text-lg focus:ring-blue-500  w-full p-4 my-4"
            placeholder="Email"
            required
            onChange = {e => setEmail(e.target.value)}
          />
          <input
            type="password"
            class="bg-[#DCE4E4] border-none text-gray-800  rounded-lg text-lg focus:ring-blue-500  w-full p-4 my-4"
            placeholder="Password"
            required
            onChange = {e => setPassword(e.target.value)}
          />
           {auth.registerStatus === "rejected" ? (
          <p class = "text-[#F70D0D]">{auth.registerError.message}</p>
        ) : null}
          <button
            type="submit"
            class=" bg-[#B0E8E8] hover:bg-blue-300 rounded-lg w-full p-3.5 font-bold text-xl font-serif text-black-50 text-center my-8 mb-2"
          >
            {auth.registerStatus === "pending" ? "Pending" : "Signup"}

          </button>
         
        </div>
      </form>
    </div>
  );
};

export default SignupPage;
