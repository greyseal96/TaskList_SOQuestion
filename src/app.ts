import {Router, RouterConfiguration} from 'aurelia-router';
//import {inject} from 'aurelia-framework';
import {autoinject} from 'aurelia-framework';
import {TaskWebAPI} from './task-web-api';

//@inject(TaskWebAPI)
@autoinject
export class App {
  router: Router;

  constructor(public api: TaskWebAPI) {}

  configureRouter(config: RouterConfiguration, router: Router){
    config.title = 'Tasks';
    config.map([
      { route: '',              moduleId: 'no-selection',   title: 'Select', name: 'noselection'},
      // { route: 'contacts/:id',  moduleId: 'contact-detail', name:'contacts' }
      { route: 'tasks/:id',     moduleId: 'task-detail', name: 'tasks' }
    ]);

    this.router = router;
  }
}