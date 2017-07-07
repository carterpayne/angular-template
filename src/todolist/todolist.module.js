import uiRouter from "@uirouter/angularjs";
import angular from "angular";
import { TodoListComponent } from "./todolist.component";
import { TodoListController } from "./todolist.controller";
import { todoListRoutes } from "./todolist.routes";
import { TodoListService } from "./todolist.service";
import { TodoItemComponent } from "./todoitem.component";
import { TodoItemController } from "./todoitem.controller";

export default angular.module("todolist", [
    uiRouter
])
.component("todoList", new TodoListComponent)
.component("todoItem", new TodoItemComponent)
.controller("TodoListController", TodoListController)
.controller("TodoItemController", TodoItemController)
.service("TodoListService", TodoListService)
.config(todoListRoutes)
.name;
