import uiRouter from "@uirouter/angularjs";
import angular from "angular";
import { TodoListComponent } from "./todolist.component";
import { TodoListController } from "./todolist.controller";
import { todoListRoutes } from "./todolist.routes";
import { TodoListService } from "./todolist.service";

export default angular.module("todolist", [
    uiRouter
])
.component("todoList", new TodoListComponent)
.controller("TodoListController", TodoListController)
.service("TodoListService", TodoListService)
.config(todoListRoutes)
.name;
