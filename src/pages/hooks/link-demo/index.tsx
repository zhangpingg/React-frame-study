import React, {useCallback} from 'react'
import { Button } from 'antd'
import {useLink} from '../custom-hooks/use-link'

const Index = (props:any) => {
  const router = useLink()

  /** 跳转页面 */
  const goDetails = useCallback(() => {
    router.push(`/frame/index?code=1`);
  }, [])

  return (
    <React.Fragment>
      <h3>【link 跳转】</h3>
      <Button type='primary' onClick={goDetails}>frame 首页</Button>
    </React.Fragment>
  )
}

export default Index;