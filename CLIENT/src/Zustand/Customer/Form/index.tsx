import React from "react";
import * as Ant from "antd";
import * as Components from "../../../Components";
import { useLocation } from "react-router-dom";
import Account from "./Account";
import Personal from "./Personal";
import Location from "./Location";

interface FormProps {}

const Form: React.FC<FormProps> = (props) => {
  const { pathname } = useLocation();

  return (
    <Ant.Form initialValues={{}} autoComplete="off">
      <Components.BodyHeader title="Add Customer" isButton btnTitle="Save" />
      <Ant.Row gutter={16}>
        <Ant.Col span={14}>
          <Ant.Space
            size="large"
            direction="vertical"
            style={{ width: "100%" }}
          >
            <Account />
            <Personal />
          </Ant.Space>
        </Ant.Col>

        <Ant.Col span={10}>
          <Location />
        </Ant.Col>
      </Ant.Row>
    </Ant.Form>
  );
};

export default Form;
