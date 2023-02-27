import React from "react";
import * as Ant from "antd";
import * as Components from "../../../Components";
import * as Models from "../../../Models";
import { Link, useNavigate } from "react-router-dom";
import type { ColumnsType } from "antd/es/table";
import utils from "../../../Utils";

interface ListProps {}

const List: React.FC<ListProps> = (props) => {
  const navigate = useNavigate();

  const data: Models.Customer.ICustomer[] = [
    {
      id: utils.uuid(),
      account: "John1994",
      fullName: "John Brown",
      phone: "0793229981",
      email: "john@gmail.com",
    },
  ];

  const columns: ColumnsType<Models.Customer.ICustomer> = [
    {
      title: "Full name",
      dataIndex: "fullName",
      key: "fullName",
      render: (text) => <Link to="/zustand/customer/edit">{text}</Link>,
    },
    {
      title: "Account",
      dataIndex: "account",
      key: "account",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
  ];

  return (
    <Ant.Layout>
      <Components.BodyHeader
        title="Customer"
        isButton
        btnTitle="Add"
        onClick={() => navigate("/zustand/customer/add")}
      />
      <Ant.Table columns={columns} dataSource={data} />
    </Ant.Layout>
  );
};

export default List;
