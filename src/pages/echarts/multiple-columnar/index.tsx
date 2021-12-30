import React, { useMemo, useState } from 'react';
import { Empty } from 'antd';
import Echarts from 'echarts-for-react';
import { EChartsOption } from 'echarts';
import { COLORS } from '../constant'

interface IIndexProps {
  title?: string
  subtext?: string
  formatter?: string
  /** cssp={css`width:400px;`} */
  cssp?: any
  xAxis?: string[]
  list?: { name: string, data: number[] }[]
}

const Index: React.FC<IIndexProps> = (props) => {
  const {
    title = '',
    subtext = '',
    formatter = '{b}: ({c}人日)',
    cssp,
    xAxis = ['1月', '2月'],
    list = [
      {
        name: '标题1',
        data: [320, 332, 301, 334, 390],
      },
      {
        name: '标题2',
        data: [23, 32, 341, 354, 90],
      },
    ],
  } = props;

  const option = useMemo(() => {
    const _option: EChartsOption = {
      title: {                          // 顶部标题
        text: title,
        subtext: subtext,
        left: 0,
        textStyle: {
          color: '#666',
          fontSize: 16
        }
      },
      grid: {                     // 整体位置定位
        containLabel: true,         // 容器true，下面定位才有效
        top: '10%',
        left: '10%',
        right: '5%',
        bottom: '5%'
      },
      tooltip: {
        trigger: 'item',
        formatter: formatter
      },
      legend: {
        data: list.map((item) => { return item.name })
      },
      xAxis: {                        // xAxis、yAxis 互换，即柱状图横向放置
        type: 'category',
        data: xAxis,
      },
      yAxis: {
        type: 'value'
      },
      series: list.map((item, index) => {
        return {
          name: item.name,
          barWidth: 20,
          color: COLORS[index],
          type: 'bar',
          label: {
            show: true,
            position: 'top'
          },
          emphasis: {
            focus: 'series'
          },
          data: item.data
        }
      }),
    }
    return _option;
  }, [props])


  return (
    <React.Fragment>
      {
        !!(list?.length > 0) ? <Echarts option={option} css={cssp} /> : <Empty />
      }
    </React.Fragment>
  )
}
export default Index