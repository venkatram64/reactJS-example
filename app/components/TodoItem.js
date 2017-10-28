import React  from 'react';
import PropTypes from 'prop-types';

//state
//lifecycle event
//UI

class TodoItem extends React.Component {
    
    render(){
        //console.log(this.props);
        return (
            <li className="todo-items">
                <strong>{this.props.todo.title}</strong> 
            </li>
        )
    }
}


export default TodoItem;