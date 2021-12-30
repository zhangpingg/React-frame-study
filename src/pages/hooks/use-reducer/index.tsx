import React, { useReducer, useCallback } from 'react'
import {Button} from 'antd'

interface IPersonObjProps {
  name?: string
  age?: number,
  sex?: '女' | '男',
  grade?: string
}

const Index = () => {
  const [personObj, dispatchPersonObj]: [IPersonObjProps, Function] = useReducer((prev: IPersonObjProps, data: IPersonObjProps) => (
    { ...prev, ...data }), { name: '张三', age: 10 }
  );

  // 添加—用户信息
  const addPersonInfo = useCallback(() => {
    let _info = { sex: '女', grade: '三年级' };
    dispatchPersonObj(_info);
  }, [])

  return (
    <div>
      【useReducer】{JSON.stringify(personObj)}  <br />
      <Button type='primary' onClick={addPersonInfo}>获取用户信息</Button> 
    </div>
  )
}

export default Index;