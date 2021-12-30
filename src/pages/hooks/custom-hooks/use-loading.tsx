import { useCallback, useState } from "react";

/** 加载状态 */
export const useLoading = (initFlag: boolean = false) => {
  const [flag, setFlag] = useState(initFlag)

  const changeValue = useCallback((prev) => {
    setFlag(prev);
  }, [flag])

  return [flag, changeValue] as [boolean, (flag:boolean)=> void];
}