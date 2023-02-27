import React from "react";
import * as Ant from "antd";
import options from "../../../Options";

interface StatusProps {}

const Status: React.FC<StatusProps> = (props) => {
  const commonProps = {
    labelCol: { span: 9 },
    wrapperCol: { span: 20 },
  };

  return (
    <Ant.Card>
      <Ant.Form.Item
        label="Product Status"
        name="status"
        labelAlign="left"
        {...commonProps}
      >
        <Ant.Select
          showSearch
          placeholder="Select product status"
          optionFilterProp="children"
          options={options.productStatus}
        />
      </Ant.Form.Item>

      <Ant.Form.Item
        label="Inventory"
        name="inventory"
        labelAlign="left"
        {...commonProps}
      >
        <Ant.Input />
      </Ant.Form.Item>

      <Ant.Form.Item
        label="Inventory Status"
        name="inventoryStatus"
        labelAlign="left"
        {...commonProps}
      >
        <Ant.Select
          showSearch
          placeholder="Select inventory status"
          optionFilterProp="children"
          options={options.inventoryStatus}
        />
      </Ant.Form.Item>
    </Ant.Card>
  );
};

export default Status;
