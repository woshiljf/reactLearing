import React from 'react';

import { Provider } from "react-redux";
import store from "./store";

import WyMain from './pages/main/index.jsx';

function App () {
  return (
    <Provider store={store}>
      <WyMain />
    </Provider>
  );
}

export default App;
