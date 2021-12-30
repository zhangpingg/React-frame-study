import React, { useState, useCallback } from 'react';
import { Select } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { IfElseComponent } from '../condition-component'
import './style.less'

interface IOptionsItem {
  label: string
  value: string
}

interface IProps {
  value: { label: string, value: string }
  placeholder?: string
  emptyText?: string
  power?: boolean
  onSave: (data: any) => void
}

const EditSelectUser: React.FC<IProps> = (props) => {
  const {
    placeholder = '请选择',
    emptyText = '无',
    power = true,
  } = props
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [value, setValue] = useState<string>()
  const [options, setOptions] = useState<IOptionsItem[]>([])

  /** 输入内容搜索 */
  const onSearch = useCallback((v) => {
    let _list = [
      { label: '选择1', value: '1' },
      { label: '选择11', value: '11' },
      { label: '选择111', value: '111' },
    ]
    setOptions(_list)
  }, [])
  /** 光标离开事件 */
  const onBlur = useCallback(() => {
    if (!value || value === props.value?.value) {
      return
    }
    let _item = options.find((item) => (value === item.value))
    props.onSave(_item)
  }, [value, props, options])

  return (
    <div className='ES'>
      <IfElseComponent
        checked={isEdit}
        if={
          <div>
            <Select
              autoFocus
              allowClear
              placeholder={props.value?.label || placeholder}
              value={value}
              showSearch
              onSearch={onSearch}
              onChange={(v) => {
                console.log(99,v)
                setValue(v)
              }}
              onBlur={() => {
                setIsEdit(false)
                onBlur()
              }}>
              {options.map((item) => (
                <Select.Option key={item.value} value={item.value!}>
                  {item.label}
                </Select.Option>
              ))}
            </Select>
          </div>
        }
        else={
          <div className='EI-content' onClick={() => { power && setIsEdit(true) }}>
            {props.value?.label || emptyText}
            {power && <EditOutlined className='EI-content-icon' />}
          </div>
        }
      />
    </div>
  )
}

export default EditSelectUser