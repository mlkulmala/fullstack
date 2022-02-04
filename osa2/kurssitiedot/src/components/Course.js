import React from 'react'

const Course = ({ course }) => {
  return (
		<div>
			<Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
		</div>
  )
}


const Header = ({ course }) => {
  return (
    <div>
      <h1>
        {course}
      </h1>
    </div>
  )  
}

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(part =>
				<Part name={part.name} exercises={part.exercises} key={part.id} />
			)}
    </div>
  )   
}

const Part = ({ name, exercises }) => {
  return (
    <div>
      <p>{name} {exercises}</p>
    </div>
  )
}

const Total = ({ parts }) => {
	const exercises = parts.map(part => part.exercises)
	let sum = exercises.reduce((a,b) => a + b)
  return (
    <div>
      <p>
        <b>total of {sum} exercises</b>
      </p>
    </div>
  )  
}

export default Course