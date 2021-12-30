import React, { useMemo, useState } from 'react';
import { Empty } from 'antd';
import ReactEcharts from 'echarts-for-react';
import { EChartsOption } from 'echarts';
import { COLORS } from '../constant'

interface IIndexProps {
  title?: string
  subtext?: string
  formatter?: string
  /** cssp={css`width:400px;`} */
  cssp?: any
  list?: { name: string, value: number }[]
}

const Index: React.FC<IIndexProps> = (props) => {
  const {
    title = '正标题',
    subtext = '副标题',
    formatter = '{b}: ({c}人日)',
    cssp,
    list = [{ value: 10, name: '名称1' }, { value: 20, name: '名称2' }, { value: 30, name: '名称3' },],
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
      xAxis: {                        // xAxis、yAxis 互换，即柱状图横向放置
        type: 'category',
        data: list.map((item) => (item.name))
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        barWidth: 20,
        label: {                      // 在柱状图顶部显示数目   
          show: true,
          position: 'top'
        },
        data: list.map((item, index) => {
          return {
            ...item,
            itemStyle: {
              color: COLORS[index],
            },
            label: {
              formatter: formatter,
            },
          };
        }),
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)'
        }
      }]
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

export default Index;