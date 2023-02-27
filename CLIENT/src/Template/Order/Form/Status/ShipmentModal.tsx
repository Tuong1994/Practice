import React from "react";
import * as Ant from "antd";

interface ShipmentModalProps {
  open: boolean;
  onCancel(): void;
}

const ShipmentModal: React.FC<ShipmentModalProps> = (props) => {
  const { open, onCancel } = props;

  const commonProps = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  return (
    <Ant.Form initialValues={{}} autoComplete="off">
      <Ant.Modal title="Shipment" open={open} onCancel={onCancel}>
        <Ant.Divider orientation="left" orientationMargin={0}>
          Orderer
        </Ant.Divider>

        <Ant.Form.Item
          label="Name"
          name="ordererName"
          labelAlign="left"
          {...commonProps}
        >
          <Ant.Input />
        </Ant.Form.Item>
        <Ant.Form.Item
          label="Phone"
          name="ordererPhone"
          labelAlign="left"
          {...commonProps}
        >
          <Ant.Input />
        </Ant.Form.Item>

        <Ant.Divider orientation="left" orientationMargin={0}>
          Reciever
        </Ant.Divider>

        <Ant.Form.Item
          label="Name"
          name="recieverName"
          labelAlign="left"
          {...commonProps}
        >
          <Ant.Input />
        </Ant.Form.Item>
        <Ant.Form.Item
          label="Phone"
          name="recieverPhone"
          labelAlign="left"
          {...commonProps}
        >
          <Ant.Input />
        </Ant.Form.Item>

        <Ant.Divider orientation="left" orientationMargin={0}>
          Location
        </Ant.Divider>

        <Ant.Row gutter={16}>
          <Ant.Col span={12}>
            <Ant.Form.Item
              label="Address"
              name="address"
              labelAlign="left"
              {...commonProps}
            >
              <Ant.Input />
            </Ant.Form.Item>
          </Ant.Col>
          <Ant.Col span={12}>
            <Ant.Form.Item
              label="City"
              name="cityCode"
              labelAlign="left"
              {...commonProps}
            >
              <Ant.Select
                showSearch
                placeholder="Select city"
                optionFilterProp="children"
              />
            </Ant.Form.Item>
          </Ant.Col>
        </Ant.Row>

        <Ant.Row gutter={16}>
          <Ant.Col span={12}>
            <Ant.Form.Item
              label="District"
              name="districtCode"
              labelAlign="left"
              {...commonProps}
            >
              <Ant.Select
                showSearch
                placeholder="Select district"
                optionFilterProp="children"
              />
            </Ant.Form.Item>
          </Ant.Col>
          <Ant.Col span={12}>
            <Ant.Form.Item
              label="Ward"
              name="wardCode"
              labelAlign="left"
              {...commonProps}
            >
              <Ant.Select
                showSearch
                placeholder="Select ward"
                optionFilterProp="children"
              />
            </Ant.Form.Item>
          </Ant.Col>
        </Ant.Row>
      </Ant.Modal>
    </Ant.Form>
  );
};

export default ShipmentModal;
