import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
    name: "",
    jobs: [],
    freelancerDetail: "",
    getFreelancerByIdStatus: "",
}

export const getFreelancerById = createAsyncThunk("freelancer/getFreelancerById",
async(id, {rejectWithValue}) =>{
    try{
        const response = await axios.get(`/jobs/getFreelancerById/${id}`)
        return response.data.jobs
    }
    catch(err){
        return rejectWithValue(err.response.data)

    }
})

export const getFreelancerDetail = createAsyncThunk("freelancer/getFreelancerDetail",
async({id},{rejectWithValue}) => {
    try{
        const response = await axios.get(`/freelancers/${id}`)
        return response.data
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
        builder.addCase(getFreelancerDetail.fulfilled, (state,action) =>{
            state.freelancerDetail = action.payload
            const {name} = action.payload
            state.name = name
        })

    }

})

export const selectFreelancer = state => state.freelancer
export default freelancerSlice.reducer;