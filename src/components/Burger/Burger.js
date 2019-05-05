import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {

    //the ingredients we recieve from the BurgerBuilder are not an array, but an object, so to transform them in the array we use Object keys ehich returns an array of the keys (salad, soy etc) which later we can loop trough with map and we want to make each elemnt return an array of the amount the user choose, so if we have cheese:2, we return ['cheese', 'cheese']
    let transformedIngrdients = Object.keys(props.ingredients).map(igKey => {
        //Array (contains here the amount of the given ingredient) and we have an array of two elements the salad: 1 for example
        return[...Array(props.ingredients[igKey])].map((_, i) => {
        // we use underscore because we don't care about the element but the index of it
            return <BurgerIngredient key={igKey + i} type={igKey} />
        });
    }).reduce((arr, el) => {
        //the arr is the new arr we're returning and we just concat el, the elemnt we are looping
        return arr.concat(el)
    }, []);
    //reduce is a js func that accepts the prev val and the current value and it's executed on every element we return above // it also accepts an initial value a.k.a the reduced value // we need to reduce the rray to check if it's empty, we cant do that with length because we have 4(or num of ingredients empty) empty arrays in it

    if(transformedIngrdients.length === 0){
        transformedIngrdients = <p>Please start adding ingredients!</p>;
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngrdients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger;