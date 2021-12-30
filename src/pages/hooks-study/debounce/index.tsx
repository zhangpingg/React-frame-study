import React, { useCallback, useState } from "react";
import { useDebounce } from './use-debounce'

const Index = () => {
  const [value, setValue] = useState();

  /** 改变输入框 */
  const handleChange = useCallback((e) => {
    setValue(e.target.value)
  }, [])
  /** 防抖函数 */
  useDebounce(() => {
    console.log('防抖函数')
  }, 500, [value!]);

  return <input placeholder='防抖事件' value={value} onChange={handleChange} />;
};

export default Index;