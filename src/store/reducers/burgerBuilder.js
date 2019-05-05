import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    ingredients: null,
    totalPrice : 4,
    error: false
}

const INGREDIENT_PRICES = {
    salad: 3,
    soy: 7,
    vegancheese: 5,
    nuts: 1.5
};

const addIngredient = (state, action) => {
    const updatedIngredient = { [action.ingredientName]: state.ingredients[action.ingredientName] + 1 };
    const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
    const updatedState = {
        ingredients: updatedIngredients,
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
    }
    return updateObject(state, updatedState);
}   

const removeIngredient = (state, action) => {
    const updatedIngredientRemove = { [action.ingredientName]: state.ingredients[action.ingredientName] + 1 };
    const updatedIngredientsRemove = updateObject(state.ingredients, updatedIngredientRemove);
    const updatedStateRemove = {
        ingredients: updatedIngredientsRemove,
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
    }
    return updateObject(state, updatedStateRemove);
}   

const setIngredients = (state, action) => {
    return updateObject(state, {
        ingredients: {
            salad: action.ingredients.salad,
            soy: action.ingredients.soy,
            vegancheese: action.ingredients.vegancheese,
            nuts: action.ingredients.nuts
        },
        error: false,
        totalPrice: 4
    });

}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.ADD_INGREDIENT:
            return addIngredient(state, action);
        case actionTypes.REMOVE_INGREDIENT:
            return removeIngredient(state, action);
        case actionTypes.SET_INGREDIENTS:
            return setIngredients(state, action);
        case actionTypes.FETCH_INGREDIENTS_FAILED:
            return updateObject(state, {error: true});
        default:
            return state;
    }
};

export default reducer;
