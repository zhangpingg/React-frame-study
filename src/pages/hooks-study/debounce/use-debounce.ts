import { useCallback, useEffect, useRef } from "react";

const useTimeoutFn = (fn: Function, ms: number) => {
  const timeout: any = useRef();
  const callback = useRef(fn);

  /** 设置防抖 */
  const setDebounce = useCallback(() => {
    timeout.current && clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      callback.current();
    }, ms);
  }, [ms]);

  useEffect(() => {
    setDebounce();
    return timeout && clearTimeout(timeout.current);;
  }, [ms, setDebounce]);

  return [setDebounce];
};

export const useDebounce = (fn: Function, ms = 0, deps = []) => {
  const [reset] = useTimeoutFn(fn, ms);
  useEffect(reset, deps);
};

