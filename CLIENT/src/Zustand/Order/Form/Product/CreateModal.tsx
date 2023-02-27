import React from "react";
import * as Ant from "antd";
import options from "../../../../Options";

interface CreateModalProps {
  open: boolean;
  onCancel(): void;
}

const CreateModal: React.FC<CreateModalProps> = (props) => {
  const { open, onCancel } = props;

  const commonProps = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  return (
    <Ant.Form initialValues={{}} autoComplete="off">
      <Ant.Modal title="Create Products" open={open} onCancel={onCancel}>
        <Ant.Form.Item
          label="Name"
          name="name"
          labelAlign="left"
          {...commonProps}
        >
          <Ant.Input />
        </Ant.Form.Item>

        <Ant.Form.Item
          label="Price"
          name="price"
          labelAlign="left"
          {...commonProps}
        >
          <Ant.Input />
        </Ant.Form.Item>

        <Ant.Form.Item
          label="Product Status"
          name="status"
          labelAlign="left"
          {...commonProps}
        >
          <Ant.Select
            showSearch
            placeholder="Select product status"
            optionFilterProp="children"
            options={options.productStatus}
          />
        </Ant.Form.Item>

        <Ant.Form.Item
          label="Category"
          name="category"
          labelAlign="left"
          {...commonProps}
        >
          <Ant.Select
            showSearch
            placeholder="Select category"
            optionFilterProp="children"
            options={options.category}
          />
        </Ant.Form.Item>

        <Ant.Form.Item
          label="Producer"
          name="producer"
          labelAlign="left"
          {...commonProps}
        >
          <Ant.Select
            showSearch
            placeholder="Select producer"
            optionFilterProp="children"
          />
        </Ant.Form.Item>
      </Ant.Modal>
    </Ant.Form>
  );
};

export default CreateModal;
