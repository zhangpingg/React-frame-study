// declare module '@emotion/core/jsx-runtime';
// import {css} from '@emotion/core'
import { useCallback } from 'react'
import OrgTree from '../components/org-tree'

const List = () => {

  /** 切换组织架构树 */
  const changeOrgTree = useCallback((data) => {
    console.log('级联数据', data)
  }, [])

  return (
    <div>
      <OrgTree
        //cssp={css`width:400px;`}
        placeholder='请选择组织架构树'
        orgId={'1'}
        defaultValue={['1', '2', '3']}
        onChange={changeOrgTree}
      />
    </div>
  )
}

export default List