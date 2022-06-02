export interface IProduct {
    id: number;
    brand: string;
    title: string;
    desc: string;
    price: number;
    likes?: number;
    size: number | "toutes tailles";
    stocked: boolean;
    photo: any;
}

export interface IProductProps {
    product: IProduct;
}
