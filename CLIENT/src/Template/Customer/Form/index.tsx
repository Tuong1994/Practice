import React from "react";
import * as Ant from "antd";
import * as Components from "../../../Components";
import { useLocation } from "react-router-dom";
import Account from "./Account";
import Personal from "./Personal";
import Location from "./Location";
import utils from "../../../Utils";

interface FormProps {}

const Form: React.FC<FormProps> = (props) => {
  const { pathname } = useLocation();

  return (
    <Ant.Form initialValues={{}} autoComplete="off">
      <Components.BodyHeader
        title={`${utils.isAdd(pathname) ? "Add Customer" : "Edit Customer"}`}
        isButton
        btnTitle="Save"
      />
      <Ant.Row gutter={16}>
        <Ant.Col xs={24} lg={14} span={14}>
          <Ant.Space
            size="large"
            direction="vertical"
            style={{ width: "100%" }}
          >
            <Account />
            <Personal />
          </Ant.Space>
        </Ant.Col>

        <Ant.Col xs={24} lg={10} span={10}>
          <Location />
        </Ant.Col>
      </Ant.Row>
    </Ant.Form>
  );
};

export default Form;
