import React, { useEffect, useCallback, useRef } from 'react'
import { Button } from 'antd';
import './style.less'

const Index = () => {
  const stepRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  let myObserver:any = null

  /** 点击左右箭头，内容左右滚动 */
  const onScrollMove = useCallback((type: 'left' | 'right') => {
    if (containerRef.current) {
      switch (type) {
        case 'left':
          containerRef.current.scrollLeft = containerRef.current.scrollLeft - 50;
          break;
        case 'right':
          containerRef.current.scrollLeft = containerRef.current.scrollLeft + 50;
          break;
      }
    }
  }, [containerRef.current]);
  /** 初始化观察对象 */
  const initObserver = useCallback(() => {
    myObserver = new (window as any).ResizeObserver(() => {
      const rect = stepRef.current?.getBoundingClientRect();
      if (rect) {
        if (containerRef.current) {
          containerRef.current.scrollLeft = 10;
        }
      }
    })
    myObserver.observe(stepRef.current);
  }, [])

  useEffect(() => {
    initObserver()
    return () => {
      myObserver.disconnect();
    };
  }, [])

  return (
    <React.Fragment>
      <h3>解析 url</h3>
      <div ref={stepRef}>
        <div className='wrap' style={{ transform: `translateX(${0}px)`, overflow: 'auto' }} ref={containerRef}>
          <div className='wrap-content'>11</div>
        </div>
        <Button type='primary' onClick={() => onScrollMove('left')}>移动</Button>
        <Button type='primary' onClick={() => onScrollMove('right')}>移动</Button>
      </div>
      <hr /> <br /><br />
    </React.Fragment>
  )
}

export default Index