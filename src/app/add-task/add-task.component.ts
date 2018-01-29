import { TasksService } from '../services/tasks.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../models/task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  newTask: string;
  //teraz juz tego nie emitujemy tylk robi to serwis
  // @Output () 
  // emitTask = new EventEmitter<string>();

//5. wstrzykujemy task serwis
  constructor(private tasksService: TasksService) {

   }

  ngOnInit() {
  }

  //emituje informacje o tym ze powstal task
  add() {
    const task: Task = ({ name: this.newTask, created: new Date().toLocaleString(), isDone: false });
    // this.emitTask.emit(this.newTask); - po dodanaiu serwisu zastepujemy to
    this.tasksService.add(task);
    this.newTask = '';
  }
}
