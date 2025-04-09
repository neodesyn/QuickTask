import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { TaskService } from '../../services/task.service';
//import { FormsModule } from '@angular/forms';
import { Task } from '../../itask';

@Component({
  selector: 'app-task-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {
//   taskForm = new FormGroup({
//     task: new FormControl('', Validators.required)
//   });

//   constructor(private taskService: TaskService) {}

//   onSubmit() {
//     if (this.taskForm.valid) {
//       this.taskService.addTask(this.taskForm.value.task!);
//       this.taskForm.reset();
//     }
//   }
// }


taskForm: FormGroup;
  @Output() taskAdded = new EventEmitter<Task>();

  constructor(private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      taskName: ['', Validators.required]
    });
  }

  addTask() {
    if (this.taskForm.valid) {
      const newTask: Task = {
        id: Math.floor(Math.random() * 1000), // Generate a random ID
        name: this.taskForm.value.taskName
      };

      this.taskAdded.emit(newTask);
      this.taskForm.reset();
    }
  }
}


