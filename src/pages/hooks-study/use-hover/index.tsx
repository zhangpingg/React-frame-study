import { useRef } from 'react';
import { useHoverDirty } from './useHover';

const Index = () => {
  const textRef = useRef(null);
  const isHovered = useHoverDirty(textRef);

  return (
    <div ref={textRef}>
      {isHovered ? '鼠标移入' : '鼠标移出'}
    </div>
  )
}

export default Index;