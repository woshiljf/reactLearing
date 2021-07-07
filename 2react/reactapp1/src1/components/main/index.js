// import React, { Component } from 'react';
import React, { memo } from 'react';
import { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

const Main = memo((props) => {
  const [count, setCount] = useState(0)

  useEffect(() => {

    document.title = 'your click' + { count }

    console.log('小姑');
    return () => {

      console.log('清除了');

    }

  }, [count])

  return (
    <div>
      <h1>我是小狗</h1>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>点我</button>
    </div>
  );
});



export default Main;