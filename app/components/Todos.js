import React  from 'react';
import PropTypes from 'prop-types';

import TodoItem from './TodoItem';


//state
//lifecycle event
//UI

class Todos extends React.Component {

   
    processTodoItems(){
        let todoItems;
        if(this.props.todos){
            todoItems = this.props.todos.map(todo => {
                return (<TodoItem  key={todo.id} todo={todo} />);
            });
            return todoItems;
        }
        return todoItems;
    }

    render(){
        let todoItems = this.processTodoItems();
        return (
            <div>
                <h3>Todos</h3><hr/>
                {todoItems}
            </div>
        )
    }
}



export default Todos;