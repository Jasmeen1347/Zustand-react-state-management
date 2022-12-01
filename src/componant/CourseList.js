import React from 'react'
import useCourseStore from '../app/courseStore'

const CourseList = () => {

    const { courses, removeCourse, toggleCourseStatus } = useCourseStore(
        (state) => ({ 
            courses: state.courses,
            removeCourse: state.removeCourse,
            toggleCourseStatus: state.toggleCourse
        }))
  return (
      <div>
          <ul>
              {courses.map((course, i) => {
                  return (
                      <React.Fragment key={i}>
                          <li
                              className='course-item'
                              style={{backgroundColor: course.completed ? "#00FF00" : "white"}}
                          >
                              <span className="course-item-col-1">
                                  <input
                                      type="checkbox"
                                      checked={course.completed}
                                      onChange={(e) => toggleCourseStatus(course.id)}
                                  />
                              </span>
                              <span style={{color: "black"}}>{course.name}</span>
                              <button className='delete-btn' onClick={() => removeCourse(course.id)}>
                                Delete
                              </button>
                          </li>
                      </React.Fragment>
                  )
              })}
          </ul>
    </div>
  )
}

export default CourseList