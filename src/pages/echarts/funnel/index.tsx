import React, { useMemo } from 'react';
import { Empty } from 'antd';
import ReactEcharts from 'echarts-for-react';
import { EChartsOption } from 'echarts';
import { COLORS } from '../constant'

interface IIndexProps {
  title?: string
  subtext?: string
  formatter?: string
  cssp?: any
  list?: { name: string, value: number }[]
}

const Index: React.FC<IIndexProps> = (props) => {
  const {
    title = '正标题',
    subtext = '副标题',
    formatter = '{b}: {d}% ({c}人)',
    cssp,
    list = [{ value: 10, name: '名称1' }, { value: 20, name: '名称2' }, { value: 30, name: '名称3' },],
  } = props;

  const option = useMemo(() => {
    const _option: EChartsOption = {
      title: {
        text: title,
        subtext: subtext,
        textStyle: {
          color: '#666',
          fontSize: 16
        }
      },
      color: COLORS,
      tooltip: {
        trigger: 'item',
        formatter: formatter
      },
      toolbox: {
        feature: {
          dataView: { readOnly: false },
          restore: {},
          saveAsImage: {}
        }
      },
      legend: {
        data: list.map((item) => (item.name))
      },
      series: [
        {
          name: '总类型',
          type: 'funnel',
          // width: '50%',             // 漏斗大小
          // height: '50%',
          data: list.map((item) => {
            return {
              ...item,
              label: {
                formatter: formatter
              },
            };
          }),
        }
      ]
    }
    return _option;
  }, [props])

  return (
    <div>
      {
        !!(list?.length > 0) ? <ReactEcharts option={option} css={cssp} /> : <Empty />
      }
    </div>
  )
}

export default Index;