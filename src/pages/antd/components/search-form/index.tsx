import { Input, Button, Select } from 'antd';
import { useCallback, useEffect, useReducer } from 'react';
import './style.less';
import { useUpdateEffect, useDebounceFn } from 'ahooks';

export interface IItems {
  type?: 'input' | 'select'
  propKey: string
  placeholder?: string
  options?: Array<{ value: any, label: string }>
  component?: React.ElementType,
  props?: any
}
interface IProps {
  items: IItems[]
  onUpdateSearchForm: (data: any) => void
  onUpdatePage: () => void
  onQuery: (data: any) => void
  pageNo?: number
  pageSize?: number
  onReset?: () => void
  defaultQuery?: object
}

const Index: React.FC<IProps> = (props) => {
  const { defaultQuery = {} } = props
  const [formData, dispatch] = useReducer((prev: any, data: any) => (data ? { ...prev, ...data } : defaultQuery), defaultQuery);
  const [searchData, setSearchData] = useReducer(
    (prev: any, data: any) => (data ? { ...prev, ...data } : props.onUpdateSearchForm(defaultQuery)),
    props.onUpdateSearchForm(defaultQuery),
  )
  
  /** formData 数据改变时，修改真正筛选条件字段 */
  useUpdateEffect(() => {
    setSearchData(props.onUpdateSearchForm(formData))
  }, [formData])
  /** 当 pageNo 改变时，重新获取数据 */
  useUpdateEffect(() => {
    props.onQuery({ ...{ pageNo: props.pageNo, pageSize: props.pageSize }, ...searchData })
  }, [props.pageNo, props.pageSize])
  /** 查询 */
  const search = useCallback(() => {
    props.onUpdatePage();
    if (props.pageNo === 1 && props.pageSize === 10) {
      props.onQuery(searchData)
    }
  }, [searchData, props.pageNo, props.pageSize])
  /** 重置 */
  const reset = useCallback(() => {
    dispatch(undefined)
    props?.onReset?.()
    search();
  }, [])

  useEffect(() => {
    props.onQuery(searchData)
  }, [])

  return (
    <div className='search'>
      {
        props.items.map((item, index) => {
          if (item.component) {
            const Type = item.component;
            return (
              <div className="search-item" key={index}>
                <Type
                  placeholder={item.placeholder}
                  {...item.props}
                  value={formData[item.propKey]}
                  onChange={(v: any) => dispatch({ [item.propKey]: v })}
                />
              </div>
            )
          }
          switch (item.type) {
            case 'input':
              return (
                <div className='search-item' key={index}>
                  <Input
                    placeholder={item.placeholder}
                    value={formData?.[item.propKey]}
                    onChange={(e) => dispatch({ [item.propKey]: e.target.value })} />
                </div>
              )
            case 'select':
              return (
                <div className='search-item' key={index}>
                  <Select
                    placeholder={item.placeholder}
                    value={formData?.[item.propKey]}
                    onChange={(v) => dispatch({ [item.propKey]: v })}>
                    {item.options?.map((c) => (
                      <Select.Option value={c.value} key={c.value}>{c.label}</Select.Option>
                    ))}
                  </Select>
                </div>
              )
          }
        })
      }
      <Button type="primary" onClick={search}>查询</Button>
      <Button onClick={reset}>重置</Button>
    </div>
  )
}

export default Index
