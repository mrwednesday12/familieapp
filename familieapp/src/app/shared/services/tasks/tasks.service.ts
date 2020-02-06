import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from '../../model/tasks.model';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class TasksService {
url:string = 'http://localhost:3000/tasks';

  constructor(private http:HttpClient) { }

  getTasks():Observable<Task[]>{
    return this.http
    .get<Task[]>(this.url)
    .pipe(tap(results => results));
  }
  addTask(newTask){
    const headers = new HttpHeaders().set("Content-type", "application/json");
    return this.http.post(this.url, newTask, { headers: headers });
  }

  deleteTask(value) {
    return this.http.delete(this.url + "/" + value);
  }
}
