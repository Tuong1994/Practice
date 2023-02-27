import React from "react";
import * as Ant from "antd";
import * as Components from "../../../Components";

interface UploadProps {}

const Upload: React.FC<UploadProps> = (props) => {
  return (
    <Ant.Card title="Upload">
      <Components.Upload.Multiple />
    </Ant.Card>
  );
};

export default Upload;
