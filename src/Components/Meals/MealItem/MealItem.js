import classes from './MealItem.module.css';


const MealItem =props=>{

    const price=`Rs ${props.price.toFixed()}`;

    return (
        <li className={classes.name}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div></div>
        </li>
    )

}
export default MealItem;