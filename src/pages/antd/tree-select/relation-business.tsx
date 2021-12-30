
import React, { useState, useMemo, useReducer, useEffect } from 'react'
import { Table, Button, Select, Input, TreeSelect } from 'antd'
import { usePersistFn, useUpdateEffect } from 'ahooks'

const treeData = [
  {
    title: 'Node1',
    value: '0-0',
    key: '0-0',
    children: [
      {
        title: 'Child Node1',
        value: '0-0-0',
        key: '0-0-0',
      },
    ],
  },
  {
    title: 'Node2',
    value: '0-1',
    key: '0-1',
    children: [
      {
        title: 'Child Node3',
        value: '0-1-0',
        key: '0-1-0',
      },
      {
        title: 'Child Node4',
        value: '0-1-1',
        key: '0-1-1',
      },
      {
        title: 'Child Node5',
        value: '0-1-2',
        key: '0-1-2',
      },
    ],
  },
];

const RelationBusiness = (props:any) => {
  const [business, setBusiness] = useState(['0-1-2'] || [])

  /** 切换 */
  const onChange = usePersistFn((data) => {
    console.log(11, data)
    setBusiness(data)
  })
  /** 父级不能点击 */
  const renderTreeByFatherDisable = usePersistFn((data) => {
    const _result = data.map((item:any) => {
      if (item.children && item.children.length) {
        item.disableCheckbox = true;
      }
      return item
    })
    return _result
  })

  useUpdateEffect(() => {
    props.onChange(business)
  }, [business])

  return (
    <TreeSelect
      treeData={renderTreeByFatherDisable(treeData)}
      showSearch
      style={{ width: '100%' }}
      value={business}
      dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
      placeholder="Please select"
      allowClear
      multiple
      treeDefaultExpandAll
      onChange={onChange}
      treeCheckable={true}
    />
  )
}

export default RelationBusiness
