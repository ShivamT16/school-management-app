import { configureStore } from "@reduxjs/toolkit";
import { studentsSlice } from "./studentsSlice";
import { schoolSlice } from "./schoolSlice";

export default configureStore({
    reducer: {
        students: studentsSlice.reducer,
        school: schoolSlice.reducer
    }
})