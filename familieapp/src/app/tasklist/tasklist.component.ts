import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Task } from '../shared/model/tasks.model';
import { Observable } from 'rxjs'
import { TasksService } from '../shared/services/tasks/tasks.service'


@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {
  public tasks$:Observable<Task[]>
  constructor(private authService:AuthService, private router:Router, private http: HttpClient, private tasksService: TasksService) { }
  
  
  
  
  ngOnInit() {
    if (!this.authService.isLoggedIn) {
      this.router.navigate(['/login'])
    }
   
    this.tasks$ = this.tasksService.getTasks();
  }

}
