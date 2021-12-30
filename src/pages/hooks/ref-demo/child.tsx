import React, { useCallback , useImperativeHandle} from 'react';

interface IPersonProps {
  num?:number
}

const Child = (props:IPersonProps, ref:any) => {
  useImperativeHandle(ref, () => ({
    /** 获取子级数据 */
    getChildData() {
      fn1()
      return '子级数据';
    }
  }));
  /** 子级的方法 */
  const fn1 = useCallback(() => {
    console.log(11)
  }, [])

  return (
    <div>
      子级内容 {props.num}
    </div>
  )
}

export default React.forwardRef(Child);