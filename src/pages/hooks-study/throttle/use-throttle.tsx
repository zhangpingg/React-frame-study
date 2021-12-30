import React, { useCallback, useEffect, useRef } from "react";

const useTimeoutFn = (fn:Function, ms:number) => {
  const timeout:any = useRef();
  const callback = useRef(fn);

  /** 设置节流 */
  const setThrottle = useCallback(() => {
    if (!timeout.current) {
      timeout.current = true;
      timeout.current = setTimeout(() => {
        timeout.current = null;
        callback.current();
      }, ms);
    }
  }, [ms]);

  /** 清除定时器 */
  const clearThrottle = useCallback(() => {
    timeout.current && clearTimeout(timeout.current);
  }, []);

  useEffect(() => {
    setThrottle();
    return clearThrottle;
  }, [ms]);

  return {setThrottle, clearThrottle };
};

export const useThrottle = (fn:Function, ms = 0, deps = []) => {
  const { setThrottle } = useTimeoutFn(fn, ms);

  useEffect(setThrottle, deps);
};
