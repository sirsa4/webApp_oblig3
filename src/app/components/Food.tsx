import React from 'react'

type FoodProp = {
    food: string[]
}

const Food = ({food}:FoodProp) => {
  return (
    <ul>{food.map(foodItem=>{
        return <li key={foodItem}>{foodItem}</li>;
    })}</ul>
  )
}

export default Food