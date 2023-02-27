import { IProduct } from "./Product";

export enum EShipmentStatus {
    delivering = 1,
    delivered = 2,
}

export interface IShipment {
  id?: string;
  status: number;
  ordererName: string;
  ordererPhone: string;
  recieverName: string;
  recieverPhone: string;
  products: IProduct[];
  address: string;
  cityName: string;
  cityCode: string;
  districtName: string;
  districtCode: string;
  wardName: string;
  wardCode: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}
