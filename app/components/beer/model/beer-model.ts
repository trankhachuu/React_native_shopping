import { BeerItem } from "./beer-item";

export class BeerModel {
    key?: string;
    name?: string;
    image?: string;
    description?: string;
    price?: number;
    quantily?: number;
    beerItem?: BeerItem[];
}