import React from "react";
import * as Ant from "antd";
import options from "../../../Options";

interface BelongProps {}

const Belong: React.FC<BelongProps> = (props) => {
  return (
    <Ant.Card>
      <Ant.Form.Item label="Category" name="categoryId" labelAlign="left">
        <Ant.Select
          showSearch
          placeholder="Select category"
          optionFilterProp="children"
          options={options.category}
        />
      </Ant.Form.Item>

      <Ant.Form.Item label="Producer" name="producerId" labelAlign="left">
        <Ant.Select
          showSearch
          placeholder="Select producer"
          optionFilterProp="children"
        />
      </Ant.Form.Item>
    </Ant.Card>
  );
};

export default Belong;
