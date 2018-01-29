import { Observable } from 'rxjs/Rx';
import { Task } from '../models/task';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpService {

  readonly URL_DB = 'https://api.mlab.com/api/1/databases/angular_todo/collections/tasks';
  readonly param = new HttpParams().set('apiKey', 'Whjd5pdXib_KAUbpb7xZo5y-tZq0m2zQ');

  constructor(private http: HttpClient) {
    this.getTasks();
  }

  getTasks(): Observable<Array<Task>> {
    return this.http.get<Array<Task>>(this.URL_DB, { params: this.param });
  }

  saveTasks(list: Array<Task>) {
    this.http.post(this.URL_DB, list, { params: this.param }).subscribe(data => {
      console.log(data);
    });
  }
}
