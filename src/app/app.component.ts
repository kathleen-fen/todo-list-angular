import { Component } from '@angular/core';
export enum StatusEnum {
  'for execution',
  'in work',
  'done'
}

export enum PriorityEnum {
  high,
  medium,
  low
}

export interface Task {
  name: string,
  status: string,
  descr: string,
  deadline: Date,
  priority: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'todo-list';
  
  newTaskName: string
  newTaskStatus = 'for execution'
  newTaskDescr: string
  newTaskDeadline: Date
  newTaskPriority = 'medium' 

  tasks: Task [] = [
    {
      name: 'English Homework',
      status: 'for execution',
      descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
      deadline: new Date(),
      priority: 'high'
    },
    {
      name: 'Math Homework',
      status: 'done',
      descr: 'ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet',
      deadline: new Date(),
      priority: 'low'
    }
  ]
  constructor() {
    //this.newTaskStatus = 'hgfdfdgf'
  }
  addTask() {
    this.tasks.unshift({
      name: this.newTaskName,
      status: this.newTaskStatus,
      descr: this.newTaskDescr,
      deadline: this.newTaskDeadline,
      priority: this.newTaskPriority
    });
    this.newTaskName = ''
    this.newTaskStatus = 'for execution'
    this.newTaskDescr = ''
    this.newTaskDeadline = null
    this.newTaskPriority = 'medium' 
  }
  deleteTask(index) {
    this.tasks.splice(index,1)
  }
  onChangeName(newName,index){
    this.tasks[index].name = newName
  }
  
}
