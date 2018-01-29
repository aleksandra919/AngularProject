import { HttpService } from './http.service';
import { Task } from '../models/task';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class TasksService {

 private tasksListObs = new BehaviorSubject<Array<Task>>([]);

  constructor(private httpService: HttpService) {
    this.httpService.getTasks().subscribe(list => {
        this.tasksListObs.next(list);
    });
}

  add(task: Task) {
    const list  = this.tasksListObs.getValue();
    list.push(task);
    //3. emitujemy liste do innych subskrybentow 
    this.tasksListObs.next(list);
  }

  remove(task: Task) {

    const list = this.tasksListObs.getValue().filter ( e => e !== task);
    this.tasksListObs.next(list);
  }

  done(task: Task) {
    task.end = new Date().toLocaleString();
    task.isDone = true;
    const list = this.tasksListObs.getValue();
    this.tasksListObs.next(list);

}

    //4. metdoy dostepow do subjectow Obs
    getTasksListObs(): Observable<Array<Task>> {
        return this.tasksListObs.asObservable();
    }

    saveTasksInDb() {
        this.httpService.saveTasks(this.tasksListObs.getValue());
    }

}