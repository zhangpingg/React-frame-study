import React, { useState, useMemo, useEffect, useContext } from 'react';
import { Table, Input, Button } from 'antd';
import { useUpdateEffect, usePersistFn } from 'ahooks'
import { TableContext } from './context'

/** 列表-年龄 */
const RenderAge: React.FC<{ record: any, listMapper:any, onChange: (typeId:any, v:any) => void }> = (props) => {
  return (
    <Input
      value={props.listMapper[props.record.typeId]?.age}
      placeholder={'备注'}
      onChange={(e) => {
        props.onChange(props.record.typeId, e.target.value );
      }}
      maxLength={250}
    />
  )
}
/** 列表-备注 */
const RenderRemark: React.FC<{ record: any }> = (props) => {
  const context = useContext(TableContext)!
  const _key = `${props.record.id}_remark`;

  return (
    <Input
      value={context.values[_key]}
      placeholder={'备注'}
      onChange={(e) => {
        context.onChange({ [_key]: e.target.value });
      }}
      maxLength={250}
    />
  )
}

const Index = () => {
  const data = [
    {
      id: 1,
      typeId: '11',
      type: '老师',
      name: '张三',
      age: 10,
      remark: 'remark1',
    },
    {
      id: 2,
      typeId: '11',
      type: '老师',
      name: '李四',
      age: 11,
      remark: 'remark2',
    },
    {
      id: 3,
      typeId: '22',
      type: '学生',
      name: '王五',
      age: 12,
      remark: 'remark3',
    }
  ]
  const [list, setList] = useState([])
  const [listMapper, setListMapper] = useState<any>({})
  const [values, setValues] = useState({})

  /** 列头 */
  const columns = useMemo(() => {
    return [
      {
        key: 'type',
        dataIndex: 'type',
        title: '分类',
        render: (v: any, record: any): any => {
          return {
            children: v,
            props: {
              rowSpan: record.rowSpan,
            }
          }
        }
      },
      {
        key: 'name',
        dataIndex: 'name',
        title: '姓名',
      },
      {
        key: 'age',
        dataIndex: 'age',
        title: '年龄',
        width: '200px',
        render: (v: any, record: any): any => {
          return {
            children: <RenderAge record={record} listMapper={listMapper} onChange={changeAge} />,
            props: {
              rowSpan: record.rowSpan,
            }
          }
        }
      },
      {
        key: 'remark',
        dataIndex: 'remark',
        title: '备注',
        width: '200px',
        render: (v: any, record: any) => <RenderRemark record={record} />,
      },
      {
        title: '操作',
        dataIndex: 'operation',
        key: 'operation',
        width: '100px',
        render: (v: any, record: any) => <Button type='primary' ghost onClick={() => onSave(record.id)}>保存</Button>,
      },
    ]
  }, [listMapper])
  /** 合并单元格 */
  const mergeCellSortListRowspanByTypeId = usePersistFn((list) => {
    /** 分类 Map */
    // {11: {count: 2, selected: false}, 22:{count: , selected: false}}
    const typeIdMap = list.reduce((prev: any, curr: any) => {
      if (prev[curr.typeId]) {
        prev[curr.typeId].count += 1
      } else {
        prev[curr.typeId] = {
          count: 1,
          selected: false,
        }
      }
      return prev;
    }, {});

    /** 列表 Map */
    const listMap: any = {};
    const newList = list.map((item: any) => {
      if (!!listMap[item.typeId]) {

      } else {
        if (!!listMapper[item.typeId]) {
          listMap[item.typeId] = listMapper[item.typeId];     // 防止删除，需要有值在赋值给新对象
        } else {
          listMap[item.typeId] = { ...item }
        }
      }
      if (typeIdMap[item.typeId].selected) {
        return {
          ...item,
          rowSpan: 0,
        };
      } else {
        typeIdMap[item.typeId].selected = true;
        return {
          ...item,
          rowSpan: typeIdMap[item.typeId].count,
        };
      }
    }, []).sort((a: any, b: any) => a.typeId - b.typeId);
    /** 把数据设置到 values 中 */
    let _list = newList.map((item: any) => {
      setValues((prev) => {
        let _prev: any = { ...prev }
        _prev[`${item.id}_remark`] = item.remark;   // 备注
        return _prev
      })
      return item
    })
    setListMapper(listMap)
    return _list
  })
  /** change 事件 */
  const onChange = usePersistFn((data) => {
    setValues((prev) => ({ ...prev, ...data }))
  })
  /** 修改年龄 */
  const changeAge = usePersistFn((typeId, v) => {
    setListMapper((prev:any) => {
      return ({...prev, ...{[typeId]: {...prev[typeId], ...{age: v}}}})
    })
  })
  /** 保存事件 */
  const onSave = usePersistFn((id) => {
    console.log(11, id)
    console.log(11, list)
    console.log(22, listMapper)
    console.log(33, values)
  })
  /** 追加老师 */
  const pushTeacher = usePersistFn(() => {
    const _item: any = [{ id: 4, typeId: '11', type: '老师', name: '赵六', age: 50, remark: 'remark_4' }]
    setList(mergeCellSortListRowspanByTypeId([...list, ..._item]))
  })
  /** 追加学生 */
  const pushStudent = usePersistFn(() => {
    const _item: any = [{ id: 5, typeId: '22', type: '学生', name: '王七', age: 18, remark: 'remark_5' }]
    setList(mergeCellSortListRowspanByTypeId([...list, ..._item]))
  })
  /** 追加教授 */
  const pushProfessor = usePersistFn(() => {
    const _item: any = [{ id: 6, typeId: '33', type: '教授', name: '钱八', age: 60, remark: 'remark_6' }]
    setList(mergeCellSortListRowspanByTypeId([...list, ..._item]))
  })
  /** 全部保存 */
  const allSave = usePersistFn(() => {
    console.log(11, list)
    console.log(22, listMapper)
    console.log(33, values)
  })

  useEffect(() => {
    setList(mergeCellSortListRowspanByTypeId(data))
  }, [])

  return (
    <div>
      <h2>table 单元格合并</h2>
      <div>
        <TableContext.Provider value={{
          values: values,
          onChange: onChange,
          onSave: onSave
        }}>
          <Table
            rowKey={'id'}
            columns={columns}
            dataSource={list}
            bordered
          />
          <Button type='primary' onClick={pushTeacher}>追加老师</Button>
          <Button type='primary' onClick={pushStudent}>追加学生</Button>
          <Button type='primary' onClick={pushProfessor}>追加教授</Button>
          <Button type='primary' onClick={allSave}>总保存</Button>
        </TableContext.Provider>
      </div>
      <hr />
    </div >
  )
}

export default Index