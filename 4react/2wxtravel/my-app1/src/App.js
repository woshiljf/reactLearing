import './App.css';

import { Button, WhiteSpace } from "antd-mobile";
const PlaceHolder = ({ className = '', ...restProps }) => (
  <div className={`${className} placeholder`} {...restProps}>Block</div>
);
function App () {
  return (
    <div className="App">


      <WhiteSpace size="xs" />
      <PlaceHolder />

      <WhiteSpace size="sm" />
      <PlaceHolder />



    </div>
  );
}

export default App;
