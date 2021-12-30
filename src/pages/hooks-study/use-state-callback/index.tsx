import React, { useCallback } from 'react'
import UseXState from './use-x-state'

const Index = () => {
  const [num, setNum] = UseXState(0)

  /** 增加数字 */
  const addNum = useCallback(() => {
    setNum((prev: any) => (++prev), () => {
      console.log(num)
    })
  }, [num])

  return (
    <div>
      【有问题】{num}
      <button onClick={addNum}>按钮</button>
    </div>
  )
}

export default Index;