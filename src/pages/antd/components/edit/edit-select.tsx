import React, { useState, useCallback } from 'react';
import { Select } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { IfElseComponent } from '../condition-component'
import './style.less'

interface IProps {
  value: string | string[]
  options: { label: string, value: string }[]
  placeholder?: string
  emptyText?: string
  power?: boolean
  onSave: (data: any) => void
  showSearch?: boolean
  mode?: 'tags' | 'multiple'
}

const EditSelect: React.FC<IProps> = (props) => {
  const {
    placeholder = '请选择',
    emptyText = '无',
    power = true,
    mode = 'tags'
  } = props
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [value, setValue] = useState<string | string[]>(props.value)

  /** 光标离开事件 */
  const onBlur = useCallback(() => {
    if (!value || value === props.value!) {
      return
    }
    switch (mode) {
      case 'tags':
        props.onSave(value)
        break;
      case 'multiple':
        props.onSave(value)
        break;
    }
  }, [value, props.value, mode])
  /** 默认展示的内容 */
  const getDefaultConent = useCallback(() => {
    let _result = ''
    switch (mode) {
      case 'tags':
        _result = props.options.find((item) => item.value === props.value)?.label!
        break;
      case 'multiple':
        _result = props.options.filter((item) => (
          props.value.includes(item.value)
        )).map((item) => (
          item.label
        )).join(',')
        break;
    }
    return _result
  }, [mode, props])

  return (
    <div className='ES'>
      <IfElseComponent
        checked={isEdit}
        if={
          <Select
            autoFocus
            allowClear
            placeholder={placeholder}
            value={value}
            showSearch={props.showSearch}
            mode={props.mode}
            onChange={(v) => {
              setValue(v)
            }}
            onBlur={() => {
              setIsEdit(false)
              onBlur()
            }}
            filterOption={true}>
            {props.options.map((item) => (
              <Select.Option key={item.value} value={item.value}>
                {item.label}
              </Select.Option>
            ))}
          </Select>
        }
        else={
          <div className='EI-content' onClick={() => { power && setIsEdit(true) }}>
            {getDefaultConent() || emptyText}
            {power &&  <EditOutlined className='EI-content-icon' />}
          </div>
        }
      />
    </div>
  )
}

export default EditSelect