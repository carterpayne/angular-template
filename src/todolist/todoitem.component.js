export class TodoItemComponent {
    constructor() {
        this.template = '<input type="text" ng-model="tivm.todo.text" ng-change="tivm.todoChanged(todo)"></input>';
        this.controller = 'TodoItemController';
        this.controllerAs = 'tivm';
        this.bindings = {
            todo: '<',
            onChange: '&'
        };
    }
}
