export class TodoListController {
    todoItemChanged($event) {
        console.log($event.changedTodo.text);
    }
}
