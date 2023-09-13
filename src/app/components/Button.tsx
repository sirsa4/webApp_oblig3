"use client"

import { Dispatch, SetStateAction } from "react"

type inputValueProp = {
  setInputValue: any
  inputValue: any
  setIsClicked: Dispatch<SetStateAction<boolean>>
  isClicked: boolean
}

const Button = ({
  setInputValue,
  inputValue,
  setIsClicked,
  isClicked,
}: inputValueProp) => {
  return (
    <>
      <button type="button" onClick={() => setIsClicked((prev) => !isClicked)}>
        Click
      </button>
    </>
  )
}

export default Button
