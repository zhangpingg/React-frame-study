import React, {useEffect} from 'react'
import UseMemo from './use-memo'
import UseState from './use-state'
import UseReducer from './use-reducer'
import InterfaceType from './interface-type'
import RefDemo from './ref-demo'
import LinkDemo from './link-demo'

const Index = () => {
  return (
    <div style={{overflow:'auto'}}>
      <UseState />        <hr />
      <UseMemo />         <hr />
      <UseReducer />      <hr />
      <InterfaceType />   <hr />
      <RefDemo />         <hr />
      <LinkDemo />        <hr />
    </div>
  )
}

export default Index;