import { RefObject, useEffect, useState } from 'react';
import { off, on } from '../utils';

export const useHoverDirty = (ref: RefObject<Element>, enabled: boolean = true) => {
  if (process.env.NODE_ENV === 'development') {
    if (typeof ref !== 'object' || typeof ref.current === 'undefined') {
      console.error('useHoverDirty 需要一个 ref 元素');
    }
  }

  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    /** 鼠标移入事件 */
    const onMouseOver = () => setIsHover(true);
    /** 鼠标移出事件 */
    const onMouseOut = () => setIsHover(false);

    if (enabled && ref && ref.current) {
      on(ref.current, 'mouseover', onMouseOver);
      on(ref.current, 'mouseout', onMouseOut);
    }
    
    return () => {
      if (enabled && ref.current) {
        off(ref.current, 'mouseover', onMouseOver);
        off(ref.current, 'mouseout', onMouseOut);
      }
    };
  }, [enabled, ref]);

  return isHover;
};
