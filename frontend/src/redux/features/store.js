import { configureStore} from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice"
import jobReducer from "./job/jobSlice"

const store = configureStore({
    reducer: {
        auth: authReducer,
        job: jobReducer
    }
})

export default store