export interface PriceModel {
    highlighted: boolean;
    name: string;
    price: number;
    coin: string | null;
    benefits: string [];
    coupon?: string | null;
}
