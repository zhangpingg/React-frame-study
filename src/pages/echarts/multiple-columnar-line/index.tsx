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
  yAxis?: { name: string, position: any, offset: number, formatter: string }[]
  list?: any
}

const Index: React.FC<IIndexProps> = (props) => {
  const {
    title = '标题',
    subtext = '副标题',
    formatter = '{b}: ({c}人日)',
    cssp,
    xAxis = ['1月', '2月', '3月', '4月', '5月'],
    yAxis = [
      {
        name: '标题1',
        position: 'right',
        offset: 0,
        formatter: '{value} ml',
        data: [3, 2, 1, 4, 9],
      },
      {
        name: '标题2',
        position: 'right',
        offset: 60,
        formatter: '{value} ml',
        data: [3, 3, 7, 5, 2],
      },
      {
        name: '标题3',
        position: 'left',
        offset: 0,
        formatter: '{value} °C',
        data: [1, 3, 7, 1, 4],
      },
      {
        name: '标题4',
        position: 'left',
        offset: 60,
        formatter: '{value} °C',
        data: [5, 3, 6, 4, 1],
      },
    ],
    list = [
      {
        name: '标题1',
        type: 'bar',
        data: [3, 2, 1, 4, 9],
      },
      {
        name: '标题2',
        type: 'bar',
        yAxisIndex: 1,
        data: [3, 3, 7, 5, 2],
      },
      {
        name: '标题3',
        type: 'line',
        yAxisIndex: 2,
        data: [1, 3, 7, 1, 4],
      },
      {
        name: '标题4',
        type: 'line',
        yAxisIndex: 3,
        data: [5, 3, 6, 4, 1],
      }
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
      color: COLORS,
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross'
        }
      },
      grid: {
        right: '20%'
      },
      toolbox: {
        feature: {
          dataView: { show: true, readOnly: false },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      legend: {
        data: list.map((item: any) => { return item.name })
      },
      xAxis: [
        {
          type: 'category',
          axisTick: {
            alignWithLabel: true
          },
          data: xAxis,
        }
      ],
      yAxis: yAxis.map((item, index) => ({
        type: 'value',
        name: item.name,
        min: 0,
        position: item.position,
        offset: item.offset,
        axisLine: {
          show: true,
          lineStyle: {
            color: COLORS[index]
          }
        },
        axisLabel: {
          formatter: item.formatter
        }
      })),
      series: list,
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