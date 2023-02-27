import React from "react";
import * as Ant from "antd";
import options from "../../../../Options";
import ShipmentInfo from "./ShipmentInfo";

interface StatusProps {
  method: number;
  setMethod: React.Dispatch<React.SetStateAction<number>>;
}

const Status: React.FC<StatusProps> = (props) => {
  const { method, setMethod } = props;

  const commonProps = {
    labelCol: { span: 9 },
    wrapperCol: { span: 15 },
  };

  return (
    <Ant.Card>
      <Ant.Form.Item
        label="Order Status"
        name="status"
        labelAlign="left"
        {...commonProps}
      >
        <Ant.Select
          showSearch
          placeholder="Select status"
          optionFilterProp="children"
          options={options.orderStatus}
        />
      </Ant.Form.Item>

      <Ant.Form.Item
        label="Payment Method"
        name="paymentMethod"
        labelAlign="left"
        {...commonProps}
      >
        <Ant.Select
          showSearch
          placeholder="Select method"
          optionFilterProp="children"
          value={method}
          options={options.paymentMethod}
          onChange={(value) => setMethod(value)}
        />
      </Ant.Form.Item>

      <ShipmentInfo />
    </Ant.Card>
  );
};

export default Status;
