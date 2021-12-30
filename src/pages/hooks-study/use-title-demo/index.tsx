import React, { useCallback } from 'react'
import { useTitle } from './use-title'
import { Button } from 'antd'

const Index = () => {
  const [title, setTitle] = useTitle('初始化标题')

  /** 修改标题方式1 */
  const changeTitle1 = useCallback(() => {
    setTitle('标题1')
  }, [])
  /** 修改标题方式2 */
  const changeTitle2 = useCallback(() => {
    setTitle((prev:string) => (prev+'新'))
  }, [])

  return (
    <div>
      【标题内容：】{title}  <br />
      <Button type='primary' onClick={changeTitle1}>修改标题方式1</Button>
      <Button type='primary' onClick={changeTitle2}>修改标题方式2</Button>
    </div>
  )
}

export default Index;