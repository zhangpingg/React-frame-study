import React, { useCallback, useState } from "react";
import { useThrottle } from './use-throttle'

const Index = () => {
  const [value, setValue] = useState();

  /** 改变输入框 */
  const handleChange = useCallback((e) => {
    setValue(e.target.value)
  }, [])
  /** 节流函数 */
  useThrottle(() => {
    console.log('节流函数')
  }, 500, [value!]);

  return <input placeholder='节流事件' value={value} onChange={handleChange} />;
};

export default Index;