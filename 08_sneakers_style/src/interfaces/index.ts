export interface IProduct {
    id: string;
    brand: string;
    title: string;
    desc: string;
    price: string;
    likes: string;
    size: string;
    stocked: string;
    photo: any;
}

export interface IProductProps {
    product: IProduct;
}
