import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Mirchi Ka salan',
      description: 'comes from coconut',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Hyderabadi Biryani',
      description: 'Veg and Non-Veg',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Haleem',
      description: 'dish is made with lentils',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Hyderabadi Khichdi',
      description: 'Spicy in taste',
      price: 18.99,
    },
  ];

const AvailableMeals=()=>{
    const mealsList=DUMMY_MEALS.map((meal) => <li>{meal.name}</li>)

    return <section className={classes.meals}>
        <ul>
            {mealsList}
        </ul>
    </section>


}

export default AvailableMeals;