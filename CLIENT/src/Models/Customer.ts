import { IImage } from "./Image";

export enum EGender {
  male = 1,
  female = 2,
}

export interface ICustomer {
  id?: string;
  key?: string;
  account?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  fullName?: string;
  phone?: string;
  email?: string;
  address?: string;
  cityCode?: string;
  cityName?: string;
  districtCode?: string;
  districtName?: string;
  wardCode?: string;
  wardName?: string;
  birthday?: any;
  gender?: number;
  avatar?: IImage | any;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}
