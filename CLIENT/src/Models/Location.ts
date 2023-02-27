export interface ICity {
  id?: string;
  nameEng: string;
  nameVn: string;
  code: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}

export interface IDistrict {
  id?: string;
  nameEng: string;
  nameVn: string;
  code: string;
  cityId: string;
  cityCode: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}

export interface IWard {
  id?: string;
  nameEng: string;
  nameVn: string;
  code: string;
  districtId: string;
  districtCode: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}