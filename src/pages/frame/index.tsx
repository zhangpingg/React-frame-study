import Bus from './bus'
import Frame from './frame'
import EventListener from './event-listener'
import Store from './store'
import ParentChildAwait from './parent-child-await'
import PropsDefault from './props-default'
import ShowDom from './show-dom'
import UrlParse from './url-parse'
import ScrollRect from './scroll-rect'
import BtnModal from './btn-modal'


const Index = () => {
  return (
    <div style={{overflow:'auto'}}>
      <Bus />
      <Frame /> 
      <EventListener /> 
      <Store />   
      <ParentChildAwait />  <br />
      <PropsDefault />      <br />
      <ShowDom />           <br />
      <UrlParse />          <br />
      <ScrollRect />        <br />
      <BtnModal />          <br />
    </div>
  )
}

export default Index;