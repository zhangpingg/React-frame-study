import React, { useState, useCallback } from 'react';
import { Select } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { IfElseComponent } from '../condition-component'
import './style.less'

interface IProps {
  value: string[]
  placeholder?: string
  emptyText?: string
  power?: boolean
  onSave: (data: any) => void
}

const EditSelect: React.FC<IProps> = (props) => {
  const {
    placeholder = '请选择',
    emptyText = '无',
    power = true,
  } = props
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [value, setValue] = useState<string[]>(props.value)

  /** 光标离开事件 */
  const onBlur = useCallback(() => {
    if (!value || value === props.value!) {
      return
    }
    props.onSave(value)
  }, [value, props.value])

  return (
    <div className='ES'>
      <IfElseComponent
        checked={isEdit}
        if={
          <div>
            <Select
              autoFocus
              allowClear
              placeholder={placeholder}
              value={value}
              mode='tags'
              onChange={(v) => {
                setValue(v)
              }}
              onBlur={() => {
                setIsEdit(false)
                onBlur()
              }}>
            </Select>
          </div>
        }
        else={
          <div className='EI-content' onClick={() => { power && setIsEdit(true) }}>
            {value?.join(',') || emptyText}
            {power && <EditOutlined className='EI-content-icon' />}
          </div>
        }
      />
    </div>
  )
}

export default EditSelect