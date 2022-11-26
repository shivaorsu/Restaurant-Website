 
 import Card from '../UI/Card';

import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Mirchi Ka salan',
      description: 'comes from coconut',
      price: 300,
    },
    {
      id: 'm2',
      name: 'Hyderabadi Biryani',
      description: 'Veg and Non-Veg',
      price: 120,
    },
    {
      id: 'm3',
      name: 'Haleem',
      description: 'dish is made with lentils',
      price: 100,
    },
    {
      id: 'm4',
      name: 'Hyderabadi Khichdi',
      description: 'Spicy in taste',
      price: 180,
    },
  ];

const AvailableMeals=()=>{
    const mealsList=DUMMY_MEALS.map((meal) =>( 
       <MealItem 
         key={meal.id} 
         name={meal.name} 
         description={meal.description} 
         price={meal.price}
        />
      )); 

    return <section className={classes.meals}>
      <Card>
        <ul>
            {mealsList}
        </ul>
     </Card> 
    </section>


}

export default AvailableMeals;