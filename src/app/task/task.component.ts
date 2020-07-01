import { Component, OnInit, Input, Output, ViewChild, ElementRef } from '@angular/core';
import { Task } from '../app.component';
import { EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit{
  nameEditMode:boolean = false
  deadlineEditMode:boolean = false
  descrEditMode:boolean = false
  form: FormGroup
  @Input() task: Task
  @Output() onDelete = new EventEmitter() 
  @Output() onChange = new EventEmitter() 
  @ViewChild('nameEditInput', {static: false}) nameEdit: ElementRef;
  
  ngOnInit () {
    this.form = new FormGroup({
      name: new FormControl(this.task.name, Validators.required),
    })
    
  }
  ngAfterViewChecked(){
    if (this.nameEditMode) this.nameEdit.nativeElement.focus()
  }
  


  delTask(){
   this.onDelete.emit()
  }
  onEdit(field) {
    this[field+'EditMode'] = true
   // setTimeout(()=>document.getElementById('editInput').focus(),100)
  }
  changeName(e, field) {
      
    if (field==='name' && e.target.value.trim()==="") {
     // document.getElementById('editInput').focus()
      this.nameEdit.nativeElement.focus()
      return 0
    }
    
    this[field+'EditMode'] = false
    let val = {
      value: e.target.value,
      field
    }
    this.onChange.emit(val)
  }
  onKey(e, field) {
    if (e.code==="Enter") {
      this.changeName(e,field)
    } 
    if (e.code==="Escape") {
      if (field==='name') {
        let nameObj = {
          name: this.task.name
        }
        this.form.setValue({...nameObj})
      }
      e.target.value=this.task[field]
      this[field+'EditMode'] = false
    }
  }
}
