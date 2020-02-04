import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from '../../model/tasks.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class TasksService {
url:string = 'http://localhost:3000/'
  constructor(private http:HttpClient) { }
  getTasks():Observable<Task[]>{
    return this.http
    .get<Task[]>(this.url)
    .pipe(map(res => res['tasks']));
  }
}
