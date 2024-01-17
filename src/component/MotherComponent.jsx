import { Outlet } from "react-router-dom";
import { setFoodData } from "../manager/Slices/FoodDataSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const MotherComponent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAllMeals = async () => {
      const meals = [];
      for (let i = 97; i < 123; i++) {
        try {
          const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/search.php?f=${String.fromCharCode(
              i
            )}`
          );

          const data = await response.json();
          meals.push(data.meals);
        } catch (error) {
          console.log("Error:", error);
        }
      }

      const filterAll = meals
        .filter((data) => data !== null)
        .flatMap((data) => data.map((item) => item));

      dispatch(setFoodData(filterAll));

      // console.log("Apessss", filterAll);
    };

    fetchAllMeals();
  }, [dispatch]);
  return (
    <div>
      <Outlet />{" "}
    </div>
  );
};

export default MotherComponent;
