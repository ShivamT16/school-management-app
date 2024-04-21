import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchStudents = createAsyncThunk(
    'students/fetchStudents', 
    async () => {
        const response = await axios.get('https://44c96c33-fea4-4caa-8715-06e6bec7e90e-00-1pnnngfdaqtyh.janeway.replit.dev/',)
        console.log(response.data)
        return response.data
    }
)

const initialState = {
    students: [],
    status: 'idle',
    error: null
}

export const studentsSlice = createSlice({
    name: 'students',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchStudents.pending]: (state) => {
            state.status = 'loading'
        },
        [fetchStudents.fulfilled]: (state, action) => {
            state.status = 'success'
            state.students = action.payload
        },
        [fetchStudents.rejected]: (state, action) => {
            state.status = 'error'
            console.log(actionn.error.message)
            state.error = action.error.message
        }
    }
})