import React from "react";
import * as Ant from "antd";
import useLocationStore from "../../Store/Location";
import { IListQuery } from "../../../Models/base";

interface LocationProps {
  getDistricts(query: IListQuery): void;
  getWards(query: IListQuery): void;
}

const Location: React.FC<LocationProps> = (props) => {
  const { getDistricts, getWards } = props;

  const [form] = Ant.Form.useForm();

  const cities = useLocationStore((state) => state.cities);
  const districts = useLocationStore((state) => state.districts);
  const wards = useLocationStore((state) => state.wards);

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
        name="cityCode"
        labelAlign="left"
        labelCol={{ span: 5 }}
      >
        <Ant.Select
          showSearch
          placeholder="Select city"
          optionFilterProp="nameEng"
          filterOption={(input, option) =>
            (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
          }
          options={cities.map((c) => ({ label: c.nameEng, value: c.code }))}
          onChange={(value, op: any) => {
            form.setFieldValue("cityName", op.label);
            getDistricts({ cityCode: value });
          }}
        />
      </Ant.Form.Item>

      <Ant.Form.Item
        label="District"
        name="districtCode"
        labelAlign="left"
        labelCol={{ span: 5 }}
      >
        <Ant.Select
          showSearch
          placeholder="Select district"
          optionFilterProp="nameEng"
          filterOption={(input, option) =>
            (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
          }
          options={districts.map((d) => ({ label: d.nameEng, value: d.code }))}
          onChange={(value, op: any) => {
            form.setFieldValue("districtName", op.label);
            getWards({ districtCode: value });
          }}
        />
      </Ant.Form.Item>

      <Ant.Form.Item
        label="Ward"
        name="wardCode"
        labelAlign="left"
        labelCol={{ span: 5 }}
      >
        <Ant.Select
          showSearch
          placeholder="Select ward"
          optionFilterProp="nameEng"
          filterOption={(input, option) =>
            (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
          }
          options={wards.map((w) => ({ label: w.nameEng, value: w.code }))}
          onChange={(_value, op: any) => {
            form.setFieldValue("wardName", op.label);
          }}
        />
      </Ant.Form.Item>
    </Ant.Card>
  );
};

export default Location;
