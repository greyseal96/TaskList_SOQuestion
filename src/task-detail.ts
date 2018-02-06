import {autoinject} from 'aurelia-framework';
import {TaskWebAPI, iTask} from './task-web-api';
import {Router} from 'aurelia-router';

@autoinject
export class TaskDetail {
    routeConfig;
    task: iTask;
    taskStatuses;

    constructor(private api: TaskWebAPI, private router: Router) { }

    activate(params, routeConfig) {
        this.routeConfig = routeConfig;
        return this.api.getTaskDetails(params.id).then(task => {
            this.task = <iTask>task;
            this.routeConfig.navModel.setTitle(this.task.title);
        }).then(() => this.api.getTaskStatuses())
        .then((statuses) => this.taskStatuses = statuses);
    }

    cancelClick() {
        this.router.navigateToRoute('noselection');
    }
}