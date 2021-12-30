import React, { useCallback, useState, useEffect } from 'react';
import { Cascader, CascaderProps } from 'antd';

interface IOrgTreeProps extends Omit<CascaderProps, 'options'> {
  orgId: number | string
  cssp?: any
}
interface IOptionsProps {
  key: number | string
  value: number | string
  label: string
  children?: IOptionsProps[]
}

const OrgTree: React.FC<IOrgTreeProps> = (props) => {
  const { orgId, cssp,  ...lastProps } = props;
  const [options, setOptions] = useState<IOptionsProps[]>([])

  /** 获取级联下来列表 */
  const getOptions = useCallback(() => {
    // 根据 orgId 获取接口数据...
    const _list: IOptionsProps[] = [
      {
        key: '1',
        value: '1',
        label: '浙江省',
        children: [
          {
            key: '2',
            value: '2',
            label: '杭州市',
            children: [
              {
                key: '3',
                value: '3',
                label: '滨江区',
              },
            ],
          },
        ],
      },
      {
        key: '10',
        value: '10',
        label: '安徽省',
        children: [
          {
            key: '11',
            value: '11',
            label: '黄山市',
          }
        ]
      }
    ]
    setOptions(_list);
  }, [orgId])

  useEffect(() => {
    if (orgId) {
      getOptions()
    }
  }, [orgId])

  return (
    <Cascader
      css={cssp}
      expandTrigger="hover"
      options={options}
      changeOnSelect
      {...lastProps}
    />
  )
}

export default OrgTree;