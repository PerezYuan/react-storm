import React from 'react';
import ReactDOM from 'react-dom';
import FullName from './FullName';

const user = {
  firstName: 'Perez',
  lastName: 'Yuan'
};

class HelloReact extends React.Component {
    render() {
        return(
            <div>Hello, <FullName user={ user }/></div>
        );
    }
}

ReactDOM.render(<HelloReact />, document.getElementById("app"));

// if (module.hot) {
//     module.hot.accept();
// }