import React, { useState, useCallback } from 'react';
import { OptionProps } from './interface'
import TypeSelect from './type-select'

const Index = () => {
  const [option, setOption] = useState<OptionProps[]>([
    { key: '1', value: '类型1' },
    { key: '2', value: '类型2' },
    { key: '3', value: '类型3' },
  ])

  /** 切换类型下拉列表 */
  const changeType = useCallback((data) => {
    console.log('下拉框选中：', data);
  }, [])

  return (
    <div>
      <h2>下拉选择器</h2>
      <TypeSelect value={'2'} option={option} onChange={changeType} />
      <hr />
    </div>
  )
}

export default Index;