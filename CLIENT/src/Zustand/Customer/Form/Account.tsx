import React from "react";
import * as Ant from "antd";
import * as Components from "../../../Components";

interface AccountProps {}

const Account: React.FC<AccountProps> = (props) => {
  const commonProps = {
    labelCol: { span: 8 },
    wrapperCol: { span: 20 },
  };

  return (
    <Ant.Card title="Account">
      <Ant.Row gutter={16}>
        <Ant.Col span={4}>
          <Ant.Form.Item name="avatar">
            <Components.Upload.Single />
          </Ant.Form.Item>
        </Ant.Col>
        <Ant.Col span={20}>
          <Ant.Form.Item label="Account" name="account" {...commonProps}>
            <Ant.Input />
          </Ant.Form.Item>
          <Ant.Form.Item label="Password" name="password" {...commonProps}>
            <Ant.Input.Password />
          </Ant.Form.Item>
        </Ant.Col>
      </Ant.Row>
    </Ant.Card>
  );
};

export default Account;
