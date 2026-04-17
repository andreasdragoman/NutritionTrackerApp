import { useState } from "react";
import type { Nutrition } from "../types/Nutrition";

export const useNutritions = () => {
    const nutritionsList: Array<Nutrition> = [];
    const [nutritions, setNutritions] = useState<Nutrition[]>(nutritionsList);

    const setAllNutritions = (nutritions: Nutrition[]) => {
        setNutritions((prev) => nutritions);
    };

    const addNutrition = (nutrition: Nutrition) => {
        setNutritions((prev) => [...prev, nutrition]);
    };

    const removeNutrition = (id: number) => {
        setNutritions((prev) => prev.filter(n => n.id !== id));
    };
    
    return {nutritions, setAllNutritions, addNutrition, removeNutrition};
}