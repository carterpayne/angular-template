export class TodoListComponent {
    constructor() {
        this.template = require('./todolist.tpl.html');
        this.controller = 'TodoListController';
        this.controllerAs = 'tlvm';
        this.bindings = {
            todos: '<'
        };
    }
}
