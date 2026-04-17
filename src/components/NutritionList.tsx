import type { Nutrition } from "../types/Nutrition";
import NutritionItem from "./NutritionItem";

interface Props {
  nutritions: Nutrition[];
  deleteNutritionEvent: (nutritionId: number) => void;
}

const NutritionList: React.FC<Props> = ({ nutritions, deleteNutritionEvent }) => {

    const deleteHandler = (nutritionId: number) => {
        deleteNutritionEvent(nutritionId);
    }

    return (
        <div>
            <section className="nutrition-list-class">
            {
                nutritions.map((n) => 
                    <NutritionItem key={n.id} nutrition={n} deleteEvent={deleteHandler} />
                )
            }
            </section>
        </div>
    )
}

export default NutritionList;