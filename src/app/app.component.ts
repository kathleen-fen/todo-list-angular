import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
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
  defaultTask = {
    name: '',
    status: 'todo',
    descr: '',
    deadline: '',
    priority: 'medium'
  }
  tasks: Task [] = [
    {
      name: 'English Homework',
      status: 'todo',
      descr: 'Exercises 1,5,10 page N876',
      deadline: "2020-06-19",
      priority: 'medium'
    },
    {
      name: 'Math Homework',
      status: 'done',
      descr: 'prove the Pythagorean theorem',
      deadline: "2020-06-19",
      priority: 'high'
    },
    {
      name: 'Literature Homework',
      status: 'done',
      descr: 'Reading novels by Dostoevsky',
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
    this.tasks.unshift({ ...this.form.value})
    this.form.setValue({...this.defaultTask})
    this.form.markAsUntouched()
  }
  deleteTask(index) {
    this.tasks.splice(index,1)
  }
  onChange(val,index){
    this.tasks[index][val.field] = val.value
  }
  
}
