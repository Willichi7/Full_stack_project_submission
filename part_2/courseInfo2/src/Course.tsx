import React from 'react'

export const Course = ({course}) => {

  const Header = ({course}) => {
    return (
      <h2>{course.name}</h2>
    )
  }

  const Part = ({part}) => {
    return (
      <p>
        {part.name} {part.exercises}
      </p>
    )
  }

  const Content = ({course}) => {
    return (
      <div>
        {course.parts.map(part => <Part key ={part.id} part={part} />)}
      </div>
    )
  }

  const Total = () => {

    const total = course.parts.reduce((s, p) => s + p.exercises, 0)
    return (
      <p><strong>total of {total} exercises </strong></p>
    )
  }
  return (
    <div>
      <Header course = {course}/>
      <Content course={course} />
      <Total />

    </div>
  )

}

export default Course