import { Component, OnInit, Input, Output, ViewChild, ElementRef } from '@angular/core';
import { Task } from '../app.component';
import { EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  nameEditMode:boolean = false
  deadlineEditMode:boolean = false
  descrEditMode:boolean = false
  form: FormGroup
  @Input() task: Task
  @Output() onDelete = new EventEmitter() 
  @Output() onChangeName = new EventEmitter() 
  @ViewChild('nameEditInput', {static: false}) nameEdit: ElementRef;
  
  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
    name: new FormControl('', Validators.required),
    deadline: new FormControl(''),
    /* status: new FormControl('todo'),
    priority: new FormControl('medium'), */
    descr: new FormControl('')
    })
  }

  delTask(){
   this.onDelete.emit()
  }
  onEditName() {
    this.nameEditMode = true
    setTimeout(()=>document.getElementById('nameEditInput').focus(),100)
  }
  changeName(e) {
    this.nameEditMode = false
    this.onChangeName.emit(e.target.value)
  }
  onKey(e) {
    if (e.code==="Enter") {
      this.changeName(e)
    } 
    if (e.code==="Escape") {
      e.target.value=this.task.name
      this.nameEditMode = false
    }
    

  }
  

}
