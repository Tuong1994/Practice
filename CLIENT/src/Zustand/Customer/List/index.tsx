import React from "react";
import * as Ant from "antd";
import * as Components from "../../../Components";
import * as Models from "../../../Models";
import { Link, useNavigate } from "react-router-dom";
import type { ColumnsType } from "antd/es/table";
import { IListQuery } from "../../../Models/base";
import useCustomerStore from "../../Store/Customer";
import utils from "../../../Utils";

interface ListProps {}

const List: React.FC<ListProps> = (props) => {
  const navigate = useNavigate();
  const [page, setPage] = React.useState<number>(1);

  const customers = useCustomerStore((state) => state.customers);
  const isLoading = useCustomerStore((state) => state.isLoading);
  const isError = useCustomerStore((state) => state.isError);
  const getList = useCustomerStore((state) => state.getList);

  const query: IListQuery = {
    page: page,
    limit: 10,
  };

  React.useEffect(() => {
    getList(query);
  }, [page]);

  const convertTableData = (): Models.Customer.ICustomer[] => {
    const data = customers.list.map((c) => ({
      key: c.id,
      account: c.account,
      fullName: utils.getCustomerName(c.firstName ?? "", c.lastName ?? ""),
      phone: utils.formatPhoneNumber(c.phone ?? ""),
      email: c.email,
      gender: c.gender,
      birthday: c.birthday,
    }));
    return data;
  };

  const columns: ColumnsType<Models.Customer.ICustomer> = [
    {
      title: "Full name",
      dataIndex: "fullName",
      key: "fullName",
      render: (text, customer) => (
        <Link to="/zustand/customer/edit" state={{ id: customer.key }}>
          {text}
        </Link>
      ),
      fixed: "left",
    },
    {
      title: "Account",
      dataIndex: "account",
      key: "account",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
      render: (gender) => (
        <span>
          {(() => {
            if (gender) {
              if (Number(gender) === Models.Customer.EGender.male)
                return "Male";
              else return "Female";
            }
            return "--";
          })()}
        </span>
      ),
    },
    {
      title: "Birthday",
      dataIndex: "birthday",
      key: "birthday",
      render: (date) => (
        <span>
          {(() => {
            if (date) return new Date(date ?? "").toDateString();
            return "--";
          })()}
        </span>
      ),
    },
  ];

  // rowSelection object indicates the need for row selection
  const rowSelection = {
    onChange: (
      selectedRowKeys: React.Key[],
      selectedRows: Models.Customer.ICustomer[]
    ) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    getCheckboxProps: (record: Models.Customer.ICustomer) => ({
      disabled: record.account === "account-36", // Column configuration not to be checked
      name: record.account,
    }),
  };

  return (
    <Ant.Layout>
      <Components.BodyHeader
        title="Customer"
        isButton
        btnTitle="Add"
        onClick={() => navigate("/zustand/customer/add")}
      />
      {(() => {
        if (isLoading)
          return (
            <Ant.Card>
              <Ant.Skeleton
                title={false}
                paragraph={{ rows: 5, width: "100%" }}
              />
            </Ant.Card>
          );
        if (isError)
          return (
            <Ant.Layout.Content>
              <p>Network error! Can't get data from server</p>
            </Ant.Layout.Content>
          );
        return (
          <Ant.Table
            rowSelection={rowSelection}
            columns={columns}
            dataSource={convertTableData()}
            scroll={{ x: 1300 }}
            pagination={{
              defaultCurrent: page,
              total: customers.total,
              position: ["bottomCenter"],
            }}
            onChange={(p) => setPage(p.current ?? 1)}
          />
        );
      })()}
    </Ant.Layout>
  );
};

export default List;
