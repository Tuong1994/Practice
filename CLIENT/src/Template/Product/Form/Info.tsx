import React from "react";
import * as Ant from "antd";

interface InfoProps {}

const Info: React.FC<InfoProps> = (props) => {
  const commonProps = {
    labelCol: { span: 5 },
    wrapperCol: { span: 24 },
  };

  const onChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value: string) => {
    console.log("search:", value);
  };

  return (
    <Ant.Card title="Infomation">
      <Ant.Form.Item
        label="Name"
        name="name"
        labelAlign="left"
        {...commonProps}
      >
        <Ant.Input />
      </Ant.Form.Item>

      <Ant.Divider orientation="left" orientationMargin={0} plain>
        Cost/Profit
      </Ant.Divider>

      <Ant.Form.Item
        label="Initial Captital"
        name="initialCaptital"
        labelAlign="left"
        {...commonProps}
      >
        <Ant.Input />
      </Ant.Form.Item>

      <Ant.Form.Item
        label="Profit(%)"
        name="profitPercent"
        labelAlign="left"
        {...commonProps}
      >
        <Ant.Select
          showSearch
          placeholder="Select profit percent"
          optionFilterProp="chidren"
          onChange={onChange}
          onSearch={onSearch}
          // filterOption={(input, option) =>
          //   (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
          // }
          // options={[
          //   {
          //     value: "jack",
          //     label: "Jack",
          //   },
          //   {
          //     value: "lucy",
          //     label: "Lucy",
          //   },
          //   {
          //     value: "tom",
          //     label: "Tom",
          //   },
          // ]}
        />
      </Ant.Form.Item>
    </Ant.Card>
  );
};

export default Info;
