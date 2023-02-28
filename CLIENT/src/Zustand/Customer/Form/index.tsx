import React from "react";
import * as Ant from "antd";
import * as Components from "../../../Components";
import { useLocation } from "react-router-dom";
import { IListQuery } from "../../../Models/base";
import { ICustomer } from "../../../Models/Customer";
import useLocationStore from "../../Store/Location";
import useCustomerStore from "../../Store/Customer";
import Account from "./Account";
import Personal from "./Personal";
import Location from "./Location";
import utils from "../../../Utils";
import moment from "moment";

interface FormProps {}

const Form: React.FC<FormProps> = (props) => {
  const { pathname, state } = useLocation();

  const [form] = Ant.Form.useForm();

  const customer = useCustomerStore((state) => state.customer);
  const isLoading = useCustomerStore((state) => state.isLoading);
  const resetCustomer = useCustomerStore((state) => state.resetCustomer);
  const getDetail = useCustomerStore((state) => state.getDetail);

  const getCities = useLocationStore((state) => state.getCities);
  const getDistricts = useLocationStore((state) => state.getDistricts);
  const getWards = useLocationStore((state) => state.getWards);

  React.useEffect(() => {
    if (!utils.isAdd(pathname)) {
      const query: IListQuery = {
        customerId: state.id,
      };
      getDetail(query);
    } else resetCustomer();
  }, []);

  React.useEffect(() => {
    getCities();
    getDistricts({ cityCode: customer?.cityCode });
    getWards({ districtCode: customer?.districtCode });
  }, [customer]);

  React.useEffect(() => form.resetFields(), [customer]);

  const initialValues: ICustomer = {
    account: customer?.account ?? "",
    firstName: customer?.firstName ?? "",
    lastName: customer?.lastName ?? "",
    phone: customer?.phone ?? "",
    email: customer?.email ?? "",
    gender: customer?.gender ?? 0,
    birthday: moment(customer?.birthday) ?? "",
    address: customer?.address ?? "",
    cityCode: customer?.cityCode ?? "",
    cityName: customer?.cityName ?? "",
    districtCode: customer?.districtCode ?? "",
    districtName: customer?.districtName ?? "",
    wardCode: customer?.wardCode ?? "",
    wardName: customer?.wardName ?? "",
    avatar: customer?.avatar ?? null,
  };

  const onSubmit = (value: ICustomer) => {
    console.log(value);
  };

  return (
    <React.Fragment>
      {isLoading ? (
        <Components.FormLoader />
      ) : (
        <Ant.Form
          form={form}
          initialValues={initialValues}
          autoComplete="off"
          onFinish={onSubmit}
        >
          <Ant.Form.Item style={{ margin: 0, padding: 0 }}>
            <Components.BodyHeader
              title={`${
                utils.isAdd(pathname) ? "Add Customer" : "Edit Customer"
              }`}
              isButton
              btnTitle="Save"
              htmlType="submit"
            />
          </Ant.Form.Item>
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
              <Location getDistricts={getDistricts} getWards={getWards} />
            </Ant.Col>
          </Ant.Row>
        </Ant.Form>
      )}
    </React.Fragment>
  );
};

export default Form;
