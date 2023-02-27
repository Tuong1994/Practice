import React from "react";
import * as Ant from "antd";
import * as Components from "../../../Components";
import { Link } from "react-router-dom";
import type { ColumnsType } from "antd/es/table";
import { useNavigate } from "react-router-dom";

interface ListProps {}

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const List: React.FC<ListProps> = (props) => {
  const navigate = useNavigate();

  const data: DataType[] = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ];

  const columns: ColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <Link to="/zustand/order/edit">{text}</Link>,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Ant.Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Ant.Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Ant.Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Ant.Space>
      ),
    },
  ];

  return (
    <Ant.Layout>
      <Components.BodyHeader
        title="Order"
        isButton
        btnTitle="Add"
        onClick={() => navigate("/zustand/order/add")}
      />
      <Ant.Table columns={columns} dataSource={data} />
    </Ant.Layout>
  );
};

export default List;
