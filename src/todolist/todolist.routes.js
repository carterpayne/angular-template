export function todoListRoutes($stateProvider) {
    var todoListState = {
        name: 'todolist',
        url: '/',
        component: 'todoList',
        resolve: {
            todos: (TodoListService) => { return TodoListService.getTodos(); }
        }
    };

    $stateProvider.state(todoListState);
}
