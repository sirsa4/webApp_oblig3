import MyComponent from "./components/MyComponent";
import Wrapper from "./components/Wrapper";




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
    </main>
  )
}
