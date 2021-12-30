import TreeSelectSync from './sync'
import TreeSelectAsync from './async'
import List from './list'

const Index = () => {
  return (
    <div>
      <h2>级联选择器</h2>
      <TreeSelectSync />
      <TreeSelectAsync />
      <List />
      <hr />
    </div>
  )
}

export default Index;