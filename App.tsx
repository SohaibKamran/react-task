import * as React from 'react';
import './style.css';
import 'antd/dist/antd.css';
import { Table } from 'antd';
const items = [
  {
    itemId: 1,
    itemName: 'Ear Pods',
    price: 100,
    unit: 'KG',
    quantity: 1,
    discountPercentage: 10,
    vatPercentage: 15,
  },
  {
    itemId: 2,
    itemName: 'IPhone',
    price: 90000,
    unit: 'Mile',
    quantity: 1,
    discountPercentage: 20,
    vatPercentage: 15,
  },
  {
    itemId: 3,
    itemName: 'Pencil',
    price: 20,
    unit: 'Mile',
    quantity: 1,
    discountPercentage: 20,
    vatPercentage: 15,
  },
  {
    itemId: 4,
    itemName: 'Samsung',
    price: 70000,
    unit: 'Mile',
    quantity: 1,
    discountPercentage: 10,
    vatPercentage: 15,
  },
  {
    itemId: 5,
    itemName: 'Rubber',
    price: 10,
    unit: 'Mile',
    quantity: 1,
    discountPercentage: 20,
    vatPercentage: 15,
  },
  {
    itemId: 6,
    itemName: 'Table',
    price: 700,
    unit: 'Mile',
    quantity: 1,
    discountPercentage: 20,
    vatPercentage: 15,
  },
  {
    itemId: 7,
    itemName: 'Chair',
    price: 90000,
    unit: 'Mile',
    quantity: 1,
    discountPercentage: 20,
    vatPercentage: 15,
  },
];
const tableData = [{}];
export default function App() {
  const [dataSource, setDataSource] = React.useState([]);
  React.useEffect(() => {
    setDataSource(tableData);
  });
  const handleChange = (event) => {
    const item = items.find((item) => item.itemId === +event.target.value);
    tableData.push(item);
    console.log(tableData);
    setDataSource(tableData);
  };
  const columns = [
    {
      title: 'Item',
      dataIndex: 'itemId',
      key: 'itemId',
      render: () => {
        return (
          <select style={{ width: 120 }} onChange={handleChange}>
            {items.map((item) => (
              <option value={item.itemId}>
                <div>
                  ID {item.itemId} CostPrice:{item.price}
                </div>
              </option>
            ))}
          </select>
        );
      },
    },
    {
      title: 'Unit',
      dataIndex: 'unit',
      key: 'unit',
    },
    {
      title: 'Cost Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Total/Exc VAT',
      dataIndex: 'total/excVAT',
      key: 'total/excVAT',
      render: () => {
        return 56 * 36;
      },
    },
    {
      title: 'VAT%',
      dataIndex: 'vatPercentage',
      key: 'vatPercentage',
    },
    {
      title: 'Discount',
      dataIndex: 'discountPercentage',
      key: 'discountPercentage',
    },
    {
      title: 'Total/Inc VAT',
      dataIndex: 'total/incVAT',
      key: 'total/incVAT',
      render: () => {
        return 56 * 36;
      },
    },
  ];
  return (
    <div>
      <div className="app">
        <div className="table">
          <Table dataSource={dataSource} columns={columns} pagination={false} />
        </div>
      </div>
    </div>
  );
}
