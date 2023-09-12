import MyComponent from "@/components/MyComponent";


export default function Home() {
  return (
    <main className="">
     <h1>WebApp Oblig 3 - Yahye Abdi Ahmed</h1>
     {/* Task 1 - create component */}
     <p>Task 1 - create component:</p>
     <MyComponent title="" />
     <p>Task 2 - Basic prop</p>
     <MyComponent title="It works" />
    </main>
  )
}
