import React, { useState, useCallback } from 'react';
import { Cascader } from 'antd';

const Async = () => {
  const [options, setOptions] = useState([
    {
      key: '1',
      value: '1',
      label: '浙江',
      isLeaf: false,
    },
    {
      key: '2',
      value: '2',
      label: '安徽',
      isLeaf: false,
    },
  ])

  /** 获取数据 */
  const loadData = useCallback((selectedOptions) => {
    const targetOption = selectedOptions[selectedOptions.length - 1];
    targetOption.loading = true;
    setTimeout(() => {
      targetOption.loading = false;
      targetOption.children = [
        {
          key: '3',
          value: '3',
          label: `${targetOption.label} 孩子1`,
        },
        {
          key: '4',
          value: '4',
          label: `${targetOption.label} 孩子2`,
        },
      ];
      setOptions([...options])
    }, 1000);
  }, [])
  /** 切换数据 */
  const changeData = useCallback((value, selectedOptions) => {
    console.log('级联数据value：', value)
    console.log('级联数据选项：', selectedOptions)
  }, [])

  return (
    <Cascader
      options={options}
      loadData={loadData}
      onChange={changeData}
      changeOnSelect
    />
  )
}

export default Async;