import React from "react";
import * as Ant from "antd";

interface PersonalProps {}

const Personal: React.FC<PersonalProps> = (props) => {
  return (
    <Ant.Card title="Personal">
      <Ant.Row gutter={16}>
        <Ant.Col span={12}>
          <Ant.Form.Item
            label="First Name"
            name="firstName"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 20 }}
          >
            <Ant.Input />
          </Ant.Form.Item>
        </Ant.Col>
        <Ant.Col span={12}>
          <Ant.Form.Item
            label="Last Name"
            name="lastName"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 20 }}
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
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 20 }}
          >
            <Ant.Input />
          </Ant.Form.Item>
        </Ant.Col>
        <Ant.Col span={12}>
          <Ant.Form.Item
            label="Email"
            name="email"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 20 }}
          >
            <Ant.Input />
          </Ant.Form.Item>
        </Ant.Col>
      </Ant.Row>
    </Ant.Card>
  );
};

export default Personal;
