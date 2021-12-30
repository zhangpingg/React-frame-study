import Pie from './pie'
import ColumnarDetails from './columnar-details'
import Columnar from './columnar'
import MultipleColumnar from './multiple-columnar'
import Funnel from './funnel'
import LineChart from './line-chart'
import NestedRing from './nested-ring'
import MultipleColumnarLine from './multiple-columnar-line'

const Index = () => {
  return (
    <div style={{overflow:'auto'}}>
      <Pie />
      <ColumnarDetails />
      <Columnar />
      <MultipleColumnar />
      <Funnel />
      <LineChart />
      <NestedRing />
      <MultipleColumnarLine />
    </div>
  )
}

export default Index;