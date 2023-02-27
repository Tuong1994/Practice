import React from "react";
import * as Ant from "antd";
import * as Models from "../../../../Models";
import { baseImage } from "../../../../Models/base";

interface SelectModalProps {
  open: boolean;
  onCancel(): void;
}

const SelectModal: React.FC<SelectModalProps> = (props) => {
  const { open, onCancel } = props;

  const products: Models.Product.IProduct[] = [
    {
      id: "P_0001",
      name: "Core i3 8100",
      price: 2500000,
    },
    {
      id: "P_0002",
      name: "Core i3 8100",
      price: 2500000,
    },
    {
      id: "P_0003",
      name: "Core i3 8100",
      price: 2500000,
    },
    {
      id: "P_0004",
      name: "Core i3 8100",
      price: 2500000,
    },
    {
      id: "P_0005",
      name: "Core i3 8100",
      price: 2500000,
    },
    {
      id: "P_0006",
      name: "Core i3 8100",
      price: 2500000,
    },
    {
      id: "P_0007",
      name: "Core i3 8100",
      price: 2500000,
    },
  ];

  const bodyStyle = {
    height: "300px",
    overflow: "auto",
  };

  return (
    <Ant.Modal
      title="Select Products"
      open={open}
      onCancel={onCancel}
      bodyStyle={products.length > 4 ? bodyStyle : {}}
    >
      <Ant.Space size="middle" direction="vertical" style={{ width: "100%" }}>
        <Ant.List>
          {products.map((p) => (
            <Ant.List.Item key={p.id}>
              <Ant.Checkbox>
                <Ant.Row gutter={16}>
                  <Ant.Col>
                    <Ant.Image
                      width={50}
                      height={50}
                      src="error"
                      fallback={baseImage}
                    />
                  </Ant.Col>
                  <Ant.Col>
                    <h4>{p.name}</h4>
                    <p>{p.price?.toLocaleString()} VNĐ</p>
                  </Ant.Col>
                </Ant.Row>
              </Ant.Checkbox>
            </Ant.List.Item>
          ))}
        </Ant.List>
      </Ant.Space>
    </Ant.Modal>
  );
};

export default SelectModal;
