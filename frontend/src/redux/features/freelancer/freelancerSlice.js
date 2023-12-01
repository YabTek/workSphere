import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
    jobs: [],
    getFreelancerByIdStatus: "",
}

export const getFreelancerById = createAsyncThunk("freelancer/getFreelancerById",
async(id,{rejectWithValue}) =>{
    try{
        const response = await axios.get(`/jobs/getFreelancerById/${id}`)
        return response.data.jobs
    }
    catch(err){
        return rejectWithValue(err.response.data)

    }
})

const freelancerSlice = createSlice({
    name: "freelancer",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getFreelancerById.fulfilled, (state,action) =>{
            state.jobs = action.payload
            state.getFreelancerByIdStatus = "success"

        })

    }

})

export const selectFreelancer = state => state.freelancer
export default freelancerSlice.reducer;