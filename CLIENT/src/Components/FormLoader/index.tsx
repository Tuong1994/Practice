import React from "react";
import * as Ant from "antd";

interface FormLoaderProps {}

const FormLoader: React.FC<FormLoaderProps> = (props) => {
  return (
    <Ant.Layout>
      <Ant.Space size="large" direction="vertical" style={{ width: "100%" }}>
        <Ant.Card>
          <Ant.Skeleton
            title={false}
            paragraph={{ rows: 2, width: ["100%", "100%"] }}
          />
        </Ant.Card>

        <Ant.Row gutter={16}>
          <Ant.Col span={14}>
            <Ant.Space
              size="large"
              direction="vertical"
              style={{ width: "100%" }}
            >
              <Ant.Card>
                <Ant.Skeleton
                  title={false}
                  paragraph={{ rows: 6, width: ["100%", "100%"] }}
                />
              </Ant.Card>
              <Ant.Card>
                <Ant.Skeleton
                  title={false}
                  paragraph={{ rows: 6, width: ["100%", "100%"] }}
                />
              </Ant.Card>
            </Ant.Space>
          </Ant.Col>

          <Ant.Col span={10}>
            <Ant.Card>
              <Ant.Skeleton
                title={false}
                paragraph={{ rows: 6, width: ["100%", "100%"] }}
              />
            </Ant.Card>
          </Ant.Col>
        </Ant.Row>
      </Ant.Space>
    </Ant.Layout>
  );
};

export default FormLoader;
