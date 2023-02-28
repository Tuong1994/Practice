import React from "react";
import * as Ant from "antd";
import options from "../../../Options";

interface PersonalProps {}

const Personal: React.FC<PersonalProps> = (props) => {
  const commonProps = {
    labelCol: { span: 8 },
    wrapperCol: { span: 20 },
  };

  return (
    <Ant.Card title="Personal">
      <Ant.Row gutter={16}>
        <Ant.Col span={12}>
          <Ant.Form.Item
            label="First Name"
            name="firstName"
            labelAlign="left"
            {...commonProps}
          >
            <Ant.Input />
          </Ant.Form.Item>
        </Ant.Col>
        <Ant.Col span={12}>
          <Ant.Form.Item
            label="Last Name"
            name="lastName"
            labelAlign="left"
            {...commonProps}
          >
            <Ant.Input />
          </Ant.Form.Item>
        </Ant.Col>
      </Ant.Row>

      <Ant.Row gutter={16}>
        <Ant.Col span={12}>
          <Ant.Form.Item
            label="Phone"
            name="phone"
            labelAlign="left"
            {...commonProps}
          >
            <Ant.Input />
          </Ant.Form.Item>
        </Ant.Col>
        <Ant.Col span={12}>
          <Ant.Form.Item
            label="Email"
            name="email"
            labelAlign="left"
            {...commonProps}
          >
            <Ant.Input />
          </Ant.Form.Item>
        </Ant.Col>
      </Ant.Row>

      <Ant.Row gutter={16}>
        <Ant.Col span={12}>
          <Ant.Form.Item
            label="Gender"
            name="gender"
            labelAlign="left"
            {...commonProps}
          >
            <Ant.Select
              showSearch
              placeholder="Select gender"
              optionFilterProp="children"
              options={options.gender}
            />
          </Ant.Form.Item>
        </Ant.Col>
        <Ant.Col span={12}>
          <Ant.Form.Item
            label="Birthday"
            name="birthday"
            labelAlign="left"
            {...commonProps}
          >
            <Ant.DatePicker />
          </Ant.Form.Item>
        </Ant.Col>
      </Ant.Row>
    </Ant.Card>
  );
};

export default Personal;
