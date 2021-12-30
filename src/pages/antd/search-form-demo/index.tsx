import { useCallback, useMemo, useState } from 'react';
import { Table, Button } from 'antd';
import SearchForm, { IItems } from '../components/search-form'
import CustomerType from '../components/search-form/customer-type'

interface IListItem {
  key: number
  name: string
  type: string
}

const Index = () => {
  const [pageNo, setPageNo] = useState<number>(1)
  const [pageSize, setPageSize] = useState<number>(10)
  const [loading, setLoading] = useState<boolean>(false)
  const [list, setList] = useState<IListItem[]>([])
  const [total, setTotal] = useState<number>(0);

  /** 筛选条件 */
  const items: IItems[] = useMemo(() => {
    return [
      {
        type: 'input',
        propKey: 'name',
        placeholder: '名称',
      },
      {
        type: 'select',
        options: [
          { value: 'fail', label: '失败' },
          { value: 'success', label: '成功' },
        ],
        propKey: 'type',
        placeholder: '类型',
      },
      {
        component: CustomerType,
        propKey: 'customerType',
        placeholder: '客户类型',
      }
    ]
  }, [])
  /** table 列头 */
  const columns = useMemo(() => {
    return [
      {
        dataIndex: 'name',
        title: '名称',
      },
      {
        dataIndex: 'type',
        title: '类型',
      }
    ]
  }, [])
  /** 修改筛选条件 */
  const onUpdateSearchForm = useCallback((data) => {
    const { name, ...lastProps } = data;
    return {
      name: name ? name + '——字段若是数组对象等，可取中某个值' : '',
      a: 1,
      ...lastProps
    }
  }, [])
  /** 更新页码 */
  const onUpdatePage = useCallback(() => {
    setPageNo(1)
    setPageSize(10)
  }, [])
  /** 获取数据 */
  const getList = useCallback((data) => {
    setLoading(true)
    const _params = {
      pageNo,
      pageSize,
      ...data
    }
    setTimeout(() => {
      console.log('_params:', _params)
      setList([{ key: 1, name: '张三', type: 'success' }])
      setTotal(100)
      setLoading(false)
    }, 1000)
  }, [pageNo, pageSize])

  return (
    <div>
      <h2>动态筛选条件</h2>
      <SearchForm
        items={items}
        onUpdatePage={onUpdatePage}
        onUpdateSearchForm={onUpdateSearchForm}
        onQuery={getList}
        pageNo={pageNo}
        pageSize={pageSize}
        onReset={() => {
          setPageNo(1);
          setPageSize(10);
        }}
        defaultQuery={{type:'success'}}
      />
      <Table
        columns={columns}
        dataSource={list}
        pagination={{
          current: pageNo,
          total,
          showSizeChanger: true,
          pageSize,
          pageSizeOptions: ['10', '30', '50', '100'],
          onShowSizeChange: (c, s) => {
            setPageSize(s);
            setTimeout(() => {
              setPageNo(1);
            })
          },
          onChange: (page) => {
            setPageNo(page);
          },
        }}
        loading={loading}>
      </Table>
      <hr />
    </div>
  )
}

export default Index;