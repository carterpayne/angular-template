import 'bootstrap-css-only';
import './app.css';
import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import todoList from './todolist/todolist.module';
import { AppComponent } from './app.component';

export default angular.module('app', [
    uiRouter,
    todoList
])
.component('app', new AppComponent)
.config(($urlRouterProvider) => {
    $urlRouterProvider.otherwise("/");
})
.name;

