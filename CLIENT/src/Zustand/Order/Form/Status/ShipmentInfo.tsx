import React from "react";
import * as Ant from "antd";
import utils from "../../../../Utils";

interface ShipmentInfoProps {}

const ShipmentInfo: React.FC<ShipmentInfoProps> = (props) => {
  return (
    <Ant.Card type="inner" title="Shipment">
      <Ant.Row gutter={5}>
        <Ant.Col span={10}>Orderer Name:</Ant.Col>
        <Ant.Col span={14}>Jack Williams</Ant.Col>
      </Ant.Row>
      <Ant.Row gutter={5}>
        <Ant.Col span={10}>Orderer Phone:</Ant.Col>
        <Ant.Col span={14}>{utils.formatPhoneNumber("0793229970")}</Ant.Col>
      </Ant.Row>
      <Ant.Row gutter={5}>
        <Ant.Col span={10}>Reciever Name:</Ant.Col>
        <Ant.Col span={14}>Jason Williams</Ant.Col>
      </Ant.Row>
      <Ant.Row gutter={5}>
        <Ant.Col span={10}>Reciever Phone:</Ant.Col>
        <Ant.Col span={14}>{utils.formatPhoneNumber("0793229971")}</Ant.Col>
      </Ant.Row>
      <Ant.Row gutter={5}>
        <Ant.Col span={10}>Address:</Ant.Col>
        <Ant.Col span={14}>79/24/13 Au Co P.14 Q.11 HCMC</Ant.Col>
      </Ant.Row>
    </Ant.Card>
  );
};

export default ShipmentInfo;
