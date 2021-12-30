import { useEffect } from 'react';
import Bus from './bus'

const Child = () => {
  useEffect(() => {
    /** 接收人员信息 */
    Bus.on('personInfo', (data) => {
      console.log(data);
    }); 
  })
  
  return (
    <div>
      子页面
    </div>
  )
}

export default Child;