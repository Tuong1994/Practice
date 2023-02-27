import React from "react";
import * as Ant from "antd";
import * as Components from "../../../Components";
import { useLocation } from "react-router-dom";
import { EPaymentMethods } from "../../../Models/Order";
import Product from "./Product";
import Status from "./Status";
import SelectModal from "./Product/SelectModal";
import CreateModal from "./Product/CreateModal";
import ShipmentModal from "./Status/ShipmentModal";
import Customer from "./Customer";
import Summary from "./Summary";
import utils from "../../../Utils";

interface FormProps {}

const Form: React.FC<FormProps> = (props) => {
  const { pathname } = useLocation();

  const [isSelect, setIsSelect] = React.useState<boolean>(false);
  const [isCreate, setIsCreate] = React.useState<boolean>(false);
  const [method, setMethod] = React.useState<number>(0);

  return (
    <React.Fragment>
      <Ant.Form>
        <Components.BodyHeader
          title={utils.isAdd(pathname) ? "Add Order" : "Edit Order"}
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
              <Product setIsCreate={setIsCreate} setIsSelect={setIsSelect} />
              <Summary />
            </Ant.Space>
          </Ant.Col>

          <Ant.Col xs={24} lg={10} span={10}>
            <Ant.Space
              size="large"
              direction="vertical"
              style={{ width: "100%" }}
            >
              <Status method={method} setMethod={setMethod} />
              <Customer />
            </Ant.Space>
          </Ant.Col>
        </Ant.Row>
      </Ant.Form>

      <SelectModal open={isSelect} onCancel={() => setIsSelect(false)} />
      <CreateModal open={isCreate} onCancel={() => setIsCreate(false)} />
      <ShipmentModal
        open={method === EPaymentMethods.delivery}
        onCancel={() => setMethod(0)}
      />
    </React.Fragment>
  );
};

export default Form;
