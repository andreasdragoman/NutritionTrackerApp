import axios from "axios";
import type { Nutrition } from "../types/Nutrition";

export const getNutritions = () => {
    return axios.get<Nutrition[]>("http://localhost:3001/nutrition");
}

export const createNutrition = (nutrition: Nutrition) => {
    return axios.post("http://localhost:3001/nutrition",nutrition);
}

export const deleteNutrition = (nutritionId: number) => {
    return axios.delete(`http://localhost:3001/nutrition/${nutritionId}`);
}