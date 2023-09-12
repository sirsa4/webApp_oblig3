import React from 'react'
import { TitleProp } from './MyComponent'

const Title = ({title}:TitleProp) => {
  return (
    <h1>{title}</h1>
  )
}

export default Title