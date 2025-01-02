import './App.css'
// define Header component
export const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

// define Part component
const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercise}
    </p>
  )
}

// define Content component
export const Content = (props) => {
  return (
    <>
      {/* Render each part with its exercises */}
      <Part part={props.parts[0].name} exercise={props.parts[0].exercises} />
      <Part part={props.parts[1].name} exercise={props.parts[1].exercises} />
      <Part part={props.parts[2].name} exercise={props.parts[2].exercises} />
    </>
  )
}

// define Total component
const Total = (props) => {
  return (
    <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises } </p>
  )
}

// define App component
function App() {
  // course object containing course name and parts
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  
  // return the components
  return (
    <>
      <div>
        {/* Render Header component with course name */}
        <Header course={course.name} />
        {/* Render Content component with course parts */}
        <Content parts={course.parts} />
        {/* Render Total component with total number of exercises */}
        <Total parts={course.parts} />
      </div>
    </>
  )
}

// export App component
export default App
