import React from "react";
import * as Ant from "antd";

interface BodyHeaderProps {
  title?: string;
  htmlType?: "button" | "submit";
  isButton?: boolean;
  btnTitle?: string;
  onClick?(): void;
}

const BodyHeader: React.FC<BodyHeaderProps> = (props) => {
  const {
    title = "Body Header",
    htmlType,
    isButton = false,
    btnTitle = "Button",
    onClick,
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
        {isButton && <Ant.Button type="primary" htmlType={htmlType} onClick={onClick}>{btnTitle}</Ant.Button>}
      </div>
    </Ant.Layout.Header>
  );
};

export default BodyHeader;
