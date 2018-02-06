import {autoinject} from 'aurelia-framework';
import {TaskWebAPI, iTask, TaskObj} from './task-web-api';
import {Router} from 'aurelia-router';

@autoinject
export class TaskList {
    tasks;
    SelectedTask: iTask;

    constructor(private api: TaskWebAPI, private router: Router) {
        this.SelectedTask = new TaskObj();
    }

    created() {
        this.api.getTaskList().then(tasks => this.tasks = tasks);
    }

    selectTask(task) {
        this.router.navigateToRoute("tasks", { id: task.id });
        this.SelectedTask = <iTask>task;
    }
}