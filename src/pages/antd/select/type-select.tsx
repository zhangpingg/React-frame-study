import React, { useCallback } from 'react';
import { OptionProps } from './interface'
import { Select } from 'antd';

interface TypeSelectProps {
  value?: string
  option: OptionProps[]
  onChange: (data: any) => void
}

const TypeSelect: React.FC<TypeSelectProps> = (props) => {
  /** 切换数据 */
  const onChange = useCallback((data) => {
    props.onChange(data)
  }, [])
  /** 输入内容搜索时 */
  const onSearch = useCallback(() => {
    console.log('根据输入内容，调用接口获取下拉列表')
  }, [])

  return (
    <Select
      //defaultValue="1"
      //labelInValue
      value={props.value}
      showSearch
      style={{ width: 200 }}
      placeholder="请选择"
      optionFilterProp="children"
      onChange={onChange}
      onSearch={onSearch}
      filterOption={(input, option) =>
        option?.props?.children?.toLowerCase?.().indexOf(input.toLowerCase()) >= 0
      }>
      {
        props?.option.map((item) => (
          <Select.Option key={item.key} value={item.key}>{item.value}</Select.Option>
        ))
      }
    </Select>
  )
}

export default TypeSelect;