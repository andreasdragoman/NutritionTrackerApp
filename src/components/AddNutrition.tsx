import React from 'react'

import { useState } from "react";
import type { Nutrition } from '../types/Nutrition';
import '../styles/addNutrition.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
 
// 2. Define Props type
interface Props {
  addNutritionDataEvent: (pat: Nutrition) => void;
}

export default function AddNutrition({ addNutritionDataEvent }: Props) {
  // 3. Typed state
  const [nutrition, setNutrition] = useState<Nutrition>({
    foodName: "",
    calories: 0,
    protein: 0
  });

  const [errmessage, setErrmessage] = useState<string>("");

  // 4. Typed event
  const handleData = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;

    setNutrition({
      ...nutrition,
      [name]: name === "calories" || name === "protein" ? Number(value) : value,
    });
  };

  const addNutritionEvt = () => {
    let errors = "";

    if (nutrition.foodName.trim().length === 0)
      errors += "Food name cannot be empty. ";

    if (errors.length !== 0) {
      setErrmessage(errors);
    } 
    else {
      setErrmessage("");
      addNutritionDataEvent(nutrition);
      setNutrition( {
        foodName: "",
        calories: 0,
        protein: 0
      });
    }
  };

  return (
    <div className='add-nutrition'>
      <div className="clsdata">
        <h2>Add nutrition</h2>
          <TextField
            type="text"
            name="foodName"
            value={nutrition.foodName}
            onChange={handleData}
            variant="outlined"
            label="Food name"
          />

          <TextField
            type="number"
            name="calories"
            value={nutrition.calories}
            onChange={handleData}
            variant="outlined"
            label="Calories"
          />

          <TextField
            type="number"
            name="protein"
            value={nutrition.protein}
            onChange={handleData}
            variant="outlined"
            label="Proteins"
          />

        <Button className='btn-add-nutrition' variant="contained" onClick={addNutritionEvt}>Add Nutrition</Button>
      </div>

      {errmessage && <p>{errmessage}</p>}
    </div>
  );
}