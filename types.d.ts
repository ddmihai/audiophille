export interface ImageSet {
    mobile: string;
    tablet: string;
    desktop: string;
}

export interface IncludesItem {
    quantity: number;
    item: string;
}

export interface Gallery {
    first: ImageSet;
    second: ImageSet;
    third: ImageSet;
}

export interface OtherProduct {
    slug: string;
    name: string;
    image: ImageSet;
}

export interface Product {
    id: number;
    slug: string;
    name: string;
    image: ImageSet;
    category: string;
    categoryImage: ImageSet;
    new: boolean;
    price: number;
    description: string;
    features: string;
    includes: IncludesItem[];
    gallery: Gallery;
    others: OtherProduct[];
}