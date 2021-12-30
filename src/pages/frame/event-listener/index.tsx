import React, { useCallback } from 'react';
import { Button } from 'antd'
import { useEventListener } from './utils/hooks'

const Index = () => {
  const clickHandler = useCallback((e: MouseEvent) => {
    console.log(e)
    console.log('触发点击事件')
  }, []);

  useEventListener('click', clickHandler, document);

  return (
    <div>
      <h3>监听事件</h3>
      <Button type='primary'>点击事件</Button>
      <p>内容</p> 
      <hr /><br /><br />
    </div>
  )
}

export default Index;