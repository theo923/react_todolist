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
        };
        this.y = 4;
    }

    handleChange = (e) => {
        this.setState({ text: e.target.value });
    };

    handleClick = (e) => {
        this.setState({ 
            id: this.y++,
            text: e.target.value,
            complete: false,
        });
        TodoStore.addItem(this.state);
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
                <input id="tArea" value={this.state.text} onChange={this.handleChange} placeholder="input todo" />
                <button type="submit" onClick={this.handleClick}>Submit</button>
            </div>
        );
    }
}
