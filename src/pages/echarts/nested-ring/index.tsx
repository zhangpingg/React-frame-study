import React, { useMemo, useCallback } from 'react';
import ReactEcharts from 'echarts-for-react';
import { Empty } from 'antd';
import { EChartsOption } from 'echarts';
import { COLORS } from '../constant'

interface IIndexProps {
  title?: string
  subtext?: string
  formatter?: string
  cssp?: any
  xShaft?: string[]
  pieList?: { name: string, value: number }[]
  ringList?: { name: string, value: number }[]
  viewDetails?: (data:any) => void
}

const Index: React.FC<IIndexProps> = (props) => {
  const {
    title = '正标题',
    subtext = '副标题',
    formatter = '{b}: ({c}人)',
    cssp,
    xShaft = ['1月', '2月', '3月'],
    pieList = [
      { value: 10, name: '名称1' },
      { value: 20, name: '名称2' },
      { value: 30, name: '名称3' },
    ],
    ringList = [
      { value: 20, name: '名称3' },
      { value: 30, name: '名称4' },
      { value: 40, name: '名称5' },
      { value: 50, name: '名称6' },
    ]
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
      tooltip: {
        trigger: 'item',
        formatter: formatter,
      },
      legend: {
        data: [...pieList!, ...ringList!].map((item) => (item.name))
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          selectedMode: 'single',
          radius: [0, '30%'],
          label: {
            position: 'inner',
            fontSize: 14,
          },
          labelLine: {
            show: false
          },
          data: pieList.map((item, index) => ({
            itemStyle: {            // 线条样式
              color: COLORS[index],
              borderWidth: 3,
              shadowColor: 'rgba(0, 0, 0, .3)',
              shadowBlur: 0,
              shadowOffsetY: 2,
              shadowOffsetX: 2,
            },
            ...item
          })),
        },
        {
          name: '访问来源',
          type: 'pie',
          radius: ['45%', '60%'],
          labelLine: {
            length: 30,
          },
          label: {
            formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
            backgroundColor: '#F6F8FC',
            borderColor: '#8C8D8E',
            borderWidth: 1,
            borderRadius: 4,
            rich: {
              a: {
                color: '#6E7079',
                lineHeight: 22,
                align: 'center'
              },
              hr: {
                borderColor: '#8C8D8E',
                width: '100%',
                borderWidth: 1,
                height: 0
              },
              b: {
                color: '#4C5058',
                fontSize: 14,
                fontWeight: 'bold',
                lineHeight: 33
              },
              per: {
                color: '#fff',
                backgroundColor: '#4C5058',
                padding: [3, 4],
                borderRadius: 4
              }
            }
          },
          data: ringList.map((item, index) => ({
            itemStyle: {            // 线条样式
              color: COLORS[index],
              borderWidth: 3,
              shadowColor: 'rgba(0, 0, 0, .3)',
              shadowBlur: 0,
              shadowOffsetY: 2,
              shadowOffsetX: 2,
            },
            ...item
          })),
        }
      ]
    }
    return _option;
  }, [props])

  /** echarts 点击事件 */
  const clickEcharts = useCallback((data) => {
    props?.viewDetails?.(data);
  }, [props?.viewDetails])
  const onclick = {
    'click': clickEcharts.bind(null)
  }

  return (
    <React.Fragment>
      {
        !!(pieList?.length > 0 && ringList?.length > 0) ? <ReactEcharts option={option} css={cssp} onEvents={onclick} /> : <Empty />
      }
    </React.Fragment>
  )
}

export default Index;