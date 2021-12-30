import React, { useState, useMemo } from 'react';
import { Table } from 'antd';

const Index = () => {
  const columns = useMemo(() => {
    const list: any = [
      {
        title: '成员名称',
        dataIndex: 'a',
        key: 'a',
        align: 'center',
      },
      {
        title: '定制项目',
        children: [
          {
            title: '工作量（单位：人日）',
            dataIndex: 'b',
            key: 'b',
            align: 'center',
          },
          {
            title: '项目总量',
            dataIndex: 'c',
            key: 'c',
            align: 'center',
          },
        ],
      },
      {
        title: '内置项目',
        align: 'center',
        children: [
          {
            title: '工作量（单位：人日）',
            dataIndex: 'd',
            key: 'd',
            align: 'center',
          },
          {
            title: '项目总量',
            dataIndex: 'e',
            key: 'e',
            align: 'center',
          },
        ],
      },
      {
        title: '饱和度',
        dataIndex: 'f',
        key: 'f',
        align: 'center',
      },
    ];
    return list
  }, [])
  const [data, setTableData] = useState([
    {
      key: 1,
      a: '张三',
      b: 1,
      c: 2,
      d: 3,
      e: 4,
      f: 5,
    },
    {
      key: 2,
      a: '张三',
      b: 1,
      c: 2,
      d: 3,
      e: 4,
      f: 5,
    }
  ])

  return (
    <div>
      <h2>table 表头合并</h2>
      <Table
        columns={columns}
        dataSource={data}
        bordered
      />
      <hr />
    </div>
  )
}

export default Index