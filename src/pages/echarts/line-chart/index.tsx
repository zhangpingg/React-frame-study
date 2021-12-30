import React, { useMemo, useState, useCallback } from 'react';
import { Empty } from 'antd';
import ReactEcharts from 'echarts-for-react';
import { EChartsOption } from 'echarts';
import { COLORS } from '../constant'

interface IIndexProps {
  title?: string
  subtext?: string
  formatter?: string
  cssp?: any
  /** true:区域折线图、false:线条折线图 */
  isArea?: boolean
  xShaft?: string[]
  list?: { name: string, value: number }[]
}

const Index: React.FC<IIndexProps> = (props) => {
  const {
    title = '正标题',
    subtext = '副标题',
    formatter = '{b}: ({c}人)',
    cssp,
    isArea = false,
    xShaft = ['1月', '2月', '3月'],
    list = [
      { name: '名称1', data: [1, 2, 3] },
      { name: '名称2', data: [2, 3, 4] },
    ]
  } = props;

  const option = useMemo(() => {
    const _option: EChartsOption = {
      title: {
        text: title,
        subtext: subtext,
        left: 0,
        textStyle: {
          color: '#666',
          fontSize: 16
        }
      },
      tooltip: {
        trigger: 'axis',
        formatter: formatter,
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      legend: {
        data: list.map((item) => (item.name))
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: xShaft
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: list.map((item, index) => {
        const _obj: any = isArea ? (
          {
            areaStyle: {
              normal: {
                color: COLORS[index],
              }
            }
          }
        ) : {}
        return (
          {
            type: 'line',
            ..._obj,
            itemStyle: {            // 线条样式
              color: COLORS[index],
              borderColor: "#04d2f1",
              borderWidth: 3,
              shadowColor: 'rgba(0, 0, 0, .3)',
              shadowBlur: 0,
              shadowOffsetY: 2,
              shadowOffsetX: 2,
            },
            label: {
              formatter: formatter
            },
            ...item,
          }
        )
      })
    }
    return _option;
  }, [props])

  return (
    <React.Fragment>
      {
        !!(list?.length > 0) ? <ReactEcharts option={option} css={cssp} /> : <Empty />
      }
    </React.Fragment>
  )
}

export default Index