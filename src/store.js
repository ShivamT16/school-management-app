import { configureStore } from "@reduxjs/toolkit";
import { studentsSlice } from "./studentsSlice";
import { schoolSlice } from "./schoolSlice";
import { teachersSlice } from "./teachersSlice";

export default configureStore({
    reducer: {
        students: studentsSlice.reducer,
        school: schoolSlice.reducer,
        teacher: teachersSlice.reducer
    }
})