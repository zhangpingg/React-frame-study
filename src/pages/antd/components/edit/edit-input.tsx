import React, { useState, useCallback } from 'react';
import { Input } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { IfElseComponent } from '../condition-component'
import './style.less'

interface IProps {
  value: string
  placeholder?: string
  emptyText?: string
  power?: boolean
  onSave: (data: any) => void
}

const EditInput: React.FC<IProps> = (props) => {
  const {
    placeholder = '请输入',
    emptyText = '无',
    power = true,
  } = props
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [value, setValue] = useState<string>(props.value)

  /** 光标离开事件 */
  const onBlur = useCallback(() => {
    if (!value || value === props.value) {
      setValue(props.value!)
      return
    }
    props.onSave(value)
  }, [value, props.value])

  /** 无权限时 */
  if (!power) {
    return <p>{value}</p>
  }

  return (
    <div className='EI'>
      <IfElseComponent
        checked={isEdit}
        if={(
          <Input
            autoFocus
            allowClear
            placeholder={placeholder}
            value={value}
            onChange={(e) => {
              setValue(e?.target?.value)
            }}
            onBlur={() => {
              setIsEdit(false)
              onBlur()
            }}
            onPressEnter={() => {
              setIsEdit(false)
              onBlur()
            }}
          />
        )}
        else={(
          <div className='EI-content' onClick={() => { setIsEdit(true) }}>
            {value || emptyText}
            <EditOutlined className='EI-content-icon' />
          </div>
        )}
      />
    </div>
  )
}

export default EditInput