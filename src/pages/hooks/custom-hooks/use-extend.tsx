// 示例：
// const [personInfo, setPersonInfo] = useExtend({ name: '张三' });
// setPersonInfo({age: 1})
// setPersonInfo((prev:any) => ({...prev, age:(Math.random()*100).toFixed(0)}))


import { useCallback, useState } from "react";

/** 数据扩展 */
export const useExtend = (initObj: any) => {
  const [obj, setObj] = useState(initObj)

  const extendObj = useCallback((data) => {
    if(typeof data == 'function'){
      setObj(data());
    }else{
      setObj(data)
    }
   
  }, [obj])

  return [obj, extendObj] as [any, (obj:any)=> void];
}