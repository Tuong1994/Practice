import * as apiPath from "../../ApiPath";
import { create } from "zustand";
import { getListQuery, IListQuery, IPaging } from "../../Models/base";
import { ICustomer } from "../../Models/Customer";
import axiosClient from "../../Axios";

interface ICustomerStore {
  customers: IPaging<ICustomer>;
  customer: ICustomer | null;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  resetCustomer: () => void;
  getList: (query: IListQuery) => void;
  getDetail: (query: IListQuery) => void;
}

const useCustomerStore = create<ICustomerStore>((set) => ({
  customers: {
    page: 0,
    limit: 0,
    total: 0,
    list: [],
  },
  customer: null,
  isLoading: false,
  isSuccess: false,
  isError: false,
  resetCustomer: () => set((state) => ({ ...state, customer: null })),
  getList: async (query) => {
    set((state) => ({ ...state, isLoading: true }));
    try {
      const res = await axiosClient.get(
        apiPath.customer.getList,
        getListQuery(query as IListQuery)
      );
      set((state) => ({
        ...state,
        customers: res.data,
        isLoading: false,
        isSuccess: true,
      }));
    } catch (error) {
      set((state) => ({
        ...state,
        isError: true,
        isLoading: false,
      }));
    }
  },
  getDetail: async (query) => {
    set((state) => ({ ...state, isLoading: true }));
    try {
      const res = await axiosClient.get(
        apiPath.customer.getDetail,
        getListQuery(query as IListQuery)
      );
      set((state) => ({
        ...state,
        customer: res.data,
        isLoading: false,
        isSuccess: true,
      }));
    } catch (error) {
      set((state) => ({
        ...state,
        isError: true,
        isLoading: false,
      }));
    }
  },
}));

export default useCustomerStore;
