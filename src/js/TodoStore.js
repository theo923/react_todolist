import { EventEmitter } from "events";

class TodoStore extends EventEmitter{
    constructor(){
        super();
        this.todos = [
            {
                id: 1,
                text: "Football Training",
                complete: false,
                check: false,
            },
            {
                id: 2,
                text: "Pay Bills",
                complete: false,
                check: false,
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

    deleteItem(e){
        let x = [];
        this.todos.map((val,idx) =>{
            (val != e)? x.push({id:idx, text:val.text, complete:val.complete}):false;
        })
        this.todos.pop(e);
        console.log(this.todos);
    }

}

const todoStore = new TodoStore;

export default todoStore;