import { useCallback } from "react"

const Index = () => {
  const shouContent = useCallback((type) => {
    switch (type) {
      case 1:
        return <span>展示1</span>
        break;
      case 2:
        return <span>展示2</span>
        break;
      case 3:
        return <span>展示3</span>
        break;
    }
  }, [])

  return (
    <div>
      <h3>判断展示：三目运算符、方法函数、条件组件(props.children[props.index])</h3>
      {true ? '展示1' : '展示2'}
      {shouContent(3)}
      <hr /><br /><br />
    </div>
  )
}

export default Index