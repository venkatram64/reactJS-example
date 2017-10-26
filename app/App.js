var React = require('react');
var ReactDOM = require('react-dom');
import Projects from './components/Projects';

//state
//lifecycle event
//UI

class App extends React.Component {

    render(){
        return (
            <div className="app">
                <Projects/>
            </div>
        )
    }
}

export default App;