export class TodoItemController {
    todoChanged() {
        this.onChange({$event: {changedTodo: this.todo}});
    }

    $onChanges() {
        this.todo = angular.copy(this.todo);
    }
}
