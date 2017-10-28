import React  from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';

//state
//lifecycle event
//UI
let categoryValues={
    categories:['Web Design','Web Development','Mobile Development']
}

class AddProject extends React.Component {

    constructor(){
        super();
        this.state = {
            newProject:{}
        }
    }
    
     displayCategories(){
        let categoryOptions = categoryValues.categories.map(category =>{
            return <option key={category} value= {category}>{category} </option>  
        });
        return categoryOptions;
    }

    handleSubmit(e){
       if(this.refs.title.value === ''){
           alert("Title is required.");
       }else{
           this.setState({
               newProject:{
                   id: uuid.v4(),
                   title: this.refs.title.value,
                   category: this.refs.category.value
               }
           },prev =>{
               //console.log(this.state);
               this.props.addProject(this.state.newProject);
           });
       }
        e.preventDefault();
    }

    render(){
        let cats = this.displayCategories();
        return (
            <div className="AddProject">
                <h3>Add Project</h3> <hr/>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div>
                        <label>Title: </label><br/>
                        <input type="text" ref="title"/>
                    </div>
                    <div><br/>
                        <label>Category: </label><br/>
                        <select ref="category">
                            {cats}
                        </select>
                    </div>
                    <div><br/>
                        <input type="submit" value="Submit"/>
                    </div>
                </form>  
                <hr/> 
            </div>
        )
    }
}

AddProject.propTypes = {
    //categories: PropTypes.array.isRequired,
    addProject: PropTypes.func.isRequired
}

export default AddProject;