import React from 'react'
import { Link } from 'react-router-dom'

export const TeachersList = ({ teachers }) => {
  return (
    <div>
      <h2>Teacher List</h2>
      <ul>
        {teachers.map((teacher) => (
          <li key={teacher._id}>
            <Link to={`/teachers/${teacher._id}`}>
              {teacher.name} (Subject: {teacher.subject}, Contact: {teacher.contact})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}