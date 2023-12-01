import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
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

const applicationSlice = createSlice({
    name: "application",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(addApplication.fulfilled, (state,action) =>{
            state.addApplicationStatus = "success"

        })

    }

})

export const selectapplication = state => state.application
export default applicationSlice.reducer;