import { Component, OnInit, Input, Output } from '@angular/core';
import { Task } from '../app.component';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  
  @Input() task: Task
  @Output() onDelete = new EventEmitter() 
  constructor() { }

  ngOnInit(): void {
  }

  delTask(){
   this.onDelete.emit()
  }

}
