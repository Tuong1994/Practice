import React from "react";
import * as Ant from "antd";
import SelectModal from "./SelectModal";
import CreateModal from "./CreateModal";
import SelectList from "./SelectList";

interface ProductProps {}

const Product: React.FC<ProductProps> = (props) => {
  const [isSelect, setIsSelect] = React.useState<boolean>(false);
  const [isCreate, setIsCreate] = React.useState<boolean>(false);

  return (
    <React.Fragment>
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

      <SelectModal open={isSelect} onCancel={() => setIsSelect(false)} />
      <CreateModal open={isCreate} onCancel={() => setIsCreate(false)} />
    </React.Fragment>
  );
};

export default Product;
