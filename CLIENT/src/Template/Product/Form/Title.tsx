import React from "react";
import * as Ant from "antd";

interface TitleProps {}

const Title: React.FC<TitleProps> = (props) => {
  return (
    <Ant.Card>
      <Ant.Row>
        <Ant.Col span={12}>
          <Ant.Form.Item name="bestSale">
            <Ant.Checkbox>Best Sale</Ant.Checkbox>
          </Ant.Form.Item>
        </Ant.Col>
        <Ant.Col span={12}>
          <Ant.Form.Item name="outstand">
            <Ant.Checkbox>Outstand</Ant.Checkbox>
          </Ant.Form.Item>
        </Ant.Col>
      </Ant.Row>
    </Ant.Card>
  );
};

export default Title;
