export interface ProductModel {
    id: number,
    title: string,
    description: string,
    category: string,
    image: string,
    price: number

}

export interface MoviesState {
    readonly products: ProductModel[];
}


export interface Actions {
    type?: string;
    payload?: any;
}