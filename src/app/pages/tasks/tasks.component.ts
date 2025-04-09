import { Component } from '@angular/core';
import { TaskFormComponent } from '../../components/task-form/task-form.component';
import { TaskListComponent } from '../../components/task-list/task-list.component';
import { Task } from '../../itask';

@Component({
  selector: 'app-tasks',
  imports: [TaskFormComponent, TaskListComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  tasks: Task[] = [];

  addTask(newTask: Task) {
    this.tasks.push(newTask);
  }
}
