import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  setTopStudent,
  updateSchoolStats,
} from './schoolSlice'

const SchoolView = () => {
  const schoolStats = useSelector((state) => state.school)
  const students = useSelector((state) => state.students.students)
  const dispatch = useDispatch()

  useEffect(() => {
    const totalStudents = students.length
    const totalAttendance = students.reduce(
      (sum, student) => sum + student.attendance,
      0,
    )
    const averageAttendance = totalAttendance / totalStudents
    const totalMarks = students.reduce(
      (sum, student) => sum + parseFloat(student.marks),
      0,
    )
    const averageMarks = totalMarks / totalStudents

    const topStudent = students.reduce((prev, current) => prev.marks > current.marks ? prev : current , "");
    
    dispatch(
      updateSchoolStats({
        totalStudents,
        averageAttendance,
        averageMarks,
        topStudent,
      }),
    )

    dispatch(setTopStudent(topStudent))
  }, [students, dispatch])

  return ( 
    <div className="view-main">
      <h1>School View</h1>

      <p className="view-List">Total Students: {schoolStats.totalStudents}</p>
      <p className="view-List">Average Attendance: {schoolStats.averageAttendance.toFixed(2)}</p>
      <p className="view-List">Average Marks: {schoolStats.averageMarks.toFixed(2)}</p>
      <p className="view-List">
        Top Student: {schoolStats.topStudent ? schoolStats.topStudent.name : '-'}
      </p>

    </div>
  )
}

export default SchoolView