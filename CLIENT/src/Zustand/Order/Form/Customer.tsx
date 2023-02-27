import React from "react";
import * as Ant from "antd";

interface CustomerProps {}

const Customer: React.FC<CustomerProps> = (props) => {
  return (
    <Ant.Card title="Customer">
      <Ant.Form.Item
        label="Customer"
        name="customerId"
        labelAlign="left"
        labelCol={{ span: 9 }}
        wrapperCol={{ span: 15 }}
      >
        <Ant.Select
          showSearch
          placeholder="Select customer"
          optionFilterProp="children"
        />
      </Ant.Form.Item>
    </Ant.Card>
  );
};

export default Customer;
