import * as apiPath from "../../ApiPath";
import { create } from "zustand";
import { getListQuery, IListQuery } from "../../Models/base";
import { ICity, IDistrict, IWard } from "../../Models/Location";
import axiosClient from "../../Axios";

interface ILocationStore {
  cities: ICity[];
  districts: IDistrict[];
  wards: IWard[];
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  getCities: () => void;
  getDistricts: (query: IListQuery) => void;
  getWards: (query: IListQuery) => void;
}

const useLocationStore = create<ILocationStore>((set) => ({
  cities: [],
  districts: [],
  wards: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  getCities: async () => {
    set((state) => ({ ...state, isLoading: true }));
    try {
      const res = await axiosClient.get(apiPath.location.getCities);
      set((state) => ({
        ...state,
        cities: res.data,
        isLoading: false,
        isSuccess: true,
      }));
    } catch (error) {
      set((state) => ({ ...state, isLoading: false, isError: true }));
    }
  },
  getDistricts: async (query) => {
    set((state) => ({ ...state, isLoading: true }));
    try {
      const res = await axiosClient.get(
        apiPath.location.getDistricts,
        getListQuery(query as IListQuery)
      );
      set((state) => ({
        ...state,
        districts: res.data,
        isLoading: false,
        isSuccess: true,
      }));
    } catch (error) {
      set((state) => ({ ...state, isLoading: false, isError: true }));
    }
  },
  getWards: async (query) => {
    set((state) => ({ ...state, isLoading: true }));
    try {
      const res = await axiosClient.get(
        apiPath.location.getWards,
        getListQuery(query as IListQuery)
      );
      set((state) => ({
        ...state,
        wards: res.data,
        isLoading: false,
        isSuccess: true,
      }));
    } catch (error) {
      set((state) => ({ ...state, isLoading: false, isError: true }));
    }
  },
}));

export default useLocationStore;
