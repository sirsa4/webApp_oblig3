"use client"

import { useState } from "react"

import Button from "./Button"
import Input from "./Input"

const Alert = () => {
  //Task 10 - controll input, send state variable as prop down to child input-componentss
  // Task 11 - Combine the button and input
  //Task 12 - Input and Button components and state are moved to common parent component, Alert component
  const [inputValue, setInputValue] = useState<string>("")
  //Task 14 - conditional rendering  - render input value only when button is clicked
  const [isClicked, setIsClicked] = useState<boolean>(false)
  return (
    <>
      <Input inputValue={inputValue} setInputValue={setInputValue} />
      <Button
        setInputValue={setInputValue}
        inputValue={inputValue}
        setIsClicked={setIsClicked}
        isClicked={isClicked}
      />
      {/* Task 13 -  Callback (lift state) (sending a functions as a prop) */}
      {isClicked ? <p>{inputValue ? inputValue : "Nothing to see"}</p> : null}
    </>
  )
}

export default Alert
