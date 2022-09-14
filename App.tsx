import * as React from 'react';
import './style.css';
import 'antd/dist/antd.css';
import { Avatar, Badge } from 'antd';
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
    totalPriceExc: null,
  },
];
export default function App() {
  const [dataSource, setDataSource] = React.useState([]);
  React.useEffect(() => {
    setDataSource(tableData);
  });
  const handleChange = (event) => {
    var item: any = items.find((item) => item.itemId === +event.target.value);
    tableData.unshift({ ...item, totalPriceExc: item.quantity * item.price });
    setDataSource([...tableData, item]);
    var index = tableData.findIndex((data) => data.itemId === item.itemId);
    calculateTotal(index);
  };
  const unitChange = (event, item) => {
    var index = tableData.findIndex((data) => data.itemId === item.itemId);
    setDataSource([...tableData, (tableData[index].unit = event.target.value)]);
  };
  const priceChange = (event, item) => {
    var index = tableData.findIndex((data) => data.itemId === item.itemId);
    setDataSource([
      ...tableData,
      (tableData[index].price = +event.target.value),
    ]);
    calculateTotal(index);
  };
  const calculateTotal = (i) => {
    console.log(tableData[i].totalPriceExc)
    var total = tableData[i].price * tableData[i].quantity
    var discountValue = (total *tableData[i].discountPercentage) /100;
    total = total - discountValue
    setDataSource([...tableData, tableData[i].totalPriceExc=total]);
    console.log(tableData[i].totalPriceExc)
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
  const deleteRow = (event, item) => {
    var newTableData = tableData.filter((item) => item.itemId != item.itemId);
    setDataSource(newTableData);
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
      dataIndex: 'totalPriceExc',
      key: 'totalPriceExc',
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
          value={discountPercentage}
          onChange={(e) => {
            discountChange(e, item);
          }}
        />
      ),
    },
    {
      title: 'Total/Inc VAT',
      dataIndex: 'totalPriceExc',
      key: 'totalPriceExc',
      render: (itemId, item) => (
        <Badge count={`-`} style={{ backgroundColor: '#FF0057' }}>
          <button onClick={(e) => deleteRow(e, item)}>Delete</button>
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
