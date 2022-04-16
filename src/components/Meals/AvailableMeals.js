import { useEffect, useState } from 'react';
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import { BarWave } from 'react-cssfx-loading/lib';

const AvailableMeals = () => {
    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchMeals = async () => {

            const response = await fetch("https://react-http-d404d-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json");
            // console.log(response);{many data in this object}
            const responseData = await response.json();
            // console.log(responseData);{convert to json}
            const loadedMeals = [];
            for (const key in responseData) {
                loadedMeals.push({
                    id: key,
                    name: responseData[key].name,
                    description: responseData[key].description,
                    price: responseData[key].price,
                });
            }
            setMeals(loadedMeals);
            setIsLoading(false);
        };
        fetchMeals();
    }, []);
    if (isLoading) {
        return <div className={classes.center}>
            <section className={classes.MealsLoading}>
                <BarWave color="#8a2b06" />
            </section>
        </div>
    }
    const mealsList = meals.map((meal) => <MealItem id={meal.id} key={meal.id} name={meal.name} description={meal.description} price={meal.price} />);
    return (
        <section className={classes.meals}>
            <Card>

                <ul>
                    {mealsList}
                </ul>
            </Card>
        </section>
    );

};
export default AvailableMeals;