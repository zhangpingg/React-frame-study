import React, { useCallback, useState, useReducer } from 'react'
import './style.less';
import { PersonContext} from './context'
import  {IPersonObjProps, IUserObjProps} from './interface'
import { ETestResult } from './const'
import AddModal from './components/add-modal'

// 定义常量
const list = [];

const Index: React.FC = () => {
  const [personObj, setPersonObj] = useState<IPersonObjProps>({ name: '张三', age: 10 });
  const [userObj, setUserObj] = useState<IUserObjProps>({})

  // 刷新列表
  const refreshModule = useCallback((type) => {
    // 根据类型，刷新各模块接口，更新数据（可用 switch 判断）
    console.log(type)
  }, [])
  // 确定弹框
  const OkAddModal = useCallback((userObj) => {
    console.log(userObj)
    setUserObj((prev) => ({...prev, ...userObj}))
  }, [])

  return (
    <PersonContext.Provider value={{ personObj, refreshModule }}>
      <h3>框架</h3>
      <div className="frame">
        <p>主页面内容</p>
        <p>{JSON.stringify(userObj)}</p>
        <p>{JSON.stringify(ETestResult)}</p>
        <AddModal onOk={OkAddModal} />
      </div>
      <hr /> <br />
    </PersonContext.Provider>
  )
}

export default Index;