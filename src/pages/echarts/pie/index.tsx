import React, { useMemo, useCallback } from 'react';
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
  viewDetails?: (data:any) => void
}

const Index: React.FC<IIndexProps> = (props) => {
  const {
    title = '正标题',
    subtext = '副标题',
    formatter = '{b}: {d}% ({c}人日)',
    cssp,
    list = [{ value: 10, name: '名称1' }, { value: 20, name: '名称2' },],
    viewDetails
  } = props;

  const option = useMemo(() => {
    const _option:EChartsOption = {
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
        trigger: 'item',
        formatter: formatter
      },
      legend: {
        type: 'scroll',
        orient: 'horizontal',         // 图例列表的布局朝向。 'horizontal'  'vertical'
        // icon: 'circle',
        top: 0,
        itemWidth: 10,
        itemHeight: 10
      },
      series: [
        {
          type: 'pie',
          radius: '60%',              // 饼图大小
          center: ['50%', '50%'],     // 饼图位置
          selectedMode: 'single',
          data: list?.map((item, index) => {
            return {
              ...item,
              label: {
                formatter: formatter
              },
              itemStyle: {          // 方法2
                // color: COLORS[index]
              }
            };
          })
        }
      ]
    }
    return _option;
  }, [list])

  /** echarts 点击事件 */
  const clickEcharts = useCallback((data) => {
    console.log('饼图数据：', data);
    viewDetails?.(data);
  }, [])
  const onclick = {
    'click': clickEcharts.bind(null)
  }

  return (
    <React.Fragment>
      {
        !!(list?.length > 0) ? <ReactEcharts option={option} css={cssp} onEvents={onclick} /> : <Empty />
      }
    </React.Fragment>
  )
}

export default Index;