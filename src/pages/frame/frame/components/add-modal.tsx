import React, { useCallback, useState, useContext, useReducer } from 'react'
import { Modal, Button, Input } from 'antd';
import { PersonContext } from '../context'
import { IUserObjProps } from '../interface'

interface IAddModalProps {
  onOk: (userObj: IUserObjProps) => void
}

const AddModal: React.FC<IAddModalProps> = (props) => {
  const { personObj, refreshModule } = useContext(PersonContext);
  const [visible, setVisible] = useState(false)
  const [userObj, dispatchUserObj]: [IUserObjProps, Function] = useReducer((state: IUserObjProps, data: any) => {
    return { ...state, ...data }
  }, {});

  // 用户名输入回调
  const changeUserName = useCallback((v) => {
    dispatchUserObj({ 'userName': v })
  }, [])
  // ok 弹框
  const okModal = useCallback(() => {
    props?.onOk(userObj);
    refreshModule?.('react');
    setVisible(false);
  }, [userObj])

  return (
    <React.Fragment>
      <Button type='primary' onClick={() => { setVisible(true) }}>新建任务</Button>

      <Modal title="标题" visible={visible} destroyOnClose onOk={okModal} onCancel={() => { setVisible(false) }}>
        <Input placeholder="用户名" onChange={(e) => { changeUserName(e.target.value) }} />
        <p>userObj: {JSON.stringify(userObj)}</p>
        <p>personObj: {JSON.stringify(personObj)}</p>
      </Modal>
    </React.Fragment>
  )
}

export default AddModal;