import { useEffect } from "react";
import { useNutritions } from "../hooks/useNutritions";
import AddNutrition from "./AddNutrition";
import type { Nutrition } from "../types/Nutrition";
import NutritionList from "./NutritionList";
import { deleteNutrition, getNutritions, createNutrition } from "../services/api";
import { useTotalCaloriesCount } from "../hooks/useCaloriesCount";
import '../styles/home.css';

export default function Home() {

    const { nutritions, setAllNutritions, addNutrition, removeNutrition } = useNutritions();

    const caloriesCount = useTotalCaloriesCount(nutritions);

    useEffect( ()=>{
        getNutritions()
            .then((res)=>
                {
                    setAllNutritions(res.data)
                }
            )
            .catch(
                (err)=>
                {
                    console.log("error found " + err)
                }
            )
    },[]);

    const deleteHandler= (nutritionId: number) =>
    {
        deleteNutrition(nutritionId)
        .then((res)=>
        {
            removeNutrition(nutritionId);
        }
        )
        .catch(
            (err)=> { }
        )
    }

    const addNutritionHandler =(nutrition: Nutrition) =>
    {
        createNutrition(nutrition).then((res)=> {
            addNutrition(res.data);
        })
        .catch((err)=> 
            console.log(err)
        )
    }

    return (
        <div>
            <AddNutrition addNutritionDataEvent={addNutritionHandler} />
            <div className="total-calories-section">
                <h2 className="total-calories-title">Total Calories</h2>
                <p>{caloriesCount}</p>
            </div>
            <NutritionList nutritions={nutritions} deleteNutritionEvent={deleteHandler} />
        </div>
    )
}