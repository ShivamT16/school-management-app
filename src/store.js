import { configureStore } from "@reduxjs/toolkit";
import { studentsSlice } from "./studentsSLice";

export default configureStore({
    reducer: {
        students: studentsSlice.reducer,
        school: schoolSlice.reducer
    }
})