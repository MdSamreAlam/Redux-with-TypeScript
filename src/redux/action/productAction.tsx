import { ActionTypes } from "../containts/actionType";
import { ProductModel } from "../../models/productModel";
import fakeApi from "../../apis/fakeApi";

export interface ProductData {
    products: ProductModel[]
}

export const fetchProducts = () => async (dispatch: any) => {
    const response = await fakeApi.get('./products');
    dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data });

};


export const SetProducts = (products: ProductData) => {
    return {
        type: ActionTypes.SET_PRODUCT,
        payload: products
    };

};

export const SelectProduct = (Product: ProductData) => {
    return {
        type: ActionTypes.SELECT_PRODUCT,
        payload: Product
    };
};

export const removeSelectedProduct = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    };
};
