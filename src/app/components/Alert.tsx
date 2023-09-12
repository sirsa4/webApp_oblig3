"use client"
import { useState } from 'react'
import Input from './Input'
import Button from './Button'

const Alert = () => {
     //Task 10 - controll input, send state variable as prop down to child input-component
     // Task 11 - Combine the button and input 
     //Task 12 - Input and Button components and state are moved to common parent component, Alert component
  const [inputValue, setInputValue]:any = useState("");
  return (
    <>
    <Input inputValue={inputValue} setInputValue={setInputValue} />
    <Button setInputValue={setInputValue} inputValue={inputValue}  />
    {/* Task 13 -  Callback (lift state) (sending a functions as a prop) */}
    <p>{inputValue? inputValue : "Nothing to see"}</p>
    </>
  )
}

export default Alert