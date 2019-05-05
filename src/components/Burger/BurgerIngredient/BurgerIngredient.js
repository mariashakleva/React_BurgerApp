import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './BurgerIngredient.css';

class BurgerIngredient extends Component {

    render(){
        let ingredient = null;

        switch (this.props.type) {
            case('bread-bottom'):
                ingredient = <div className={classes.BreadBottom}></div>;
                break;
            case('bread-top'):
                ingredient = (
                    <div className={classes.BreadTop}>
                        <div className={classes.Seeds1}></div>
                        <div className={classes.Seeds2}></div>
                    </div>
                );
                break;
            case('soy'):
                    ingredient = <div className={classes.Soy}></div>;
                    break;
            case('vegancheese'):
                    ingredient = <div className={classes.VeganCheese}></div>;
                    break;
            case('nuts'):
                    ingredient = <div className={classes.Nuts}></div>;
                    break;
            case('salad'):
                    ingredient = <div className={classes.Salad}></div>;
                    break;
            default:
                ingredient = null;  
    }

        return ingredient;

    }
    
};

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default BurgerIngredient;