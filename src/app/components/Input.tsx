"use client"

type inputValueProp = {
  inputValue: any
  setInputValue: any
}

const Input = ({ inputValue, setInputValue }: inputValueProp) => {
  return (
    <>
      //Task 10 - controll input, send state variable as prop down to child
      input-component
      <input
        type="text"
        name="tex"
        id="input1"
        className="block border-2 border-solid border-black"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
    </>
  )
}

export default Input
