import * as React from 'react';
import './style.css';
import 'antd/dist/antd.css';
import { Badge } from 'antd';
import { Table } from 'antd';
const items = [
  {
    itemId: 1,
    itemName: 'Ear Pods',
    price: 9000,
    unit: 'KG',
    quantity: 1,
    discountPercentage: 10,
    vatPercentage: 15,
  },
  {
    itemId: 2,
    itemName: 'IPhone',
    price: 1000,
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
    quantity: 2,
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
    quantity: 2,
    discountPercentage: 20,
    vatPercentage: 15,
  },
];
const units = ['KG', 'Mile'];
const tableData = [
  {
    itemId: null,
    itemName: '',
    price: null,
    unit: '',
    quantity: null,
    discountPercentage: null,
    vatPercentage: null,
    totalPriceExcVat: null,
    totalPriceIncVat: null,
  },
];
export default function App() {
  const [dataSource, setDataSource] = React.useState([]);
  React.useEffect(() => {
    setDataSource(tableData);
    console.log('Table Data At start', dataSource);
  });
  const handleChange = (event) => {
    var item: any = items.find((item) => item.itemId === +event.target.value);
    tableData.unshift(item);
    setDataSource([...tableData, item]);
    console.log('Table Data At handle change', dataSource);
    var index = tableData.findIndex((data) => data.itemId === item.itemId);
    calculateTotal(index);
  };
  const unitChange = (event, item) => {
    var index = tableData.findIndex((data) => data.itemId === item.itemId);
    setDataSource([...tableData, (tableData[index].unit = event.target.value)]);
    console.log('Table Data At Unit change', dataSource[index]);
  };
  const priceChange = (event, item) => {
    var index = tableData.findIndex((data) => data.itemId === item.itemId);
    setDataSource([...tableData, (tableData[index].price = +event.target.value)]);
    console.log('Table Data At price change', dataSource[index]);
    calculateTotal(index);
  };
  const calculateTotal = (i) => {
    let totalExcVat = tableData[i].price * tableData[i].quantity;
    let discount = (totalExcVat / 100) * tableData[i].discountPercentage;
    totalExcVat = totalExcVat - discount;
    let vatAmount = (tableData[i].vatPercentage / 100) * totalExcVat;
    let totalIncVat = totalExcVat + vatAmount
    setDataSource([...tableData,(tableData[i].totalPriceExcVat = totalExcVat),(tableData[i].totalPriceIncVat = totalIncVat)]);
    console.log('Table Data At Calculate change', dataSource[i]);
  };
  const quantityChange = (event, item) => {
    var index = tableData.findIndex((data) => data.itemId === item.itemId);
    setDataSource([
      ...tableData,
      (tableData[index].quantity = +event.target.value),
    ]);
    calculateTotal(index);
  };
  const discountChange = (event, item) => {
    var index = tableData.findIndex((data) => data.itemId === item.itemId);
    setDataSource([
      ...tableData,
      (tableData[index].discountPercentage = +event.target.value),
    ]);
    calculateTotal(index);
  };
  const deleteRow = (itemId) => {
    debugger
    const newData = dataSource.filter((item) => item.itemId !== itemId);
    setDataSource(newData);
  };
  const columns = [
    {
      title: 'Item',
      dataIndex: 'itemId',
      key: 'itemId',
      render: (itemName) => {
        return (
          <select onChange={handleChange}>
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
      render: (unit, item) => (
        <select value={unit} onChange={(e) => unitChange(e, item)}>
          {units.map((unit) => (
            <option value={unit}>{unit}</option>
          ))}
        </select>
      ),
    },
    {
      title: 'Cost Price',
      dataIndex: 'price',
      key: 'price',
      render: (price, item) => (
        <input
          type="text"
          value={price}
          onChange={(e) => {
            priceChange(e, item);
          }}
        />
      ),
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
      render: (quantity, item) => (
        <input
          type="text"
          value={quantity}
          onChange={(e) => {
            quantityChange(e, item);
          }}
        />
      ),
    },
    {
      title: 'Total/Exc VAT',
      dataIndex: 'totalPriceExcVat',
      key: 'totalPriceExcVat',
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
      render: (discountPercentage, item) => (
        <input
          type="text"
          value={discountPercentage ? discountPercentage : ''}
          onChange={(e) => {
            discountChange(e, item);
          }}
        />
      ),
    },
    {
      title: 'Total/Inc VAT', 
      dataIndex: 'totalPriceIncVat',
      key: 'totalPriceIncVat',
      render: (totalPriceIncVat, item) => (
        <Badge count={`-`} style={{ backgroundColor: '#FF0057' }}>
          <button onClick={(e) => deleteRow(item.itemId)}>
            {totalPriceIncVat}
          </button>
        </Badge>
      ),
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
