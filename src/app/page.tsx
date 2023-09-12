import Food from "./components/Food";
import MyComponent from "./components/MyComponent";
import Wrapper from "./components/Wrapper";

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
    </main>
  )
}
