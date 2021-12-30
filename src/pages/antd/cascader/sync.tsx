import React, { useMemo, useCallback } from 'react';
import { Cascader } from 'antd';

const Sync = () => {
  const options = useMemo(() => {
    return [
      {
        key: '1',
        value: '1',
        label: '浙江省',
        children: [
          {
            key: '1-1',
            value: '1-1',
            label: '杭州市',
            children: [
              {
                key: '1-1-1',
                value: '1-1-1',
                label: '滨江区',
              },
            ],
          },
        ],
      },
    ]
  }, [])

  /** 切换数据 */
  const changeData = useCallback((data, option) => {
    // options: 可以拿到整个 option 数据（{label, vlaue}）
    console.log('级联数据', data, option)
  }, [])

  return (
    <Cascader
      // fieldNames={{ label: 'name', value: 'code' }}
      options={options}
      onChange={changeData}
      placeholder="请选择"
    />
  )
}

export default Sync;