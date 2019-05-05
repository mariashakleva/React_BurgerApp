import React from 'react';
import classes from './Order.css';

const order = (props) => {

    const ingredients = [];
    for(let iName in props.ingredients){
        ingredients.push({
            name: iName,
            amount: props.ingredients[iName],
        });
    }

    const ingredientOutput = ingredients.map(i => {
        return <span 
        style={{
            textTransform: 'capitalize',
            display: 'inline-block',
            margin: '0 8px',
            border: '1px solid #ccc',
            padding: '7px 10px'
        }}
        key={i.id}>{i.name} ({i.amount})</span>
    });

    return(
        <div className={classes.Order}>
            <p>Ingredients: {ingredientOutput}</p>
            <p>Price: <strong>USD {Number.parseFloat(props.price).toFixed(2)}</strong></p>
        </div> 
    );

};

export default order;