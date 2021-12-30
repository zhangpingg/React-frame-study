import UseHover from './use-hover'
import Debounce from './debounce'
import Throttle from './throttle'
import UseStateCallback from './use-state-callback'
import UseTitleDemo from './use-title-demo'

const Index = () => {
  return (
    <div style={{overflow:'auto'}}>
      <UseHover />          <br />
      <Debounce />          <br />
      <Throttle />          <br /> <br />
      <UseStateCallback />  <br /> <br />
      <UseTitleDemo />      <br /> <br />
    </div>
  )
}

export default Index;