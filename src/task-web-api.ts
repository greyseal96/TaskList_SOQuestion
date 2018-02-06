let latency = 200;
let id = 0;

function getId(){
  return ++id;
}

enum TaskPriority {
  'One' = 1,
  'Two',
  'Three'
}

enum TaskStatus {
  'NotStarted',
  'InProgress',
  'Deferred',
  'Completed'
}

export interface iTask {
  id: number;
  title: string;
  priority: TaskPriority;
  status: TaskStatus;
  percentComplete: number;
  description: string;
  startDate: Date;
  dueDate: Date;
}

export class TaskObj implements iTask {
  id: number;
  title: string;
  priority: TaskPriority;
  status: TaskStatus;
  percentComplete: number;
  description: string;
  startDate: Date;
  dueDate: Date;

  constructor(){
    this.id = 0;
    this.title = '';
    this.priority = 1;
    this.status = TaskStatus.NotStarted;
    this.percentComplete = 0;
    this.description = '';
    this.startDate = new Date(Date.now());
    this.dueDate = new Date(Date.now());
  }
}

let taskStatuses = ['Not Started', 'In Progress', 'Deferred', 'Completed'];

let tasks = [
  {
    id:getId(),
    title:'TestTask1',
    priority:'1',
    status:'In Progress',
    percentComplete:'22',
    description:'This is the first test task.',
    startDate:'12/25/2017',
    dueDate:'1/25/2018'
  },
  {
    id:getId(),
    title:'TestTask2',
    priority:'1',
    status:'In Progress',
    percentComplete:'45',
    description:'This is the second test task.',
    startDate:'1/25/2017',
    dueDate:'11/25/2017'
  },
  {
    id:getId(),
    title:'TestTask3',
    priority:'2',
    status:'In Progress',
    percentComplete:'89',
    description:'This is the third test task.',
    startDate:'4/25/2017',
    dueDate:'9/25/2018'
  },
  {
    id:getId(),
    title:'TestTask4',
    priority:'2',
    status:'In Progress',
    percentComplete:'10',
    description:'This is the fourth test task.',
    startDate:'5/25/2017',
    dueDate:'7/16/2017'
  },
  {
    id:getId(),
    title:'TestTask5',
    priority:'3',
    status:'Not Started',
    percentComplete:'0',
    description:'This is the fifth test task.',
    startDate:'',
    dueDate:''
  }
];

export class TaskWebAPI {
  isRequesting = false;
  
  getTaskList(){
    this.isRequesting = true;
    return new Promise(resolve => {
      setTimeout(() => {
        let results = tasks.map(x =>  { return {
          id:x.id,
          title:x.title,
          priority:x.priority,
          status:x.status,
          percentComplete:x.percentComplete,
          description:x.description,
          startDate:x.startDate,
          dueDate:x.dueDate
        }});
        resolve(results);
        this.isRequesting = false;
      }, latency);
    });
  }

  getTaskStatuses() {
    this.isRequesting = true;
    return new Promise(resolve => {
      setTimeout(() => {
        let results = taskStatuses;
        resolve(results);
        this.isRequesting = false;
      }, latency);
    });
  }

  getTaskDetails(id){
    this.isRequesting = true;
    return new Promise(resolve => {
      setTimeout(() => {
        let found = tasks.filter(x => x.id == id)[0];
        resolve(JSON.parse(JSON.stringify(found)));
        this.isRequesting = false;
      }, latency);
    });
  }

  saveTask(task){
    this.isRequesting = true;
    return new Promise(resolve => {
      setTimeout(() => {
        let instance = JSON.parse(JSON.stringify(task));
        let found = tasks.filter(x => x.id == task.id)[0];

        if(found){
          let index = tasks.indexOf(found);
          tasks[index] = instance;
        }else{
          instance.id = getId();
          tasks.push(instance);
        }

        this.isRequesting = false;
        resolve(instance);
      }, latency);
    });
  }
}
