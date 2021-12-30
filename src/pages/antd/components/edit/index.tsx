import { useCallback, useState } from "react"
import EditInput from "./edit-input"
import EditSelect from './edit-select'
import EditSelectPid from './edit-select-pid'
import EditSelectUser from './edit-select-user'
import EditCascader from './edit-cascader'

const Options = [
  { label: '选择1', value: '1' },
  { label: '选择2', value: '2' },
  { label: '选择3', value: '3' },
]
const CascarderOptions = [
  {
    key: '1',
    value: '1',
    label: '浙江省',
    children: [
      {
        key: '2',
        value: '2',
        label: '杭州市',
      },
      {
        key: '3',
        value: '3',
        label: '金华市',
      }
    ]
  }
]

const Index = () => {
  const [inputValue, setInputValue] = useState<string>('张三')
  const [selectValue, setSelectValue] = useState<string>('')
  const [selectMultipleValue, setSelectMultipleValue] = useState<string[]>(['1', '2'])
  const [selectValue3, setSelectValue3] = useState<string[]>(['1'])
  const [selectValue4, setSelectValue4] = useState<{label:string, value:string}>({label:'选择1', value:'1'})
  const [cascaderValue, setCascaderValue] = useState<string[]>(['1', '2'])

  /** 保存input */
  const saveInput = useCallback((data) => {
    console.log('保存接口:' + data)
    setInputValue(data)
  }, [])
  /** 单选保存 select */
  const saveSelect1 = useCallback((data) => {
    console.log('保存接口:' + data)
    setSelectValue(data)
  }, [])
  /** 多选保存 select */
  const saveSelect2 = useCallback((data) => {
    console.log('保存接口:' + data)
    setSelectMultipleValue(data)
  }, [])
  /** 多选搜索保存 select */
  const saveSelect3 = useCallback((data) => {
    console.log('保存接口:' + data)
    setSelectValue3(data)
  }, [])
  /** 搜索保存用户 select */
  const saveSelect4 = useCallback((data) => {
    console.log('保存接口:' + data)
    setSelectValue4(data)
  }, [])
  /** 保存级联 */
  const saveCascader = useCallback((data) => {
    console.log('保存接口:' + data)
    setCascaderValue(data)
  }, [])

  return (
    <div>
      <h2>编辑输入框</h2>
      <EditInput value={inputValue} onSave={saveInput} />
      <EditSelect value={selectValue} options={Options} onSave={saveSelect1} />
      <EditSelect value={selectMultipleValue} options={Options} mode={'multiple'} onSave={saveSelect2} />
      <EditSelectPid value={selectValue3} onSave={saveSelect3} />
      <EditSelectUser value={selectValue4!} onSave={saveSelect4} />
      <EditCascader label={['浙江省', '杭州市']} value={cascaderValue} options={CascarderOptions} onSave={saveCascader} />
      <hr />
    </div>
  )
}

export default Index


// multiple 