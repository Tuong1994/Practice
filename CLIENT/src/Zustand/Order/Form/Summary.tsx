import React from "react";
import * as Ant from "antd";

interface SummaryProps {}

const Summary: React.FC<SummaryProps> = (props) => {
  return (
    <Ant.Card title="Summary">
      <Ant.Row gutter={5} justify="end">
        <Ant.Col span={10}>Warranty:</Ant.Col>
        <Ant.Col span={14}>2 products</Ant.Col>
      </Ant.Row>
      <Ant.Row gutter={5} justify="end">
        <Ant.Col span={10}>Shipment Fee:</Ant.Col>
        <Ant.Col span={14}>0 VNĐ</Ant.Col>
      </Ant.Row>
      <Ant.Row gutter={5}>
        <Ant.Col span={10}>Total pay</Ant.Col>
        <Ant.Col span={14}>{String(8000000).toLocaleString()} VNĐ</Ant.Col>
      </Ant.Row>
    </Ant.Card>
  );
};

export default Summary;
