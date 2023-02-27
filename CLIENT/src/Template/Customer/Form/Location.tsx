import React from "react";
import * as Ant from "antd";

interface LocationProps {}

const Location: React.FC<LocationProps> = (props) => {
  const onChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value: string) => {
    console.log("search:", value);
  };

  return (
    <Ant.Card title="Location">
      <Ant.Form.Item
        label="Address"
        name="address"
        labelAlign="left"
        labelCol={{ span: 5 }}
      >
        <Ant.Input />
      </Ant.Form.Item>

      <Ant.Form.Item
        label="City"
        name="city"
        labelAlign="left"
        labelCol={{ span: 5 }}
      >
        <Ant.Select
          showSearch
          placeholder="Select a person"
          optionFilterProp="children"
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

      <Ant.Form.Item
        label="District"
        name="district"
        labelAlign="left"
        labelCol={{ span: 5 }}
      >
        <Ant.Select
          showSearch
          placeholder="Select a person"
          optionFilterProp="children"
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

      <Ant.Form.Item
        label="Ward"
        name="ward"
        labelAlign="left"
        labelCol={{ span: 5 }}
      >
        <Ant.Select
          showSearch
          placeholder="Select a person"
          optionFilterProp="children"
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

export default Location;
