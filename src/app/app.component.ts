import { Component } from '@angular/core';
import { Task } from './task';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  tasks: Task[] = [];
  title = 'Angular';

  handleTaskAdd(description: string) {
    if (description && description.length > 0) {
      this.tasks.push({ description });
    }
  }

  handleTaskRemove(taskIdx: number) {
    this.tasks.splice(taskIdx, 1);
  }

}
