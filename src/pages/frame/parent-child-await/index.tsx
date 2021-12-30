import { useCallback } from 'react';
import Child from './child'

const Index = () => {
  /** 添加任务 */
  const addTask = useCallback(async(data) => {
    console.log(data);      // 拿到参数，调取接口
    return true;
  }, [])

  return (
    <div>
      <h3>父子组件异步调接口</h3>
      <Child addTask={addTask} />
      <hr /><br /><br />
    </div>
  )
}

export default Index;


// export const queryTagTypeAddedList = async (data: {
//   tagType: string
//   busTypeId: number
// }) => get('/api/v2/tag/query', data)