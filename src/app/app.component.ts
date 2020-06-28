import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
export enum StatusEnum {
  todo,
  doing,
  done
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
  deadline: string,
  priority: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'todo-list';
  form: FormGroup
  tasks: Task [] = [
    {
      name: 'English Homework',
      status: 'for execution',
      descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
      deadline: "2020-06-19",
      priority: 'high'
    },
    {
      name: 'Math Homework',
      status: 'done',
      descr: 'ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet',
      deadline: "2020-06-19",
      priority: 'low'
    }
  ]
  ngOnInit () {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      deadline: new FormControl(''),
      status: new FormControl('todo'),
      priority: new FormControl('medium'),
      descr: new FormControl('')
    })
  }
  addTask() {
    this.tasks.unshift({ ...this.form.value});
  }
  deleteTask(index) {
    this.tasks.splice(index,1)
  }
  onChange(val,index){
    this.tasks[index][val.field] = val.value
  }
  
}
