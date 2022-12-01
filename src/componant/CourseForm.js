import React, { useState } from 'react'

import useCourseStore from '../app/courseStore'

const CourseForm = () => {

    const addCourse = useCourseStore((state) => state.addCourse)

    const [courseTitle, setCourseTitle] = useState("");

    const handleCourseSubmit = () => {
        if (!courseTitle) return alert("Plz add course title")
        
        addCourse({
            id: Math.ceil(Math.random() * 1000000),
            name: courseTitle
        })
        
        setCourseTitle("")
    }

  return (
      <div className="form-container">
          <input
              type="text"
              className='form-input'
              placeholder='Enter Course Title'
              value={courseTitle}
              onChange={(e) => setCourseTitle(e.target.value)}
          />

          <button className="form-submit-btn" onClick={() => handleCourseSubmit()}>Add Course</button>
    </div>
  )
}

export default CourseForm