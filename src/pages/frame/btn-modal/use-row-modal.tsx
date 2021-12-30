import React, { useEffect, useCallback, useRef, useReducer, useState } from 'react'
import { Button, Modal } from 'antd';
import { usePersistFn } from 'ahooks'

interface IRenderButton {
  buttonText: string
  onCallback: (record: any) => void
}
/** 按钮 */
const RenderButton: React.FC<IRenderButton> = (props: any) => {
  const { buttonText, record, onCallback } = props;

  return (
    <Button type='primary' onClick={() => onCallback(record)}>{buttonText}</Button>
  )
}


interface IRenderModal {
  modalTitle: string
  modalWidth: number
  loadings: any
  record: any
  onCancel: () => void
}
/** 弹框 */
const RenderModal: React.FC<IRenderModal> = (props) => {
  const { modalTitle, modalWidth, loadings, record, onCancel } = props;

  /** 确定 */
  const onOk = usePersistFn(() => {
    console.log('保存数据')
    onCancel()
  })

  return (
    <Modal
      title={modalTitle}
      visible={loadings.modal}
      width={modalWidth}
      destroyOnClose
      onCancel={onCancel}
      onOk={onOk}>
      弹框内容
      {props.children}
    </Modal>
  )
}


interface IProps {
  buttonText: string
  modalTitle: string
  modalWidth?: number
}
/** 组合：按钮、弹框 */
const useRowModal = (props: IProps): [any, any] => {
  const { buttonText, modalTitle, modalWidth } = props;
  const [loadings, dispatchLoadings] = useReducer((prev: any, data: any) => ({ ...prev, ...data }), { modal: false, noPass: false })
  const [record, setRecord] = useState({})

  /** 打开弹框 */
  const openModal = usePersistFn((record) => {
    setRecord(record)
    dispatchLoadings({ modal: true })
  })
  /** 取消弹框 */
  const cancelModal = usePersistFn(() => {
    dispatchLoadings({ modal: false })
  })

  return [
    (props: any) => (<RenderButton buttonText={buttonText} {...props} onCallback={openModal} />),
    (props: any) => (<RenderModal modalTitle={modalTitle} modalWidth={modalWidth!} record={record} loadings={loadings} onCancel={cancelModal} {...props} />)
  ]
}

export default useRowModal