import { useCallback, useEffect } from 'react';
import { Button } from 'antd'
import Bus from './bus'
import Child from './child'

const Index = () => {
  /** 发送数据 */
  const emitData = useCallback(() => {
    Bus.emit('personInfo', { userName: '张三' })
  }, [])

  useEffect(() => {
    return () => {
      Bus.removeListener('personInfo');
    }
  }, [])

  return (
    <div>
      <h3>Bus</h3>
      <Button type='primary' onClick={() => { emitData() }}>主页面：发送数据</Button>
      <Child />
      <hr /> <br /><br />
    </div>
  )
}

export default Index;

