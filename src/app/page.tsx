import { useState } from "react";
import Button from "./components/Button";
import Food from "./components/Food";
import MyComponent from "./components/MyComponent";
import Wrapper from "./components/Wrapper";
import Alert from "./components/Alert";


const food:string[] = ['Pizza', 'Hamburger', 'Coke'];


export default function Home() {
 
  return (
    <main className="">
     <h1>WebApp Oblig 3 - Yahye Abdi Ahmed</h1>
     {/* Task 1 - create component */}
     <MyComponent title="" />

     {/* Task 2 and task 4- Basic prop and wrapper component */}
     <Wrapper>
     <MyComponent title="It works" />
     </Wrapper>

     {/* Task 6 food list */}
     {/*
     <ul>{food.map(foodItem=>{
        return <li key={foodItem}>{foodItem}</li>;
    })}</ul> 
      */}

      {/* Task 7 - Food component */}
    <Food food={food} />
    {/* Task 8 - click event 
      Since components in app-route are rendered on server by default,
      it is easier to make the Button-component alone client component.
    */}
    {/* <Button /> */}

    {/* Task 9 - input onchange event
      from task 9 - both Input and Button components are moved into Alert component which is client one. This is to have interractivity which is not possible in server components.
      This also needs to be a client component
    */}
    <Alert />
    {/* Task 10 - 14 are inside Alert.jsx component */}
    </main>
  )
}
