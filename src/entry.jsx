// import React from 'react';
// import ReactDOM from 'react-dom';
// import fullName from './fullName';

// class HelloReact extends React.Component {
//     render() {
//         return(
//             <div>{ fullName }</div>
//         );
//     }
// }

// ReactDOM.render(<HelloReact />, document.getElementById("app"));

// if (module.hot) {
//     module.hot.accept();
// }

import React from 'react';
import ReactDOM from 'react-dom';
import FullName from './FullName';
import App from './App';

ReactDOM.render(<FullName />, document.getElementById('app'));