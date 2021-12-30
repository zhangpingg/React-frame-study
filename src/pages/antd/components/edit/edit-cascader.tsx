import React, { useState, useCallback } from 'react';
import { Cascader, CascaderProps } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { IfElseComponent } from '../condition-component'
import './style.less'
import { useUpdateEffect } from 'ahooks'

interface IProps extends CascaderProps {
  // value: string[]              // 已继承，这里不需要再写了
  // options: IOptionsItem
  // placeholder?: string
  label?: string[]
  emptyText?: string
  power?: boolean
  onSave: (data: any) => void
}

const EditCascader: React.FC<IProps> = (props) => {
  const {
    placeholder = '请选择',
    emptyText = '无',
    power = true,
  } = props
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [value, setValue] = useState<(string | number)[]>(props?.value!)

  /** 页面点击事件 */
  const clickDocument = useCallback((e) => {
    let _cascaderWrap = document.getElementById('cascaderWrap')
    let _isClickCascader = _cascaderWrap?.contains(e.target)
    if (isEdit && !_isClickCascader) {
      document.removeEventListener('click', clickDocument)
      setIsEdit(false)
      props.onSave(value)
    }
  }, [isEdit, props, value])
  /** 监听是编辑模式，增加监听页面点击事件 */
  useUpdateEffect(() => {
    if (isEdit) {
      document.addEventListener('click', clickDocument, false)
    }
  }, [isEdit])

  return (
    <div className='EC'>
      <IfElseComponent
        checked={isEdit}
        if={
          <div id='cascaderWrap'>
            <Cascader
              autoFocus
              allowClear
              options={props.options}
              placeholder={placeholder}
              value={value}
              getPopupContainer={(trigger) => trigger.parentElement!}
              onChange={(v) => {
                setValue(v)
              }}
            />
          </div>
        }
        else={
          <div className='EI-content' onClick={() => { power && setIsEdit(true) }}>
            {props.label?.join('/')} {value || emptyText}
            {power && <EditOutlined className='EI-content-icon' />}
          </div>
        }
      />
    </div>
  )
}

export default EditCascader