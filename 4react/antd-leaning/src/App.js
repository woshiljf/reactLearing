import './App.less';
import { Button, Pagination } from "antd";
import Header from './components/header/Header.jsx'
function App () {



  return (
    <div className="App">
      <Button type="primary" className='btn'>点我</Button>
      <Pagination defaultCurrent={6} total={500} />
      <Header></Header>
    </div>
  );
}

export default App;
