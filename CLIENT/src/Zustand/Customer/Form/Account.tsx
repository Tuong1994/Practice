import React from "react";
import * as Ant from "antd";
import * as Components from "../../../Components";

interface AccountProps {}

const Account: React.FC<AccountProps> = (props) => {
  return (
    <Ant.Card title="Account">
      <Ant.Row gutter={16}>
        <Ant.Col span={4}>
          <Components.Upload.Single />
        </Ant.Col>
        <Ant.Col span={20}>
          <Ant.Form.Item
            label="Account"
            name="account"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 20 }}
          >
            <Ant.Input />
          </Ant.Form.Item>
          <Ant.Form.Item
            label="Password"
            name="password"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 20 }}
          >
            <Ant.Input.Password />
          </Ant.Form.Item>
        </Ant.Col>
      </Ant.Row>
    </Ant.Card>
  );
};

export default Account;
