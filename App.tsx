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
export default function App() {
  const [dataSource, setDataSource] = React.useState([]);
  React.useEffect(() => {
    const data = [
      {
        itemId: null,
        itemName: '',
        price: null,
        unit: '',
        quantity: null,
        discountPercentage: null,
        vatPercentage: null,
      },
    ];
    data.push(items[0]);
    setDataSource(data);
  });
  const columns = [
    {
      title: 'Item',
      dataIndex: 'itemId',
      key:'itemId'
    },
    {
      title: 'Unit',
      dataIndex: 'unit',
      key:'itemId'
    },
    {
      title: 'Cost Price',
      dataIndex: 'price',
      key:'itemId'
    },
    {
      title: 'Quantity',
      dataIndex: 'name',
      key:'itemId'
    },
    {
      title: 'Total/Exc VAT',
      dataIndex: 'name',
      key:'itemId'
    },
    {
      title: 'VAT%',
      dataIndex: 'name',
      key:'itemId'
    },
    {
      title: 'Discount',
      dataIndex: 'name',
      key:'itemId'
    },
    {
      title: 'Total/Inc VAT',
      dataIndex: 'name',
      key:'itemId'
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
