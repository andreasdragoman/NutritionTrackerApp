import { useMemo } from "react";
import type { Nutrition } from "../types/Nutrition";

export const useTotalCaloriesCount = (nutritions: Nutrition[]) => {
  const count = useMemo(() => {
    return nutritions.reduce((sum, item) => sum + item.calories, 0);
  }, [nutritions]);

  return count;
};