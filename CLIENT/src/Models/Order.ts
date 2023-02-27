import { IProduct } from "./Product";
import { IShipment } from "./Shipment";

export enum EOrderStatus {
  paid = 1,
  waiting = 2,
  cod = 3,
}

export enum EPaymentMethods {
  transfer = 1,
  direct = 2,
  delivery = 3,
}

export interface IOrder {
  id?: string;
  shipmentFee: number;
  shipment?: IShipment | null;
  products: IProduct[];
  totalPay: number;
  paymentMethod: number;
  status: number;
  customerId: string | null;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}
