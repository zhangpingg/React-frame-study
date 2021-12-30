import React, { useState, useCallback, useEffect } from 'react'
import { TreeSelect } from 'antd';

const Sync = () => {
  const [treeValue, setTreeValue] = useState<string>('')
  const [treeList, setTreeList] = useState([
    { key: 1, id: 1, pId: 0, value: '1', title: '1节点' },
    { key: 2, id: 2, pId: 0, value: '2', title: '2节点' },
    { key: 3, id: 3, pId: 0, value: '3', title: '3节点', isLeaf: true },
  ])
  /** 初始化数据 */
  const onLoadData = useCallback(async (treeNode) => {
    const _obj1 = { key: 4, id: 4, pId: 1, value: '4', title: '4节点', isLeaf: true }
    const _obj2 = { key: 5, id: 5, pId: 2, value: '5', title: '5节点' }
    if (treeNode.props.id == 1) {
      setTreeList((prev) => ([
        ...prev,
        _obj1
      ]))
    } else if (treeNode.props.id == 2) {
      setTreeList((prev) => ([
        ...prev,
        _obj2
      ]))
    }
  }, [])
  /** 切换 tree */
  const changeTree = useCallback((data) => {
    setTreeValue(data);
  }, [])

  useEffect(() => {
    console.log('异步treeSelect:', treeValue)
  }, [treeValue])

  return (
    <TreeSelect
      treeDataSimpleMode
      //labelInValue
      style={{ width: '200px' }}
      // value={treeValue}
      multiple
      dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
      placeholder="请选择"
      onChange={changeTree}
      loadData={onLoadData}
      treeData={treeList}
    />
  )
}

export default Sync;