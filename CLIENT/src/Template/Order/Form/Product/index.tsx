import React from "react";
import * as Ant from "antd";
import SelectList from "./SelectList";

interface ProductProps {
  setIsSelect: React.Dispatch<React.SetStateAction<boolean>>;
  setIsCreate: React.Dispatch<React.SetStateAction<boolean>>;
}

const Product: React.FC<ProductProps> = (props) => {
  const { setIsCreate, setIsSelect } = props;

  return (
      <Ant.Card title="Products">
        <Ant.Row justify="center">
          <Ant.Col>
            <Ant.Space size="middle">
              <Ant.Button type="primary" onClick={() => setIsSelect(true)}>
                Select product
              </Ant.Button>
              <Ant.Button onClick={() => setIsCreate(true)}>
                Create product
              </Ant.Button>
            </Ant.Space>
          </Ant.Col>
        </Ant.Row>

        <SelectList />
      </Ant.Card>
  );
};

export default Product;
