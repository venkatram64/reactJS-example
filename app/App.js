var React = require('react');
var ReactDOM = require('react-dom');
import Projects from './components/Projects';
import AddProject from './components/AddProject';
import uuid from 'uuid';
import PropTypes from 'prop-types';

//state
//lifecycle event
//UI

class App extends React.Component {

    constructor(){
        super();
        this.state = {
            projects: []
        }
    }

    componentWillMount(){
        this.setState(
            {
                projects: [
                    {   
                        id: uuid.v4(),
                        title:'Business Website',
                        category: 'Web Design'
                    },
                    {
                        id: uuid.v4(),
                        title:'Social App',
                        category: 'Mobile Development'
                    },
                    {
                        id: uuid.v4(),
                        title:'Ecommerce Shopping Cart',
                        category: 'Web Development'
                    }
                ]
            }
        );
    }
    handleAddProject(project){
        //console.log(project);
        let projects = this.state.projects;
        projects.push(project);
        this.setState(
            {
                projects: projects
            }
        )
    }
    handleDeleteProject(id){
        let projects = this.state.projects;
        let index = projects.findIndex(x => x.id === id);
        projects.splice(index, 1);
        this.setState(
            {
                projects: projects
            }
        )
    }
    render(){
        return (
            <div className="app">
                <AddProject addProject={this.handleAddProject.bind(this)}/>
                <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/>
            </div>
        )
    }
}

export default App;