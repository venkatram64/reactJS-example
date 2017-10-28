import React  from 'react';
import PropTypes from 'prop-types';

import ProjectItem from './ProjectItem';


//state
//lifecycle event
//UI

class Projects extends React.Component {

    deleteProject(id){
        this.props.onDelete(id);
    }

    processProjectItems(){
        let projectItems;
        if(this.props.projects){
            projectItems = this.props.projects.map(project => {
                return (<ProjectItem onDelete={this.deleteProject.bind(this)} key={project.title} project={project} />);
            });
            return projectItems;
        }
        return projectItems;
    }

    render(){
        let projectItems = this.processProjectItems();
        return (
            <div className="projects">
                <h3>Latest Projects</h3><hr/>
                {projectItems}
            </div>
        )
    }
}

Projects.propTypes = {
    projects: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired
}

export default Projects;