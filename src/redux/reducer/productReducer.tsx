
import { Actions, ProductModel } from "../../models/productModel";
import { ActionTypes } from "../containts/actionType";


export interface ProductsList {
    products: ProductModel[]
}

const initialState = {
    products: [],
} as ProductsList


export const productReducer = (state = initialState, action: Actions) => {
    switch (action.type) {
        case ActionTypes.SET_PRODUCT:
            return { ...state, products: action.payload };
        case ActionTypes.FETCH_PRODUCTS:
            return { ...state, products: action.payload };
        default:
            return state;
    }

}

export const selectedProductsReducer = (state = {}, action: Actions) => {
    console.log(action.type);
    switch (action.type) {
        case ActionTypes.SELECT_PRODUCT:
            return { ...state, products: action.payload };
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {};
        default:
            return state;
    }
};