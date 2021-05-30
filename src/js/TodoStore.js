import { EventEmitter } from "events";

class TodoStore extends EventEmitter{
    constructor(){
        super();
        this.todos = [
            {
                id: 1,
                text: "Football Training",
                complete: false
            },
            {
                id: 2,
                text: "Pay Bills",
                complete: false
            }
        ];
    }

    getAll(){
        return this.todos;
    }

    addItem(e){
        this.todos.push(e);
        console.log(this.todos);
    }

}

const todoStore = new TodoStore;

export default todoStore;