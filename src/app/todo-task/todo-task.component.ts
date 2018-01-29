import { TasksService } from '../services/tasks.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../models/task';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent implements OnInit {

  tasksList: Array<Task> = [];

  constructor(private tasksService: TasksService) { 
    this.tasksService.getTasksListObs().subscribe((tasks: Array<Task>) => {
      //dodanie slice na liscie sprawi ze Angular zareaguje na zmiane
      //metoda zwraca nam nowa tablice z nowa referencja i angular wykryje ze pojawila sie nowa lista
      this.tasksList = tasks.filter(t => t.isDone === false);
    });
  }

  ngOnInit() {
  }

  remove(task: Task) {
    this.tasksService.remove(task);
  }

  done(task: Task) {
    this.tasksService.done(task);
  }

  getColor(): string {
    return this.tasksList.length >= 5 ? 'red' : 'green';
  }

}
