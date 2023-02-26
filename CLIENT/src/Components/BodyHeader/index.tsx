import React from "react";
import * as Ant from "antd";

interface BodyHeaderProps {
  title?: string;
  isButton?: boolean;
  btnTitle?: string;
}

const BodyHeader: React.FC<BodyHeaderProps> = (props) => {
  const {
    title = "Body Header",
    isButton = false,
    btnTitle = "Button",
  } = props;

  return (
    <Ant.Layout.Header
      style={{ background: "transparent", paddingInline: "20px 10px" }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h3 style={{fontSize: "20px"}}>{title}</h3>
        {isButton && <Ant.Button type="primary">{btnTitle}</Ant.Button>}
      </div>
    </Ant.Layout.Header>
  );
};

export default BodyHeader;
