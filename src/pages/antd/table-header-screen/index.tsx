import React, { useState, useMemo, useCallback, useContext } from 'react';
import { Table, DatePicker, Button } from 'antd';
import {ZoomOutOutlined} from '@ant-design/icons'

const Index = () => {
  const columns: any = [
    {
      title: 'Name',
      dataIndex: 'name',
      filters: [
        {
          text: 'Joe',
          value: 'Joe',
        },
        {
          text: 'Jim',
          value: 'Jim',
        },
        {
          text: 'Submenu',
          value: 'Submenu',
          children: [
            {
              text: 'Green',
              value: 'Green',
            },
            {
              text: 'Black',
              value: 'Black',
            },
          ],
        },
      ],
      onFilter: (value: string, record: any) => record.name.indexOf(value) === 0,
      sortDirections: ['descend'],
    },
    {
      title: 'Age',
      dataIndex: 'age',
      defaultSortOrder: 'descend',
      sorter: (a: { age: number }, b: { age: number }) => a.age - b.age,
    },
    {
      title: 'Address',
      dataIndex: 'address',
      filterDropdown: () => (
        <div>
          <div>
            <DatePicker.RangePicker />
          </div>
          <Button type='primary'>确定</Button>
        </div>
      ),
      filterIcon: () => <ZoomOutOutlined />,
    },
  ];
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 2,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 1,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 4,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '4',
      name: 'Jim Red',
      age: 3,
      address: 'London No. 2 Lake Park',
    },
  ]

  /** 切换筛选条件 */
  const onChange = useCallback((pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  }, [])

  return (
    <div>
      <h2>table 表头筛选</h2>
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </div>
  )
}

export default Index;