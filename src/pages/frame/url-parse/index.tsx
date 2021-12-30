import Url from 'url-parse';

const Index = () => {
  let obj = Url('http://localhost:2000/#/frame/index?type=1')
  // console.log(obj)

  return (
    <div>
      <h3>解析 url</h3>
      {JSON.stringify(obj)}
      <hr /> <br /><br />
    </div>
  )
}

export default Index;