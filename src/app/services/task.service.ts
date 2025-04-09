// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class TaskService {

//   constructor() { }
// }


import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private tasks = new BehaviorSubject<string[]>(['Learn Angular', 'Build a Project', 'Prepare for Interview']);
  tasks$ = this.tasks.asObservable();

  addTask(task: string) {
    this.tasks.next([...this.tasks.getValue(), task]);
  }

  deleteTask(index: number) {
    const updatedTasks = this.tasks.getValue().filter((_, i) => i !== index);
    this.tasks.next(updatedTasks);
  }
}
