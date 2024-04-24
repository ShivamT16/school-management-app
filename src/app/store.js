import { configureStore } from "@reduxjs/toolkit";
import { studentsSlice } from "../component/student/studentsSlice";
import { schoolSlice } from "../component/school/schoolSlice";
import { teachersSlice } from "../component/teacher/teachersSlice";

export default configureStore({
    reducer: {
        students: studentsSlice.reducer,
        school: schoolSlice.reducer,
        teacher: teachersSlice.reducer
    }
})