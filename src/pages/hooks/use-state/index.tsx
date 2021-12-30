import React, {useState, useCallback} from "react";
import {Button} from 'antd'

const Index = () => {
  const [list, setList] = useState<string[]>(['A']);

  // 添加字母 —— useCallback：返回缓存函数
  const addListItem = useCallback(() => {
    let _list = [...list, 'B'];
    setList(_list);
  }, [list])

  return (
    <div>
      【useState】[{list}] <br />
      <Button type='primary' onClick={addListItem}>增加</Button>
    </div>
  )
}

export default Index;