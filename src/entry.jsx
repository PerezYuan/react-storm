import React from 'react';
import ReactDOM from 'react-dom';
import fullName from './fullName';

class HelloReact extends React.Component {
    render() {
        return(
            <div>{ fullName }</div>
        );
    }
}

ReactDOM.render(<HelloReact />, document.getElementById("app"));

// if (module.hot) {
//     module.hot.accept();
// }