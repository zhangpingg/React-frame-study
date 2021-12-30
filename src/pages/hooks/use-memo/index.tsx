import React, { useState, useMemo, useEffect } from "react";
import { Button } from 'antd'

const Index = () => {
  const [num, setNum] = useState<number>(0);

  // 双倍值 ——— useMemo：返回缓存变量【有点像vue中的计算属性】
  const doubleNum = useMemo(() => {
    let _num = num * 2;
    return _num;
  }, [num])

  // 挂载完成（挂载完成后触发一次）
  useEffect(() => {
    // 请求接口
  }, [])
  // 更新（挂载完成后触发一次，当页面上 num、list 等每次更改时，页面重新 render，都会重新触发一次）
  useEffect(() => {
    console.log('更新成功');
  })
  // 监听（挂载完成后触发一次，监听 num，当 num 变化时触发）【类似vue中的watch监听】
  useEffect(() => {
    console.log('num 改变了');
  }, [num])

  return (
    <div>
      【num】{num}  <br />
      【useMemo：doubleNum】{doubleNum} <br />
      <Button type='primary' onClick={() => { setNum((num) => num + 1) }}>增加</Button>
    </div>
  )
}

export default Index;