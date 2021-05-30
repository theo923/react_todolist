import React from "react";

import Todo from "./Todo";
import TodoStore from "./TodoStore";

export default class Layout extends React.Component{
    constructor () {
        super();
        this.state = {
            todos: TodoStore.getAll(),
            id: 3,
            text: '',
            complete: false,
            check: false,
        };
        this.y = 4;
    }

    handleTextChange = (e) => {
        this.setState({ text: e.target.value });
    };

    handleAdd = (e) => {
        this.setState({ 
            id: this.y++,
            text: e.target.value,
            complete: false,
            checked: false,
        });
        TodoStore.addItem(this.state);
    };

    handleDelete = (e) => {
        TodoStore.deleteItem();
    };

    render() {
        let { todos } = this.state;

        let TodoComponents = todos.map((todo) => {
            return <Todo key={todo.id} {...todo}/>
        })

        return (
            <div>
                <h1>Todos</h1>
                <ul>{TodoComponents}</ul>
                <input id="tArea" value={this.state.text} onChange={this.handleTextChange} placeholder="input todo" />
                <button type="submit" onClick={this.handleAdd}>Submit</button>
                <button type="submit" onClick={this.handleDelete}>Delete</button>
            </div>
        );
    }
}
