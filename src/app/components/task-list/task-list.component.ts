import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../services/task.service';
import { Task } from '../../itask';

@Component({
  selector: 'app-task-list',
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
//   tasks: string[] = [];

//   constructor(private taskService: TaskService) {
//     this.taskService.tasks$.subscribe(tasks => this.tasks = tasks);
//   }

//   deleteTask(index: number) {
//     this.taskService.deleteTask(index);
//   }
// }
@Input() tasks: Task[] = []; // Receiving tasks from parent component

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }
}
