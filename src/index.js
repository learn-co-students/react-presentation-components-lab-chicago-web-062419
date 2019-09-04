import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

handleClick = () => {

}

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={console.log("whatsup")} />
  </div>,
  document.getElementById('root')
);