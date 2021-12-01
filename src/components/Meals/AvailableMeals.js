import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Butter Naan",
    description: "Fine Tossed Naan with Butter",
    price: 50.99,
  },
  {
    id: "m2",
    name: "Palak Paneer",
    description: "Indian Speciality",
    price: 160.5,
  },
  {
    id: "m3",
    name: "Murg Barbeque",
    description: "American with a Indian twist, raw, meaty",
    price: 220,
  },
  {
    id: "m4",
    name: "Matar Paneer",
    description: "Healthy...and green...",
    price: 180.99,
  },
];

const AvailableMeals = () => {
  const mealList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    ></MealItem>
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};
export default AvailableMeals;
