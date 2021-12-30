import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { Radio, DatePicker } from 'antd';
import { ETimeType } from './constant'
import { ConditionComponent } from '../components/condition-component';

export interface TimeProps {
  timeType?: string
  startTime?: number
  endTime?: number
}
interface IndexProps {
  changeTime: (data: TimeProps) => void
  cssp?: any
}

const Index: React.FC<IndexProps> = (props) => {
  const [timeType, setTimeType] = useState<ETimeType>(ETimeType.this_month);
  const [startTime, setStartTime] = useState<number | undefined>(undefined);
  const [endTime, setEndTime] = useState<number | undefined>(undefined);

  // 切换-时间tab
  const changeTab = useCallback((e) => {
    const value = e.target.value;
    if (value !== ETimeType.custom) {
      setStartTime(undefined);
      setEndTime(undefined);
    }
    setTimeType(value);
  }, []);

  useEffect(() => {
    if (timeType == ETimeType.custom) {
      if (startTime && endTime) {
        props?.changeTime({ timeType, startTime, endTime })
      }
    } else {
      props?.changeTime({ timeType, startTime, endTime })
    }
  }, [timeType, startTime, endTime])


  return (
    <React.Fragment>
      <h2>tab选项卡</h2>
      <div css={[props?.cssp]} style={{height:'32px'}}>
        <Radio.Group
          value={timeType}
          onChange={(e) => { changeTab(e) }}
          className="header-tab">
          <Radio.Button value={ETimeType.this_month}>本月</Radio.Button>
          <Radio.Button value={ETimeType.this_quarter}>本Q</Radio.Button>
          <Radio.Button value={ETimeType.this_year}>本年</Radio.Button>
          <Radio.Button value={ETimeType.custom}>自定义</Radio.Button>
        </Radio.Group>
        <ConditionComponent isShow={timeType === ETimeType.custom}>
          <div className="custom-date-picker">
            <DatePicker.RangePicker
              placeholder={['起始月份', '结束月份']}
              showTime
              format="YYYY-MM-DD"
              onOk={(value) => {
                if (value && value[0] && value[1]) {
                  setStartTime(value[0].startOf('day').valueOf());
                  setEndTime(value[1].endOf('day').valueOf());
                }
              }}
            />
          </div>
        </ConditionComponent>
      </div>
      <div>内容</div>
      <hr />
    </React.Fragment>
  )
}

export default Index;