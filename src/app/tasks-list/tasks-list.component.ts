import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

  constructor() { 
    this.tasks = []
  }

  @Input()
  tasks: Task[];

  @Output()
  remove = new EventEmitter<number>();
 

  ngOnInit() {
  }


  removeTask(taskIdx: number) {
    this.remove.emit(taskIdx);
  }


}