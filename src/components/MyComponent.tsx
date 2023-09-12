import React from 'react'

type TitleProp = {
    title:string,
}

const MyComponent = ({title}:TitleProp) => {
  return (
    <>
    {/* Task 1 - create component */}
    <h1>My First Component</h1>
    {/* Task 2 - title prop */}
    <h1>{title}</h1>
    </>
    
  )
}

export default MyComponent