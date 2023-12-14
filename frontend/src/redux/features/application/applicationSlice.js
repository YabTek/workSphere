import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
    applicationDetail: "",
    addApplicationStatus: "",
}

export const addApplication = createAsyncThunk("application/addApplication",
async(input,{rejectWithValue}) =>{
    try{
        const response = await axios.post("/applications", input)
        return response.data
    }
    catch(err){
        return rejectWithValue(err.response.data)

    }
})
export const getApplicationById = createAsyncThunk("application/getApplicationById",
async(id,{rejectWithValue}) =>{
    try{
        const response = await axios.get(`/applications/${id}`)
        return response.data
    }
    catch(err){
        return rejectWithValue(err.response.data)

    }
})
export const getApplicationByJobId = createAsyncThunk("application/getApplicationByJobId",
async(id,{rejectWithValue}) =>{
    try{
        const response = await axios.get(`/applications/job/${id}`)
        console.log(response.data)
        return response.data
    }
    catch(err){
        return rejectWithValue(err.response.data)

    }
})

const applicationSlice = createSlice({
    name: "application",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(addApplication.fulfilled, (state,action) =>{
            state.addApplicationStatus = "success"

        })
        builder.addCase(getApplicationById.fulfilled, (state,action) =>{
            state.applicationDetail = action.payload

        })
    }  
})

export const selectApplication = state => state.application
export default applicationSlice.reducer;