import React from "react";
import * as Ant from "antd";
import * as Components from "../../../Components";
import Product from "./Product";

interface FormProps {}

const Form: React.FC<FormProps> = (props) => {
  return (
    <Ant.Form>
      <Components.BodyHeader title="Add Order" isButton btnTitle="Save" />
      <Ant.Row gutter={16}>
        <Ant.Col xs={24} lg={14} span={14}>
          <Ant.Space
            size="large"
            direction="vertical"
            style={{ width: "100%" }}
          >
            <Product />
          </Ant.Space>
        </Ant.Col>
        <Ant.Col xs={24} lg={14} span={10}></Ant.Col>
      </Ant.Row>
    </Ant.Form>
  );
};

export default Form;
