import React  from 'react';
import PropTypes from 'prop-types';

//state
//lifecycle event
//UI

class ProjectItem extends React.Component {
    deleteProject(id){
        //console.log(id);
        this.props.onDelete(id);
    }
    render(){
        //console.log(this.props);
        return (
            <li className="project-items">
                <strong>{this.props.project.title}</strong> : {this.props.project.category} <a href="#" onClick={this.deleteProject.bind(this,this.props.project.id)}>X</a>
            </li>
        )
    }
}

ProjectItem.propTypes = {
    project: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired
}

export default ProjectItem;