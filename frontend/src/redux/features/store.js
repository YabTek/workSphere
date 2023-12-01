import { configureStore} from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice"
import jobReducer from "./job/jobSlice"
import freelancerReducer from "./freelancer/freelancerSlice"

const store = configureStore({
    reducer: {
        auth: authReducer,
        job: jobReducer,
        freelancer: freelancerReducer
    }
})

export default store