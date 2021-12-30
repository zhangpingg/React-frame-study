import AntdForm from './antd-form'
import CascaderSyncAsync from './cascader'
import Select from './select'
import TimeTab from './time-tab'
import TreeSelect from './tree-select'
import TableHeaderMerge from './table-header-merge'
import TableHeaderScreen from './table-header-screen'
import SearchFormDemo from './search-form-demo'
import Edit from './components/edit'
import TableCellMerge from './table-cell-merge'

const Index = () => {
  return (
    <div style={{overflow:'auto'}}>
      <AntdForm />
      <CascaderSyncAsync /> 
      <Select />  
      <TimeTab changeTime={(data) => {}} />
      <TreeSelect />
      <TableHeaderMerge />
      <TableHeaderScreen />
      <SearchFormDemo />
      <Edit />
      <TableCellMerge />

      <br /><br /><br /><br /><br /><br />
    </div>
  )
}

export default Index;