import { Component, OnInit, ElementRef} from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';


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
  id: string,
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
  status: string;
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
      id:uuidv4(),
      name: 'English Homework',
      status: 'todo',
      descr: 'Exercises 1,5,10 page N876',
      deadline: "2020-06-19",
      priority: 'medium'
    },
    {
      id:uuidv4(),
      name: 'Math Homework',
      status: 'done',
      descr: 'prove the Pythagorean theorem',
      deadline: "2020-06-19",
      priority: 'high'
    },
    {
      id:uuidv4(),
      name: 'Literature Homework',
      status: 'done',
      descr: 'Reading novels by Dostoevsky',
      deadline: "2020-06-19",
      priority: 'low'
    }
  ]
  todoTasks: Task[]
  doingTasks: Task[]
  doneTasks: Task[]
  ngOnInit () {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      deadline: new FormControl(''),
      status: new FormControl('todo'),
      priority: new FormControl('medium'),
      descr: new FormControl('')
    })
    this.todoTasks = this.tasks.filter(r=>r.status==='todo')
    this.doingTasks = this.tasks.filter(r=>r.status==='doing')
    this.doneTasks = this.tasks.filter(r=>r.status==='done')
  }
  addTask() {
    this.tasks.unshift({ id:uuidv4(),...this.form.value})
    console.log(this.tasks)
    this.form.setValue({...this.defaultTask})
    this.form.markAsUntouched()
    console.log(this.tasks)
    this.updateTasks()
  }
  deleteTask(delTask) {
    this.tasks.splice(this.tasks.indexOf(delTask),1)
    console.log(this.tasks)
    this.updateTasks()

  }
  onChange(val,t){
    this.tasks[this.tasks.indexOf(t)][val.field] = val.value
    this.updateTasks()
  }

  updateTasks() {
    this.todoTasks = this.tasks.filter(r=>r.status==='todo')
    this.doingTasks = this.tasks.filter(r=>r.status==='doing')
    this.doneTasks = this.tasks.filter(r=>r.status==='done')
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer !== event.container) {
      transferArrayItem(event.previousContainer.data, event.container.data,
        event.previousIndex, event.currentIndex)
        let cont  = event.container.id
        let el = event.item.element.nativeElement.id
        
        let newStatus
        if (cont==='cdk-drop-list-0')
        {newStatus='todo'}
        if (cont==='cdk-drop-list-1')
        {newStatus='doing'}
        if (cont==='cdk-drop-list-2')
        {newStatus='done'}
        this.tasks.find(r => r.id === el).status = newStatus
        console.log(newStatus)
        console.log(el)
        console.log(this.tasks)
    //  this.tasks.find(el=>el.id===event.item.element.nativeElement.id).status= newStatus 
   // console.log(this.tasks.find(el=>el.id===event.item.element.nativeElement.id))
         this.updateTasks()
    } 
    
    //console.log(element(event.item.element.nativeElement))
    //console.log(event.item.element.nativeElement.id)
    //console.log(this.tasks)
    /* else {
      moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
    } */
  }
  
}
