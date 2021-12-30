import React, { useEffect, useCallback, useRef } from 'react'
import { Button, Input } from 'antd';
import useRowModal from './use-row-modal'

const Index = () => {
  const [EditRemark, EditModal] = useRowModal({
    buttonText: '按钮名称',
    modalTitle: '弹框名称',
    modalWidth: 600,
  })

  return (
    <div>
      <h3>按钮、弹框分开，usehooks</h3>
      <EditRemark record={{id: 1, remark: '备注的内容'}} /> 
      <EditModal>
        <p>自定义内容</p>
      </EditModal>
      <hr /> <br /><br />
    </div>
  )
}

export default Index