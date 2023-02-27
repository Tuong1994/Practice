import React from "react";
import * as Ant from "antd";
import * as Models from "../../../../Models";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";

interface SelectListProps {}

const SelectList: React.FC<SelectListProps> = (props) => {
  const data: any = [
    {
      key: "P_0001",
      name: "Core i3 8100",
      warranty: 1,
      price: 2500000,
    },
    {
      key: "P_0002",
      name: "Core i5 8400",
      warranty: 1,
      price: 5500000,
    },
  ];

  const columns: ColumnsType<Models.Product.IProduct> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: 180,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      width: 180,
      render: (text) => <span>{text.toLocaleString()} VNĐ</span>,
    },
    {
      title: "Warranty",
      dataIndex: "warranty",
      key: "warranty",
      render: (text) => (
        <Ant.Input.Group compact>
          <Ant.Button type="primary" icon={<MinusOutlined />} />
          <Ant.Input style={{ width: "30%" }} defaultValue={text} />
          <Ant.Button type="primary" icon={<PlusOutlined />} />
        </Ant.Input.Group>
      ),
    },
  ];

  // rowSelection object indicates the need for row selection
  const rowSelection = {
    onChange: (
      selectedRowKeys: React.Key[],
      selectedRows: Models.Product.IProduct[]
    ) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    getCheckboxProps: (record: Models.Product.IProduct) => ({
      disabled: record.name === "Disabled User", // Column configuration not to be checked
      name: record.name,
    }),
  };

  return (
    <Ant.Table
      rowSelection={rowSelection}
      columns={columns}
      dataSource={data}
      pagination={false}
    />
  );
};

export default SelectList;
