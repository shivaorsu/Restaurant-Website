 
 import Card from '../UI/Card';
 import MealItem from './MealItem/MealItem';
 import classes from './AvailableMeals.module.css';
 
 const DUMMY_MEALS = [
   {
     id: 'm1',
     name: 'Hyderabadi Briyani',
     description: 'Veg and Non-Veg',
     price: 120,
   },
   {
     id: 'm2',
     name: 'Mirchi Ka Salan',
     description: 'rosted peanuts,cocnuts,sesame seeds',
     price: 250,
   },
   {
     id: 'm3',
     name: 'Lukhmi',
     description: 'Spiced minced meat filling',
     price: 200,
   },
   {
     id: 'm4',
     name: 'Hyderabadi Khichidi',
     description: 'Gooey in texture',
     price: 180,
   },
 ];
 
 const AvailableMeals = () => {
   const mealsList = DUMMY_MEALS.map((meal) => (
     <MealItem
       
       key={meal.id}
       id={meal.id}
       name={meal.name}
       description={meal.description}
       price={meal.price}
     />
   ));
 
   return (
     <section className={classes.meals}>
       <Card>
         <ul>{mealsList}</ul>
       </Card>
     </section>
   );
 };
 
 export default AvailableMeals;
 