"use client"

type inputValueProp = {
    setInputValue:any,
    inputValue:any
}

const Button = ({setInputValue,inputValue}:inputValueProp) => {
  return (
    <>
    <button type="button" onClick={()=>console.log(inputValue)
    }>Click</button>
    </>
  )
}

export default Button