import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    jobs: [],
    addJobStatus: "",
    addJobError: "",
    updateJobStatus: "",
    deleteJobStatus: "",
    getJobStatus: "",
   
}


export const addJob = createAsyncThunk("job/addJob", 
    async(jobData,{rejectWithValue}) => {
        try{
            const response = await axios.post("/jobs", jobData)
            return response.data
        }
        catch(err){
            return rejectWithValue(err.response.data)
        }
})

export const updateJob = createAsyncThunk("job/updateJob",
    async ({ jobId, jobData }, { rejectWithValue }) => {
        try {
            const response = await axios.put(`/jobs/${jobId}`, jobData);
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    });

export const deleteJob = createAsyncThunk("job/deleteJob",
    async (jobId, { rejectWithValue }) => {
        try {
            const response = await axios.delete(`/jobs/${jobId}`);
            return jobId;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    });

export const getAllJobs = createAsyncThunk("job/getAllJobs",
    async(id = null, {rejectWithValue}) => {
        try{
            const response = await axios.get("/jobs")
            console.log(response.data)
            return response.data
        }
        catch(err){
            return rejectWithValue(err.response.data)
        }
    })

const jobSlice = createSlice({
    name: "job",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(addJob.pending, (state,action) => {
            state.addJobStatus = "pending"
        })
        builder.addCase(addJob.fulfilled, (state,action) => {
            state.jobs.push(action.payload)
            state.addJobStatus = "success"
        })
        builder.addCase(addJob.rejected, (state,action) => {
            state.addJobStatus = "rejected"
            state.addJobError = action.payload
        })
        builder.addCase(getAllJobs.fulfilled, (state,action) => {
            state.jobs = action.payload
            state.getJobStatus = "success"
        })
        builder.addCase(updateJob.fulfilled, (state, action) => {
            const index = state.jobs.findIndex(job => job._id === action.payload._id);
        
            state.jobs[index] = action.payload
            state.updateJobStatus = "success"
        });
        builder.addCase(deleteJob.fulfilled, (state,action) =>{
            state.jobs = state.jobs.filter(job => job._id !== action.payload)
            state.deleteJobStatus = "success"
        })
        
    }

})

export const selectJob = (state) => state.job
export default jobSlice.reducer
