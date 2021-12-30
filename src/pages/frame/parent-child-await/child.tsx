import { useCallback } from 'react';
import {Button} from 'antd'

interface IChildProps {
  addTask: (data:any) => Promise<boolean>
}

const Child:React.FC<IChildProps> = (props) => {
  /** 添加任务 */
  const addTask = useCallback(async () => {
    const res = await props.addTask(1)
    console.log(res);         // 用于关闭弹框、提示语等操作

    // if(props.type === 1){
    //   props.onOk1?.()
    // }else if(props.type === 2){
    //   props.onOk2?.()
    // }
  }, [])

  return (
    <div>
      <Button type='primary' onClick={addTask}>子组件添加任务</Button>
    </div>
  )
}

export default Child;