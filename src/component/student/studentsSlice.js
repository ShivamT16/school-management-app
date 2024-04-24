import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchStudents = createAsyncThunk(
    'students/fetchStudents', 
    async () => {
        const response = await axios.get('https://44c96c33-fea4-4caa-8715-06e6bec7e90e-00-1pnnngfdaqtyh.janeway.replit.dev/students',)
        return response.data
    }
)

export const addStudentAsync = createAsyncThunk(
    'students/addStudentsAsync',
    async (newStudent) => {
        const response = await axios.post('https://44c96c33-fea4-4caa-8715-06e6bec7e90e-00-1pnnngfdaqtyh.janeway.replit.dev/students',
    newStudent,
    )
    return response.data
  },
)

export const updateStudentAsync = createAsyncThunk(
    'students/updateStudentAsync',
    async ({ id, updatedStudent }) => {
      console.log(id, updatedStudent)
      const response = await axios.put(`https://44c96c33-fea4-4caa-8715-06e6bec7e90e-00-1pnnngfdaqtyh.janeway.replit.dev/students/${id}`,
        updatedStudent,
      )
      return response.data
    },
  )

  export const deleteStudentAsync = createAsyncThunk(
    'students/deleteStudentAsync',
    async (id) => {
      const response = await axios.delete(`https://44c96c33-fea4-4caa-8715-06e6bec7e90e-00-1pnnngfdaqtyh.janeway.replit.dev/students/${id}`,
      )
      return response.data
    },
  )

const initialState = {
    students: [],
    status: "idle",
    error: null,
    filterBy: "Grade",
    filter: "All",
    sortBy: "name"
}

export const studentsSlice = createSlice({
    name: 'students',
    initialState,
    reducers: {
        setFilterBy: (state, action) => {
            state.filterBy = action.payload
        },
        setFilter: (state, action) => {
            state.filter = action.payload
        },
        setSortBy: (state, action) => {
            state.sortBy = action.payload
        }
    },
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
            console.log(action.error.message)
            state.error = action.error.message
        },
        [addStudentAsync.pending]: (state) => {
            state.status = 'loading'
        },
        [addStudentAsync.fulfilled]: (state, action) => {
            state.status = 'success'
            state.students.push(action.payload)
        },
        [addStudentAsync.rejected]: (state, action) => {
            state.status = 'error'
            console.log(action.error.message)
            state.error = action.error.message
        },
        [updateStudentAsync.pending]: (state) => {
            state.status = 'loading'
        },
        [updateStudentAsync.fulfilled]: (state, action) => {
            state.status = 'success'
            const updatedStudent = action.payload
            const index = state.students.findIndex((s) => s.id === updatedStudent.id)
            if (index !== -1) {
              state.students[index] = updatedStudent
            }
        },
        [updateStudentAsync.rejected]: (state, action) => {
            state.status = 'error'
            state.error = action.error.message
        },
        [deleteStudentAsync.pending]: (state) => {
            state.status = 'loading'
        },
        [deleteStudentAsync.fulfilled]: (state, action) => {
            state.status = 'success'
            state.students = state.students.filter(
              (student) => student.id !== action.payload.id,
            )
        },
        [deleteStudentAsync.rejected]: (state, action) => {
            state.status = 'error'
            state.error = action.error.message
        },
    }
})

export const {setFilterBy, setFilter, setSortBy} = studentsSlice.actions;