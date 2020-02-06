import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Task } from '../shared/model/tasks.model';
import { Observable } from 'rxjs'
import { TasksService } from '../shared/services/tasks/tasks.service';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';
import { database } from 'firebase';


@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {
  public tasks$ :Observable<Task[]>

  constructor(
    private authService:AuthService, 
    private router:Router, private http: HttpClient, 
    private tasksService: TasksService) { }
  
  removeTask(value) {
    this.tasksService.deleteTask(value)
    .subscribe(res => console.log(res));
  }
  log(value){
    console.log(value);
  }
  newTask(taskName: string, taskDescription: string, taskDeadline:string) {

    if(taskName != "" && taskDescription != "" && taskDeadline.toString() != ""){
      const newTask = new Task(taskName, taskDescription, taskDeadline ,null);
      this.tasksService.addTask(newTask)
      .subscribe((addedTask: Task) => {
      // countries opnieuw ophalen in de subscription
      this.tasks$ = this.tasksService.getTasks();
      });
    }
    else{
      Swal.fire("Vul alle velden in!");
    }
    
}
  
  ngOnInit() {
    if (!this.authService.isLoggedIn) {
      this.router.navigate(['/login'])
      Swal.fire("Log in first!");
    }

    this.tasks$ = this.tasksService.getTasks();

  }

}
