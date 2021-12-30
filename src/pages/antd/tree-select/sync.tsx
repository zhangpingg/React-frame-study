import React, {useState, useCallback} from 'react'
import { TreeSelect } from 'antd';

const Sync = () => {
  const [treeValue, setTreeValue] = useState<string>('0-0-1')
  const [treeList, setTreeList] = useState([
    {
      title: '1节点',
      value: '0-0',
      key: '0-0',
      children: [
        {
          title: '3节点',
          value: '0-0-1',
          key: '0-0-1',
        },
        {
          title: '4节点',
          value: '0-0-2',
          key: '0-0-2',
        },
      ],
    },
    {
      title: '2节点',
      value: '0-1',
      key: '0-1',
    },
  ])

  /** 切换 tree */
  const changeTree = useCallback((data) => {
    console.log('同步treeSelect:', data)
    setTreeValue(data);
  }, [])

  return (
    <TreeSelect
      style={{ width: '200px'}}
      value={treeValue}
      // labelInValue
      dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
      treeData={treeList}
      placeholder="请选择"
      treeDefaultExpandAll
      onChange={changeTree}
    />
  )
}

export default Sync;