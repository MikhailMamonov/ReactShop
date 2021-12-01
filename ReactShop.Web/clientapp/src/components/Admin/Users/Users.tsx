import { Button, Col, Form, Row, Table } from "antd";
import { useTypedSelector } from "hooks/useTypedSelector";
import { useCallback, useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import { useDispatch } from "react-redux";
import { getAllUsersThunk } from "store/action-creators/users";
import { User } from "../../../types/users";
import { EditableCell } from "../EditableCell";
import CreateUser from "./CreateUser";
import { UserProps } from "./UsersContainer";

const Users: React.FC<UserProps> = (props) => {
  const originData = props.users.map((row) => {
    return { ...row, key: row.id };
  });

  const [form] = Form.useForm();
  const [editingKey, setEditingKey] = useState("");
  const isEditing = (record: User) => record.id === editingKey;
  const [dataSource, setDataSource] = useState(originData);

  const dispatch = useDispatch();
  const { users, isLoading, error } = useTypedSelector((state) => state.users);

  const fetchUsers = useCallback(() => {
    console.log("getAllUsersThunk");
    dispatch(getAllUsersThunk());
  }, [dispatch]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  useEffect(() => {
    const data = props.users.map((row) => {
      return { ...row, key: row.id };
    });
    setDataSource(data);
  }, [props.users]);

  const edit = (record: User) => {
    form.setFieldsValue({ ...record });
    setEditingKey(record.id);
  };

  const cancel = () => {
    setEditingKey("");
  };

  const save = async (key: string) => {
    try {
      console.log("save");
      const row = (await form.validateFields()) as User;
      const newDataSource = [...dataSource];
      const index = newDataSource.findIndex((item) => key === item.key);

      if (index > -1) {
        const item = newDataSource[index];
        const newUser = {
          ...item,
          ...row,
        };
        console.log("newUser", newUser);
        newDataSource.splice(index, 1, newUser);
        props.onEditUserClick(newUser.id, newUser);
        setDataSource(newDataSource);
        setEditingKey("");
      } else {
        newDataSource.push({ ...row, key: row.id });
        props.onAddUserClick(row);
        setDataSource(newDataSource);
        setEditingKey("");
      }
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };

  const columns = [
    {
      title: "UserName",
      dataIndex: "userName",
      key: "userName",
      width: 150,
      editable: true,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: 150,
      editable: true,
    },
    {
      title: "Password",
      dataIndex: "password",
      key: "password",
      width: 150,
      editable: true,
    },
    {
      title: "operation",
      dataIndex: "operation",
      render: (_, record: User) => {
        const editable = isEditing(record);
        return (
          <Row>
            {editable ? (
              <span>
                <Button
                  onClick={() => save(record.id)}
                  style={{ marginRight: 8 }}
                >
                  Save
                </Button>
                <Button title="Sure to cancel?" onClick={cancel}>
                  Cancel
                </Button>
              </span>
            ) : (
              <Button onClick={() => edit(record)}>Edit</Button>
            )}

            <Button onClick={() => props.onDeleteUserClick(record.id)}>
              Delete
            </Button>
          </Row>
        );
      },
    },
  ];

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: User) => ({
        record,
        inputType: "text",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  return (
    <div>
      <h2>Users</h2>
      <Row>
        {props.error ?? null}
        <Loader
          type="Bars"
          visible={props.isLoading}
          color="#00BFFF"
          height={80}
          width={80}
        />
        <Col span={12}>
          {" "}
          <CreateUser onAdd={props.onAddUserClick}></CreateUser>
        </Col>
        <Col span={12}>
          <Form form={form} component={false}>
            <Table
              components={{
                body: {
                  cell: EditableCell,
                },
              }}
              bordered
              columns={mergedColumns}
              dataSource={dataSource}
            ></Table>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Users;
