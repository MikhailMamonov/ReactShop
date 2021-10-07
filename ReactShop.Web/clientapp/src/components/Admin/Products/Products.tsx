import { Button, Col, Form, Row, Table } from "antd";
import Loader from "react-loader-spinner";
import CreateProduct from "./CreateProduct";
import { FC, useEffect, useState } from "react";
import { ProductsPropsType } from "./ProductsContainer";
import { Product } from "../../../types/products";
import { EditableCell } from "../EditableCell";
import AdminTable from "./../AdminTable";

export type ColumnType = {
  title: string;
  dataIndex: string;
  key?: string;
  width?: number;
  editable?: boolean;
  render?: (...args: any) => JSX.Element | "";
};

const Products: FC<ProductsPropsType> = (props) => {
  const originData = props.products.map((row) => {
    return { ...row, key: row.id };
  });

  console.log(originData);
  const [form] = Form.useForm();
  const [editingKey, setEditingKey] = useState(-1);
  const isEditing = (record: Product) => record.id === editingKey;
  const [dataSource, setDataSource] = useState(originData);

  useEffect(() => {
    const data = props.products.map((row) => {
      return { ...row, key: row.id };
    });
    setDataSource(data);
  }, [props.products]);

  const edit = (record: Product) => {
    form.setFieldsValue({ ...record });
    setEditingKey(record.id);
  };

  const cancel = () => {
    setEditingKey(-1);
  };

  const save = async (key: number) => {
    try {
      const row = (await form.validateFields()) as Product;
      const newDataSource = [...dataSource];
      const index = newDataSource.findIndex((item) => key === item.key);

      if (index > -1) {
        const item = newDataSource[index];
        const newProduct = {
          ...item,
          ...row,
        };

        newDataSource.splice(index, 1, newProduct);
        props.onEditProductClick(newProduct.id, newProduct);
        setDataSource(newDataSource);
        setEditingKey(-1);
      } else {
        newDataSource.push({ ...row, key: row.id });
        props.onAddProductClick(row);

        setDataSource(newDataSource);
        setEditingKey(-1);
      }
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: 150,
      editable: true,
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      width: 100,
      editable: true,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      width: 100,
      editable: true,
    },
    {
      title: "CategoryId",
      dataIndex: "categoryId",
      key: "categoryId",
      width: 100,
      editable: true,
    },

    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      width: 100,
      render: (text) => {
        return text ? <img width="50px" height="50px" src={text} alt="" /> : "";
      },
    },
    // {
    //   title: "operation",
    //   dataIndex: "operation",
    //   render: (_, record: Product) => {
    //     const editable = isEditing(record);
    //     return (
    //       <Row>
    //         {editable ? (
    //           <span>
    //             <Button
    //               onClick={() => save(record.id)}
    //               style={{ marginRight: 8 }}
    //             >
    //               Save
    //             </Button>
    //             <Button title="Sure to cancel?" onClick={cancel}>
    //               Cancel
    //             </Button>
    //           </span>
    //         ) : (
    //           <Button onClick={() => edit(record)}>Edit</Button>
    //         )}

    //         <Button onClick={() => props.onDeleteProductClick(record.id)}>
    //           Delete
    //         </Button>
    //       </Row>
    //     );
    //   },
    // },
  ];

  // const mergedColumns = columns.map((col) => {
  //   if (!col.editable) {
  //     return col;
  //   }
  //   return {
  //     ...col,
  //     onCell: (record: Product) => ({
  //       record,
  //       inputType:
  //         col.dataIndex === "price" || col.dataIndex === "categoryId"
  //           ? "number"
  //           : "text",
  //       dataIndex: col.dataIndex,
  //       title: col.title,
  //       editing: isEditing(record),
  //     }),
  //   };
  // });

  return (
    <div>
      <h2>Product</h2>
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
          <CreateProduct onSubmit={props.onAddProductClick}></CreateProduct>
        </Col>
        <Col span={12}>
          {/* <Form form={form} component={false}>
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
          </Form> */}
          <AdminTable
            rows={props.products}
            cols={columns}
            onAdd={props.onAddProductClick}
            onDelete={props.onDeleteProductClick}
            onEdit={props.onEditProductClick}
          ></AdminTable>
        </Col>
      </Row>
    </div>
  );
};

export default Products;
