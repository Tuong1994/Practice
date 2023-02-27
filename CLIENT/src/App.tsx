import * as Customer from "./Zustand/Customer";
import * as Product from "./Zustand/Product";
import * as Order from "./Zustand/Order";
import { Routes, Route } from "react-router-dom";
import ZustandApp from "./Zustand";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ZustandApp />}>
        <Route path="/zustand/customer" element={<Customer.List />} />
        <Route path="/zustand/customer/add" element={<Customer.Form />} />
        <Route path="/zustand/customer/edit" element={<Customer.Form />} />

        <Route path="/zustand/product" element={<Product.List />} />
        <Route path="/zustand/product/add" element={<Product.Form />} />
        <Route path="/zustand/product/edit" element={<Product.Form />} />

        <Route path="/zustand/order" element={<Order.List />} />
        <Route path="/zustand/order/add" element={<Order.Form />} />
        <Route path="/zustand/order/edit" element={<Order.Form />} />
      </Route>
    </Routes>
  );
}

export default App;
