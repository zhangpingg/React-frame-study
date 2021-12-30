import React, { useRef, useCallback } from 'react';
import { Button } from 'antd'
import Child from './child'

interface IChildRefProps {
  getChildData: () => string
}

const Index: React.FC = () => {
  const num: number = 1;
  const childRef = useRef<IChildRefProps>()

  /** 获取子级数据2 */
  const getData = useCallback(() => {
    let _str = childRef.current?.getChildData()
    console.log(_str);
  }, [])

  return (
    <div>
      【ref】父级内容 <br />
      <Button type='primary' onClick={() => { getData() }}>按钮</Button>
      <Child num={num} ref={childRef} />
    </div>
  )
}

export default Index;