import TreeSelectSync from './sync'
import TreeSelectAsync from './async'
import RelationBusiness from './relation-business'

const Index = () => {
  return (
    <div>
      <h2>tree 树</h2>
      <TreeSelectSync />
      <TreeSelectAsync />
      <RelationBusiness />
      <hr />
    </div>
  )
}

export default Index;