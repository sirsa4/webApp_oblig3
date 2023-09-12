import React from 'react'
import Title from './Title'

export type TitleProp = {
    title:string,
}

const MyComponent = ({title}:TitleProp) => {
  return (
    <>
    {/* Task 1 - create component */}
    {/* <h1>My First Component</h1> */}
    {/* Task 2 - title prop */}
    {/* <h1>{title}</h1> */}
    {/* Task 3 */}
    {/* Task 3 - Title component */}
    <Title title={title} />
    </>
    
  )
}

export default MyComponent